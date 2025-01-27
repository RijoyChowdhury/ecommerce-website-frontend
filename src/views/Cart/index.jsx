import React from 'react';
import { Divider } from '@mui/material';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { FaChevronLeft, FaRegTrashAlt } from 'react-icons/fa';
import { PiHandArrowDownLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import Counter from '../../components/Counter';

const CartPage = () => {
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
                                        <div className='w-[50%] flex flex-col border-2'>
                                            <span>Apple AirPods Max Over-Ear Wireless Headphone</span>
                                            <span>$47.00 -$5.00 $42.00</span>
                                            <span>Color: Grey</span>
                                            <span>Dimension: 60x90cm</span>
                                        </div>
                                        <div className='w-[15%] p-7 border-2'><Counter /></div>
                                        <div className='w-[15%] flex justify-center items-center border-2'>
                                            <span className='text-primary text-lg'>$51.04</span>
                                        </div>
                                        <div className='w-[10%] text-2xl flex justify-center items-center border-2'>
                                            <FaRegTrashAlt className='cursor-pointer hover:text-red-500' />
                                        </div>
                                    </div>)}

                                </div>
                            </div>

                            <Link to="/login" className='flex gap-2 items-center link pt-8'><FaChevronLeft /> Continue Shopping</Link>
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
                                    <span className='link underline'>Have a promo code?</span>
                                </div>
                                <div className='flex p-2 gap-2 h-[60px]'>
                                    <button className='btn' >Proceed to Checkout</button>
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
        </>
    )
};

export default CartPage;