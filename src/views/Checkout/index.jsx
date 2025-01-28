import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { FaChevronDown, FaChevronLeft, FaRegTrashAlt } from 'react-icons/fa';
import { PiHandArrowDownLight } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import Counter from '../../components/Counter';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutPage = () => {
    const [showPromoSegment, setShowPromoSegment] = useState(false);
    const [showItemLIst, setShowItemLIst] = useState(false);
    const togglePromoSegment = () => {
        setShowPromoSegment(state => !state);
    }
    const toggleItemList = () => setShowItemLIst(state => !state);

    return (
        <>
            <div className='block cart-page'>
                <div className='container py-8'>
                    <div className='flex gap-8'>
                        <div className='w-[70%]'>
                            <div className='cart-content-wrapper'>
                                <div className='border-2 rounded-md h-[50px]'>Personal Information</div>
                                <div className='border-2 rounded-md h-[50px]'>Address</div>
                                <div className='border-2 rounded-md h-[50px]'>Shipping Method</div>
                                <div className='border-2 rounded-md h-[50px]'>Payment</div>
                            </div>
                        </div>

                        <div className='w-[30%]'>

                            {/* cart total */}
                            <div className='checkout-amt border-2 rounded-md p-4'>
                                {/* items list */}
                                <div className='flex flex-col p-2'>
                                    <div><span>5 Items</span></div>
                                    <div className='flex'><div className='flex items-center gap-2 cursor-pointer link' onClick={toggleItemList}><span>Show Cart Items</span><FaChevronDown /></div></div>
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
                                        <div className='absolute border-2 bottom-0 right-0'>$42.00</div>
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

export default CheckoutPage;