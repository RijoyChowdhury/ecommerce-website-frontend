import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { FaChevronLeft, FaRegTrashAlt } from 'react-icons/fa';
import { PiHandArrowDownLight } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import Counter from '../../components/Counter';
import toast from 'react-hot-toast';
import './style.css';
import DeliveryPolicies from '../../components/Policies';
import { actions } from '../../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import noImgAvailable from '../../assets/images/no-img-available.png';
import cartEmpty from '../../assets/images/cart-empty.avif';
import LoadingSpinner from '../../components/LoadingSpinner';
import ConfirmDialog from '../../components/ConfirmModal';

const notify = () => toast.success(`Product removed from cart.`);

const CartPage = () => {
    const navigate = useNavigate();
    const [showPromoSegment, setShowPromoSegment] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();
    const { getCartDetails, removeCartItem, updateProductQuantity } = actions;
    const { cart, isLoading, error } = useSelector(state => state.cartSlice);
    const { user } = useSelector(state => state.userSlice);
    const deleteConfirmMsg = 'Do you want to delete this item from cart?';

    const togglePromoSegment = () => {
        setShowPromoSegment(state => !state);
    }

    const goToCheckout = () => {
        navigate('/checkout');
    }

    const fetchCartDetails = async () => {
        if (cart) {
            setCartItems(cart);
        } else {
            dispatch(getCartDetails());
        }
    }

    const getTotalCartAmt = () => {
        if (cartItems.length === 0) return 0;
        return cartItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
    }

    const changeProductQty = (productId, quantity) => {
        dispatch(updateProductQuantity({ productId, quantity }));
    }

    const removeItem = (productId) => {
        setOpenConfirmDialog(true);
        setProductToDelete(productId);
    }

    const onDeleteConfirm = () => {
        dispatch(removeCartItem(productToDelete));
        setOpenConfirmDialog(false);
        notify();
    }

    const onDeleteCancel = () => {
        setProductToDelete(null);
        setOpenConfirmDialog(false);
    }

    useEffect(() => {
        fetchCartDetails();
    }, [cart]);

    return (
        <>
            <div className='block cart-page'>
                <div className='container py-8'>
                    <div className='flex gap-8'>
                        <div className='w-[70%]'>
                            <div className='cart-content-wrapper border-2 rounded-md'>
                                <div className='cart-header text-xl text-black border-b-2 p-4'>Shopping Cart</div>

                                {/* cart items wrapper */}
                                <div className='cart-content'>

                                    {/* cart item list */}
                                    {!isLoading && cartItems.length > 0 && cartItems.map((item, index) => <div key={index} className='cart-item flex p-4 gap-2'>
                                        <div className='product-thumbnail w-[10%] flex justify-start'>
                                            <div className=''>
                                                <img src={item.product.images.length > 0 ? item.product.images[0] : noImgAvailable} className='border-2 rounded-md overflow-hidden' />
                                            </div>
                                        </div>
                                        <div className='w-[50%] flex flex-col ml-6'>
                                            <span className='text-black font-semibold'>{item.product.name}</span>
                                            <span className='flex gap-2 items-center'>
                                                <span className='line-through'>$47.00</span>
                                                <span className='text-sm text-red-500'>-$5.00</span>
                                                <span className='text-base text-primary'> $42.00</span>
                                            </span>
                                            <span className='flex gap-2 items-center'>
                                                <span className='text-black font-semibold'>Color:</span>
                                                <span> {item.color}</span>
                                            </span>
                                            <span className='flex gap-2 items-center'>
                                                <span className='text-black font-semibold'>Size:</span>
                                                <span> {item.size}</span>
                                            </span>
                                        </div>
                                        <div className='w-[15%] p-7'><Counter start={item.quantity} onValueChange={(val) => changeProductQty(item._id, val)} /></div>
                                        <div className='w-[15%] flex justify-center items-center'>
                                            <span className='text-primary text-lg'>${item.quantity * item.product.price}</span>
                                        </div>
                                        <div className='w-[10%] text-2xl flex justify-center items-center'>
                                            <FaRegTrashAlt className='cursor-pointer hover:text-red-500' onClick={() => removeItem(item._id)} />
                                        </div>
                                    </div>)}

                                    {/* loading spinner */}
                                    {isLoading && <div className='w-full h-[480px]'><LoadingSpinner /></div>}

                                    {/* empty cart */}
                                    {!isLoading && cartItems.length === 0 && <div className='h-[480px] flex items-center justify-center'><img src={cartEmpty} width="450" /></div>}

                                </div>
                            </div>

                            <Link to="/products" className='flex gap-2 items-center link pt-4'><FaChevronLeft /> Continue Shopping</Link>
                        </div>

                        <div className='w-[30%]'>
                            {/* cart total */}
                            <div className='checkout-amt border-2 rounded-md p-4'>
                                <div className='item-count p-2'>
                                    <li className='flex justify-between font-semibold'><span>{cartItems.length} item(s)</span><span className='text-primary'>${getTotalCartAmt()}</span></li>
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
                                <div className='flex p-2 gap-2 h-[60px]'>
                                    <button className='btn' onClick={goToCheckout}>Proceed to Checkout</button>
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
            
            {/* Confirm dialog */}
            <ConfirmDialog open={openConfirmDialog} confirmText={deleteConfirmMsg} onConfirm={onDeleteConfirm} onCancel={onDeleteCancel} />
        </>
    )
};

export default CartPage;