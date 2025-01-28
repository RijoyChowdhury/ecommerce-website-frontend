import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { FaChevronLeft, FaRegTrashAlt } from 'react-icons/fa';
import { PiHandArrowDownLight } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import Counter from '../../components/Counter';
import toast, { Toaster } from 'react-hot-toast';
import './style.css';

const notify = (value) => toast.success(`Product ${value} removed from cart.`);

const CartPage = () => {
    const navigate = useNavigate();
    const [showPromoSegment, setShowPromoSegment] = useState(false);
    const togglePromoSegment = () => {
        setShowPromoSegment(state => !state);
    }
    const goToCheckout = () => {
        navigate('/checkout');
    }
    return (
        <>
            <div className='block cart-page'>
                <div className='container py-8'>
                    <div className='flex gap-8'>
                        <div className='w-[70%]'>
                            <div className='cart-content-wrapper border-2 rounded-md'>
                                <div className='cart-header text-xl text-black border-b-2 p-4'>Shopping Cart</div>

                                {/* cart items */}
                                <div className='cart-content'>

                                    {new Array(5).fill(0).map((val, index) => <div key={index} className='cart-item flex p-4 gap-2'>
                                        <div className='product-thumbnail w-[10%] flex justify-start'>
                                            <div className=''>
                                                <img src={cart_thumbnail_product} className='border-2 rounded-md overflow-hidden' />
                                            </div>
                                        </div>
                                        <div className='w-[50%] flex flex-col ml-6'>
                                            <span className='text-black font-semibold'>Apple AirPods Max Over-Ear Wireless Headphone</span>
                                            <span className='flex gap-2 items-center'>
                                                <span className='line-through'>$47.00</span>
                                                <span className='text-sm text-red-500'>-$5.00</span>
                                                <span className='text-base text-primary'> $42.00</span>
                                            </span>
                                            <span className='flex gap-2 items-center'>
                                                <span className='text-black font-semibold'>Color:</span>
                                                <span> Grey</span>
                                            </span>
                                            <span className='flex gap-2 items-center'>
                                                <span className='text-black font-semibold'>Dimension:</span>
                                                <span> 60x90cm</span>
                                            </span>
                                        </div>
                                        <div className='w-[15%] p-7'><Counter /></div>
                                        <div className='w-[15%] flex justify-center items-center'>
                                            <span className='text-primary text-lg'>$51.04</span>
                                        </div>
                                        <div className='w-[10%] text-2xl flex justify-center items-center'>
                                            <FaRegTrashAlt className='cursor-pointer hover:text-red-500' onClick={() => notify(index)} />
                                        </div>
                                    </div>)}

                                </div>
                            </div>

                            <Link to="/products" className='flex gap-2 items-center link pt-8'><FaChevronLeft /> Continue Shopping</Link>
                        </div>

                        <div className='w-[30%]'>
                            {/* cart total */}
                            <div className='checkout-amt border-2 rounded-md p-4'>
                                <div className='item-count p-2'>
                                    <li className='flex justify-between font-semibold'><span>1 item</span><span className='text-primary'>$42.00</span></li>
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
                            <div className="policies-wrapper flex flex-col gap-2 mt-6">
                                <div className='rounded-md bg-custom-light-gray flex py-2'>
                                    <span className="item-product flex items-center text-4xl mx-6 text-primary">
                                        <CiLock />
                                    </span>
                                    <span>
                                        <span className="block-title text-black text-base font-semibold">Security policy</span>
                                        <p>(edit with the Customer Reassurance module)</p>
                                    </span>
                                </div>
                                <div className='rounded-md bg-custom-light-gray flex py-2'>
                                    <span className="item-product flex items-center text-4xl mx-6 text-primary">
                                        <CiDeliveryTruck />
                                    </span>
                                    <span>
                                        <span className="block-title text-black text-base font-semibold">Delivery policy</span>
                                        <p>(edit with the Customer Reassurance module)</p>
                                    </span>
                                </div>
                                <div className='rounded-md bg-custom-light-gray flex py-2'>
                                    <span className="item-product flex items-center text-4xl mx-6 text-primary">
                                        <PiHandArrowDownLight />
                                    </span>
                                    <span>
                                        <span className="block-title text-black text-base font-semibold">Return policy</span>
                                        <p>(edit with the Customer Reassurance module)</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toaster />
        </>
    )
};

export default CartPage;