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
import { FaCheck } from 'react-icons/fa6';

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

                                <div className='section flex flex-col border-2 rounded-md'>
                                    <div className='section-header h-[50px] flex items-center'>
                                        <div className='text-2xl text-green-500 mx-4'><FaCheck /></div>
                                        <div className='section-header flex items-center h-full w-[100%]'>
                                            <span className='text-base text-black '>Personal Information</span>
                                        </div>
                                        <div className='flex items-center justify-end text-sm mx-4'><CiEdit /><em className='ml-1'>Edit</em></div>
                                    </div>

                                    <div className='section-content h-[200px]'></div>
                                </div>

                                <div className='border-2 rounded-md h-[50px] flex items-center'>
                                    <div className='text-2xl text-green-500 mx-4'><FaCheck /></div>
                                    <div className='section-header flex items-center h-full w-[100%]'>
                                        <span className='text-base text-black '>Address</span>
                                    </div>
                                    <div className='flex items-center justify-end text-sm mx-4'><CiEdit /><em className='ml-1'>Edit</em></div>
                                </div>

                                <div className='border-2 rounded-md h-[50px] flex items-center'>
                                    <div className='text-2xl text-green-500 mx-4'><FaCheck /></div>
                                    <div className='section-header flex items-center h-full w-[100%]'>
                                        <span className='text-base text-black '>Shipping Method</span>
                                    </div>
                                    <div className='flex items-center justify-end text-sm mx-4'><CiEdit /><em className='ml-1'>Edit</em></div>
                                </div>

                                <div className='border-2 rounded-md h-[50px] flex items-center'>
                                    <div className='text-2xl text-green-500 mx-4'><FaCheck /></div>
                                    <div className='section-header flex items-center h-full w-[100%]'>
                                        <span className='text-base text-black '>Payment</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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