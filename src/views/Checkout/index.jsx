import React, { useEffect, useState } from 'react';
import { Divider, Tooltip } from '@mui/material';
import { CiDeliveryTruck, CiEdit, CiLock } from 'react-icons/ci';
import { FaChevronDown, FaChevronLeft, FaChevronUp, FaRegTrashAlt } from 'react-icons/fa';
import { PiHandArrowDownLight } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import Counter from '../../components/Counter';
import toast, { Toaster } from 'react-hot-toast';
import DeliveryPolicies from '../../components/Policies';
import { FaCheck, FaRegFlag } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import UserInfo from '../../components/UserInfo';
import {
    FormControl,
    FormControlLabel,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import AddressInfo from '../../components/AddressInfo';
import Logo1 from '../../assets/images/shipping-logo/amazon-logo.jpg';
import Logo2 from '../../assets/images/shipping-logo/dhl-logo.webp';
import Logo3 from '../../assets/images/shipping-logo/usps-logo.png';
import Logo4 from '../../assets/images/shipping-logo/fedex-logo.png';
import img_not_found from '../../assets/images/no-img-available.png'
import LoadingSpinner from '../../components/LoadingSpinner';
import { actions, blankStates } from '../../redux/slices/userSlice.jsx';
import { actions as cartActions } from '../../redux/slices/cartSlice.jsx';
import { cloneDeep } from 'lodash-es';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import {VisaCard, MasterCard, AmexCard, PayPal, ApplePay, AffirmPay, GooglePay} from '../../components/VectorIcons/index.jsx'

const RadioStyle = {
    color: 'var(--gray)',
    '&.Mui-checked': {
        color: 'var(--primary)',
    },
};

const notifyError = (value) => toast.error(value);

const CheckoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, active_address } = useSelector(state => state.userSlice);
    const { cart, isLoading } = useSelector(state => state.cartSlice);

    const { fetchUserAddresses } = actions;
    const { checkoutCartItems } = cartActions;

    const [showPromoSegment, setShowPromoSegment] = useState(false);
    const [showItemLIst, setShowItemLIst] = useState(false);
    const [openedSection, setOpenedSection] = useState(1);
    const [addressLoading, setAddressLoading] = useState(false);
    const [updatedAddress, setUpdatedAddress] = useState({});
    const [deliveryMode, setDeliveryMode] = useState('amazon');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [loadingPaymentPage, setLoadingPaymentPage] = useState(false);

    const [userDetails, setUserDetails] = useState({
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        address: active_address ? active_address : cloneDeep({ ...blankStates.blankUserAddress }),
    });

    const togglePromoSegment = () => {
        setShowPromoSegment(state => !state);
    }

    const toggleItemList = () => setShowItemLIst(state => !state);

    const confirmUserDetails = () => {
        console.log('userDetails')
        console.log(userDetails)
        setOpenedSection(2);
    }

    const confirmDeliveryAddress = () => {
        console.log('updatedAddress')
        console.log(updatedAddress)
        setOpenedSection(3);
    }

    const updateDeliveryMode = (value) => {
        console.log('updateDeliveryMode value');
        console.log(deliveryMode);
        setOpenedSection(4);
    }

    const revertDetails = (section) => {
        setUserDetails(state => cloneDeep({ ...state, address: userDetails.address }));
    }

    const loadUserAddress = async () => {
        const response = await dispatch(fetchUserAddresses()).unwrap();
        if (response.success) {
            const addressData = response.data[0];
            setUserDetails(state => ({ ...state, address: response.data[0] ?? cloneDeep({ ...blankStates.blankUserAddress }) }));
            setAddressLoading(false);
        }
    }

    const proceedToCheckout = async () => {
        setLoadingPaymentPage(true);
        const response = await dispatch(checkoutCartItems({
            email: userDetails.email,
            items: cart,
            payment_method_types: [paymentMethod],
            metadata: { // all metadata fields must be "key: string" format
                user: JSON.stringify(userDetails),
            },
        })).unwrap();
        if (response.success) {
            window.location.href = response.data.payment_url;
        } else {
            notifyError('Redirection Failed!');
            setLoadingPaymentPage(false);
        }
    }

    const getTotalCartAmt = () => {
        if (!cart || cart.length === 0) return 0;
        return cart.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
    }

    const isPayLaterNotAllowed = () => {
        return Math.ceil(getTotalCartAmt() / 90) <= 35.0;
    }

    useEffect(() => {
        if (active_address) {
            setUserDetails(state => ({ ...state, address: active_address }));
        } else {
            setAddressLoading(true);
            loadUserAddress();
        }
    }, [active_address]);

    return (
        <>
            <div className='block cart-page'>
                <div className='container py-8'>
                    <div className='flex gap-8 relative'>

                        {loadingPaymentPage && <div className='absolute w-full h-full z-10'><LoadingSpinner text='Redirecting to payment page...' /></div>}

                        {/* Left Section */}
                        <div className='w-[70%]'>
                            <div className='cart-content-wrapper flex flex-col gap-2'>

                                {/* user details */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {openedSection === 1 ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Personal Information</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm hover:text-primary mx-4 cursor-pointer' onClick={() => setOpenedSection(1)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    <div className={`section-content transition-all duration-1000 overflow-hidden ${openedSection === 1 ? 'h-[294px]' : 'h-[0px]'}`}>

                                        <div className='flex flex-col gap-4 mt-2'>

                                            {/* preferred prefix */}
                                            <div className="form-group row flex items-center gap-2 w-[92%]">
                                                <div className='w-[18%] text-base flex justify-end'>
                                                    <span>Preferred Prefix<sup className='text-primary text-lg'>*</sup></span>
                                                </div>
                                                <div className='w-[82%] ml-2 flex'>
                                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            value={'single'}
                                                            defaultValue={'single'}
                                                            name="userPrefix"
                                                            className='flex gap-8'
                                                            onChange={e => handleInput(e)}
                                                        >
                                                            <FormControlLabel value="single" control={<Radio sx={RadioStyle} disableRipple={true} />} label="Mr./Ms." />
                                                            <FormControlLabel value="married" control={<Radio sx={RadioStyle} disableRipple={true} />} label="Mrs." />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <div className='flex items-center justify-end gap-2 w-[100%]'>
                                                        <span className='text-primary text-2xl'>*</span>
                                                        <em>Required Fields</em>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* full name */}
                                            <div className="form-group row flex items-baseline gap-2">
                                                <div className='w-[18%] text-base flex justify-end'>
                                                    <span>Full Name<sup className='text-primary text-lg'>*</sup></span>
                                                </div>
                                                <div className='w-[82%] flex flex-col'>
                                                    <FormControl sx={{ width: '90%' }} variant="outlined">
                                                        <TextField id="outlined-basic" value={userDetails.name} name='firstName' variant="outlined" size="small" onChange={e => setUserDetails(state => ({ ...state, name: e.target.value }))} />
                                                    </FormControl>
                                                    <span>Only letters and the dot (.) character, followed by a space, are allowed.</span>
                                                </div>
                                            </div>

                                            {/* email */}
                                            <div className="form-group row flex items-center gap-2">
                                                <div className='w-[18%] text-base flex justify-end'><span>Email<sup className='text-primary text-lg'>*</sup></span></div>
                                                <div className='w-[82%]'>
                                                    <FormControl sx={{ width: '90%' }} variant="outlined">
                                                        <TextField id="outlined-basic" value={userDetails.email} name="email" variant="outlined" size="small" onChange={e => setUserDetails(state => ({ ...state, email: e.target.value }))} />
                                                    </FormControl>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[50%] h-[50px]'>
                                                <button className='btn' onClick={confirmUserDetails}>Confirm</button>
                                                <button className='btn !bg-white !text-primary' onClick={revertDetails}>Cancel</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* delivery address */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {openedSection === 2 ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Address</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm hover:text-primary mx-4 cursor-pointer' onClick={() => setOpenedSection(2)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    <div className={`section-content transition-all duration-1000 overflow-hidden ${openedSection === 2 ? 'h-[468px]' : 'h-[0px]'}`}>

                                        {addressLoading && <div className='w-full h-full'><LoadingSpinner /></div>}
                                        {<div className='w-[92%]'>
                                            <AddressInfo data={userDetails.address} onChange={value => setUpdatedAddress(value)}></AddressInfo>
                                        </div>}

                                        {/* Confirm section */}
                                        {<div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[50%] h-[50px]'>
                                                <button className='btn' onClick={confirmDeliveryAddress}>Confirm</button>
                                                <button className='btn !bg-white !text-primary' onClick={revertDetails}>Cancel</button>
                                            </div>
                                        </div>}


                                    </div>
                                </div>

                                {/* shipping method */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {openedSection === 3 ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Shipping Method</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm hover:text-primary mx-4 cursor-pointer' onClick={() => setOpenedSection(3)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    <div className={`section-content transition-all duration-1000 overflow-hidden ${openedSection === 3 ? 'h-[338px]' : 'h-[0px]'}`}>


                                        <div className='flex justify-center'>

                                            <FormControl sx={{ width: '100%', marginLeft: '5rem' }} variant="outlined">
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    value={deliveryMode}
                                                    name="location_type"
                                                    className='flex justify-center'
                                                    onChange={e => setDeliveryMode(e.target.value)}
                                                >
                                                    <div className='flex flex-col w-[100%] gap-4'>
                                                        <FormControlLabel value="amazon" control={<Radio sx={RadioStyle} disableRipple={true} />} label={
                                                            <div className='grid grid-cols-4'>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <div className='w-[50%]'><img src={Logo1} /></div>
                                                                </div>
                                                                <div className='w-[100%] flex justify-center items-center'>Amazon Logistics</div>
                                                                <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <span className='text-primary font-bold text-lg'>$7.00</span>
                                                                </div>
                                                            </div>
                                                        } />
                                                        <FormControlLabel value="dhl" control={<Radio sx={RadioStyle} disableRipple={true} />} label={
                                                            <div className='grid grid-cols-4'>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <div className='w-[50%]'><img src={Logo2} /></div>
                                                                </div>
                                                                <div className='w-[100%] flex justify-center items-center'>DHL</div>
                                                                <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <span className='text-primary font-bold text-lg'>$7.00</span>
                                                                </div>
                                                            </div>
                                                        } />
                                                        <FormControlLabel value="usps" control={<Radio sx={RadioStyle} disableRipple={true} />} label={
                                                            <div className='grid grid-cols-4'>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <div className='w-[50%]'><img src={Logo3} /></div>
                                                                </div>
                                                                <div className='w-[100%] flex justify-center items-center'>USPS</div>
                                                                <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <span className='text-primary font-bold text-lg'>$7.00</span>
                                                                </div>
                                                            </div>
                                                        } />
                                                        <FormControlLabel value="fedex" control={<Radio sx={RadioStyle} disableRipple={true} />} label={
                                                            <div className='grid grid-cols-4'>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <div className='w-[50%]'><img src={Logo4} /></div>
                                                                </div>
                                                                <div className='w-[100%] flex justify-center items-center'>FedEx</div>
                                                                <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                                                <div className='w-[100%] flex justify-center items-center'>
                                                                    <span className='text-primary font-bold text-lg'>$7.00</span>
                                                                </div>
                                                            </div>
                                                        } />
                                                    </div>
                                                </RadioGroup>
                                            </FormControl>




                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[480px] h-[50px]'>
                                                <button className='btn' onClick={updateDeliveryMode}>Confirm</button>
                                                <button className='btn !bg-white !text-primary'>Cancel</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                {/* payment method */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {openedSection === 4 ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Payment</span>
                                        </div>
                                        {/* <div className='flex items-center justify-end text-sm mx-4'><CiEdit /><em className='ml-1'>Edit</em></div> */}
                                        <div className='flex items-center justify-end text-sm hover:text-primary mx-4 cursor-pointer' onClick={() => setOpenedSection(4)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    <div className={`section-content transition-all duration-1000 overflow-hidden ${openedSection === 4 ? 'h-[268px]' : 'h-[0px]'}`}>


                                        <div className='w-full flex justify-center'>
                                            <div className='flex'>

                                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        value={paymentMethod}
                                                        name="location_type"
                                                        className='flex justify-center'
                                                        onChange={e => setPaymentMethod(e.target.value)}
                                                    >
                                                        <div className='flex flex-col w-[100%] gap-4'>
                                                            <FormControlLabel value="card" control={<Radio sx={RadioStyle} disableRipple={true} />} label={
                                                                <div className='w-[100%] flex justify-center items-center gap-2'>
                                                                    <VisaCard />
                                                                    <MasterCard />
                                                                    <AmexCard />
                                                                    <span>(Use Debit/Credit Card. Paid in INR/USD)</span>
                                                                </div>
                                                            } />
                                                            <FormControlLabel value="amazon_pay" control={<Radio sx={RadioStyle} disableRipple={true} />} label={
                                                                <div className='w-[100%] flex justify-center items-center gap-2'>
                                                                    <PayPal />
                                                                    <ApplePay />
                                                                    <GooglePay />
                                                                    <span>(Use Digital Wallet. Region specific & paid only in USD)</span>
                                                                </div>
                                                            } />
                                                            <FormControlLabel value="affirm" control={<Radio sx={RadioStyle} disabled={isPayLaterNotAllowed()} disableRipple={true} />} label={
                                                                <div className='w-[100%] flex justify-center items-center gap-2'>
                                                                    <span style={{opacity: isPayLaterNotAllowed() ? '0.5' : '1.0'}}>
                                                                        <AffirmPay />
                                                                    </span>
                                                                    <span className='flex items-center'>
                                                                        (Buy Now, Pay Later. Paid in USD)
                                                                    <Tooltip title="Amount must be no less than $35.00 USD for the Affirm payment method" placement="top" arrow>
                                                                        <span className='text-primary text-xl ml-1'><IoMdInformationCircleOutline /></span>
                                                                    </Tooltip>
                                                                    </span>
                                                                </div>
                                                            } />
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>


                                            </div>
                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[480px] h-[50px]'>
                                                <button className='btn' onClick={proceedToCheckout}>Confirm</button>
                                                <button className='btn !bg-white !text-primary'>Cancel</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Right section */}
                        <div className='w-[30%]'>

                            {/* cart total */}
                            {isLoading && <div className='border-2 rounded-md h-[267px]'><LoadingSpinner /></div>}
                            {!isLoading && cart && <div className='checkout-amt border-2 rounded-md p-4'>
                                {/* items list */}
                                <div className='flex justify-between'>
                                    <div>
                                        <span>{isLoading || !cart ? 'Loading' : `${cart.length} Item(s)`} </span>
                                    </div>
                                    <div className='flex'>
                                        {cart && <div className='flex items-center gap-2 cursor-pointer link' onClick={toggleItemList}>
                                            <span>Show Items</span>{showItemLIst ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>}
                                    </div>
                                </div>

                                <div className='my-2'><Divider /></div>

                                <div className={`flex flex-col gap-2 transition-all duration-1000 overflow-scroll no-scrollbar ${showItemLIst ? `h-[440px]` : 'h-[0px]'}`}>
                                    {cart.map((item, index) =>
                                        <div key={index} className='product-item flex relative'>
                                            <div className='flex items-center'>
                                                <img src={item.product.images[0] ?? img_not_found} className='border-2 rounded-md w-[90px] h-[90px]' />
                                            </div>
                                            <ul className='px-2'>
                                                <li className='text-primary font-semibold'>{item.product.name}</li>
                                                <li>Color: {item.color}</li>
                                                <li>Size: {item.size}</li>
                                                <li>Quantity: {item.quantity}</li>
                                            </ul>
                                            <div className='absolute bottom-0 right-0 text-primary text-base'>${item.product.price * item.quantity}.00</div>
                                        </div>)}
                                </div>

                                <div className={`transition-all duration-1000 ${showItemLIst ? 'opacity-100 my-2' : 'opacity-0'}`}><Divider /></div>

                                <div className='item-count'>
                                    <li className='flex justify-between font-semibold'><span>Subtotal</span><span className='text-primary'>${getTotalCartAmt()}</span></li>
                                    <li className='flex justify-between font-semibold'><span>Shipping</span><span className='text-primary'>Free</span></li>
                                </div>

                                <div className='my-2'><Divider /></div>

                                <div className='item-total'>
                                    <li className='flex justify-between font-semibold'><span>Total (shipping excl.)</span><span className='text-primary'>${getTotalCartAmt()}</span></li>
                                    <li className='flex justify-between font-semibold'><span>Shipping:</span><span className='text-primary'>Free</span></li>
                                    <li className='flex justify-between font-semibold'><span>Total (shipping incl.)</span><span className='text-primary'>${getTotalCartAmt()}</span></li>
                                    <div className='my-2'>
                                        <span className='link underline' onClick={togglePromoSegment}>Have a promo code?</span>
                                        {showPromoSegment && <div className='promo-segment flex gap-2 h-[40px] mt-2'>
                                            <input className='w-[100%] border-2 rounded-md border-primary' type='text' placeholder='NEWUSER50' />
                                            <div className='w-[55%]'><button className='btn' >Add Code</button></div>
                                        </div>}
                                    </div>
                                </div>
                            </div>}

                            {/* policies */}
                            <div className='mt-6'>
                                <DeliveryPolicies />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CheckoutPage;