import React, { useState } from 'react';
import { Divider } from '@mui/material';
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

const RadioStyle = {
    color: 'var(--gray)',
    '&.Mui-checked': {
        color: 'var(--primary)',
    },
};

const blankUserAddress = {
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: 'BDS',
    country: 'AFG',
    pincode: '',
    mobile: '',
    location_type: '',
    status: '',
};

const CheckoutPage = () => {
    const { user, active_address } = useSelector(state => state.userSlice);
    const [showPromoSegment, setShowPromoSegment] = useState(false);
    const [showItemLIst, setShowItemLIst] = useState(false);
    const [userDetails] = useState({ ...user });
    const [isUserSectionVisible, setIsUserSectionVisible] = useState(true);
    const [isAddressSectionVisible, setIsAddressSectionVisible] = useState(false);
    const [isShippingSectionVisible, setIsShippingSectionVisible] = useState(false);
    const [isPaymentSectionVisible, setIsPaymentSectionVisible] = useState(true);

    const togglePromoSegment = () => {
        setShowPromoSegment(state => !state);
    }
    const toggleItemList = () => setShowItemLIst(state => !state);

    return (
        <>
            <div className='block cart-page'>
                <div className='container py-8'>
                    <div className='flex gap-8'>

                        {/* Left Section */}
                        <div className='w-[70%]'>
                            <div className='cart-content-wrapper'>

                                {/* user details */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {isUserSectionVisible ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Personal Information</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm mx-4 cursor-pointer' onClick={() => setIsUserSectionVisible(true)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    {isUserSectionVisible && <div className='section-content'>

                                        <div className='flex flex-col gap-4 mt-2'>

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

                                            <div className="form-group row flex items-baseline gap-2">
                                                <div className='w-[18%] text-base flex justify-end'>
                                                    <span>Full Name<sup className='text-primary text-lg'>*</sup></span>
                                                </div>
                                                <div className='w-[82%] flex flex-col'>
                                                    <FormControl sx={{ width: '90%' }} variant="outlined">
                                                        <TextField id="outlined-basic" value={'Test'} name='firstName' variant="outlined" size="small" onChange={e => handleInput(e)} />
                                                    </FormControl>
                                                    <span>Only letters and the dot (.) character, followed by a space, are allowed.</span>
                                                </div>
                                            </div>


                                            <div className="form-group row flex items-center gap-2">
                                                <div className='w-[18%] text-base flex justify-end'><span>Email<sup className='text-primary text-lg'>*</sup></span></div>
                                                <div className='w-[82%]'>
                                                    <FormControl sx={{ width: '90%' }} variant="outlined">
                                                        <TextField id="outlined-basic" value={'test@test.com'} name="email" variant="outlined" size="small" onChange={e => handleInput(e)} />
                                                    </FormControl>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[50%] h-[50px]'>
                                                <button className='btn' onClick={() => setIsUserSectionVisible(false)}>Confirm</button>
                                                <button className='btn !bg-white !text-primary'>Cancel</button>
                                            </div>
                                        </div>

                                    </div>}
                                </div>

                                {/* delivery address */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {isAddressSectionVisible ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Address</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm mx-4 cursor-pointer' onClick={() => setIsAddressSectionVisible(true)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    {isAddressSectionVisible && <div className='section-content'>

                                        <div className='w-[92%]'>
                                            <AddressInfo data={blankUserAddress} handleInput={() => { }}></AddressInfo>
                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[50%] h-[50px]'>
                                                <button className='btn' onClick={() => setIsAddressSectionVisible(false)}>Confirm</button>
                                                <button className='btn !bg-white !text-primary'>Cancel</button>
                                            </div>
                                        </div>


                                    </div>}
                                </div>

                                {/* shipping method */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {isShippingSectionVisible ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Shipping Method</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm mx-4 cursor-pointer' onClick={() => setIsShippingSectionVisible(true)}><CiEdit /><span className='ml-1'>Edit</span></div>
                                    </div>

                                    {isShippingSectionVisible && <div className='section-content flex flex-col items-center gap-2'>


                                        <div className='w-[85%] flex h-[110px]'>
                                            <div className='w-[50%] flex justify-center items-center'>
                                                <Radio
                                                    checked={true}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <div><img src={Logo1} /></div>
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>Amazon Logistics</div>
                                            <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <span className='text-primary font-bold text-lg'>$7.00</span>
                                            </div>
                                        </div>

                                        <div className='w-[85%] flex h-[110px]'>
                                            <div className='w-[50%] flex justify-center items-center'>
                                                <Radio
                                                    checked={false}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <div><img src={Logo2} /></div>
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>DHL</div>
                                            <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <span className='text-primary font-bold text-lg'>$7.00</span>
                                            </div>
                                        </div>

                                        <div className='w-[85%] flex h-[110px]'>
                                            <div className='w-[50%] flex justify-center items-center'>
                                                <Radio
                                                    checked={false}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <div><img src={Logo3} /></div>
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>USPS</div>
                                            <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <span className='text-primary font-bold text-lg'>$7.00</span>
                                            </div>
                                        </div>

                                        <div className='w-[85%] flex h-[110px]'>
                                            <div className='w-[50%] flex justify-center items-center'>
                                                <Radio
                                                    checked={false}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <div><img src={Logo4} /></div>
                                            </div>
                                            <div className='w-[100%] flex justify-center items-center'>FedEx</div>
                                            <div className='w-[100%] flex justify-center items-center'>Delivery next day!</div>
                                            <div className='w-[100%] flex justify-center items-center'>
                                                <span className='text-primary font-bold text-lg'>$7.00</span>
                                            </div>
                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[480px] h-[50px]'>
                                                <button className='btn' onClick={() => setIsShippingSectionVisible(false)}>Confirm</button>
                                                <button className='btn !bg-white !text-primary'>Cancel</button>
                                            </div>
                                        </div>


                                    </div>}
                                </div>

                                {/* payment method */}
                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl mx-4'>
                                            {isPaymentSectionVisible ? <FaRegFlag className='text-red-500' /> : <FaCheck className='text-green-500' />}
                                        </div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Payment</span>
                                        </div>
                                        {/* <div className='flex items-center justify-end text-sm mx-4'><CiEdit /><em className='ml-1'>Edit</em></div> */}
                                    </div>

                                    {isPaymentSectionVisible && <div className='section-content flex flex-col items-center'>


                                        <div className='w-[85%] flex '>
                                            <div className='flex justify-center items-center ml-6'>
                                                <Radio
                                                    checked={false}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-left items-center'>
                                                Pay by Check <span className='ml-2 italic'>(Please send a demand draft to sales@yourcompany.com)</span>
                                            </div>
                                        </div>

                                        <div className='w-[85%] flex '>
                                            <div className='flex justify-center items-center ml-6'>
                                                <Radio
                                                    checked={false}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-left items-center'>
                                                Cash On Delivery
                                            </div>
                                        </div>

                                        <div className='w-[85%] flex '>
                                            <div className='flex justify-center items-center ml-6'>
                                                <Radio
                                                    checked={true}
                                                    onChange={() => { }}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={RadioStyle}
                                                />
                                            </div>
                                            <div className='w-[100%] flex justify-left items-center'>
                                                Internet Payment
                                            </div>
                                        </div>

                                        {/* Confirm section */}
                                        <div className='flex justify-center mt-8 mb-6'>
                                            <div className='flex gap-6 w-[480px] h-[50px]'>
                                                <button className='btn'>Confirm</button>
                                                <button className='btn !bg-white !text-primary'>Cancel</button>
                                            </div>
                                        </div>

                                    </div>}
                                </div>
                            </div>
                        </div>


                        {/* Right section */}
                        <div className='w-[30%]'>

                            {/* cart total */}
                            <div className='checkout-amt border-2 rounded-md p-4'>
                                {/* items list */}
                                <div className='flex flex-col p-2'>
                                    <div><span>5 Items</span></div>
                                    <div className='flex'>
                                        <div className='flex items-center gap-2 cursor-pointer link' onClick={toggleItemList}>
                                            <span>Show Cart Items</span>{showItemLIst ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>
                                </div>

                                {showItemLIst && <div className=''>
                                    {new Array(6).fill(0).map((val, index) => <div key={index} className='product-item flex relative mb-6'>
                                        <div>
                                            <img src={cart_thumbnail_product} className='border-2 rounded-md' />
                                        </div>
                                        <ul className='px-2'>
                                            <li>Apple AirPods Max Over-Ear Wireless Headphone x1</li>
                                            <li>Color: Grey</li>
                                            <li>Dimension: 60x90cm</li>
                                        </ul>
                                        <div className='absolute bottom-3 right-0 text-primary text-base'>$42.00</div>
                                    </div>)}
                                </div>}
                                <Divider />

                                <div className='item-count p-2'>
                                    <li className='flex justify-between font-semibold'><span>Subtotal</span><span className='text-primary'>$42.00</span></li>
                                    <li className='flex justify-between font-semibold'><span>Shipping</span><span className='text-primary'>$7.00</span></li>
                                </div>
                                <Divider />

                                <div className='item-total p-2'>
                                    <li className='flex justify-between font-semibold'><span>Total (tax excl.)</span><span className='text-primary'>$49.00</span></li>
                                    <li className='flex justify-between font-semibold'><span>Total (tax incl.)</span><span className='text-primary'>$49.00</span></li>
                                    <li className='flex justify-between font-semibold'><span>Taxes:</span><span className='text-primary'>$0.00</span></li>
                                    <div className='my-2'>
                                        <span className='link underline' onClick={togglePromoSegment}>Have a promo code?</span>
                                        {showPromoSegment && <div className='promo-segment flex gap-2 h-[40px] mt-2'>
                                            <input className='w-[100%] border-2 rounded-md border-primary' type='text' placeholder='NEWUSER50' />
                                            <div className='w-[55%]'><button className='btn' >Add Code</button></div>
                                        </div>}
                                    </div>
                                </div>
                            </div>

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