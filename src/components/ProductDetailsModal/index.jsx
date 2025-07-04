import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { FaRegThumbsUp } from 'react-icons/fa';
import ProgressBar from '../../components/ProgressBar';
import ColorCheckbox from '../../components/ColorCheckbox';
import Counter from '../../components/Counter';
import { HiOutlineSquare2Stack } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { PiHandArrowDownLight } from 'react-icons/pi';
import StarRating from '../../components/StarRating';
import product_big_1 from '../../assets/images/product_big_1.jpg';
import product_thumbnail_1 from '../../assets/images/product_thumbnail_1.jpg';
import minim_brand_1 from '../../assets/images/minim_brand_1.jpg';
import './style.css';

const ProductDetailsModal = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <>
            {/* product details section */}
            <div className='product-details-wrapper flex gap-5'>

                <div className='product-img-sticky-wrapper w-[40%]'>
                    <div className='product-img-wrapper sticky top-20'>
                        <div className='img-display-wrapper'>
                            <div className='border-2 mb-6'><img src={product_big_1} /></div>
                        </div>

                        {/* product img section wrapper */}
                        <div className='img-selector-wrapper flex'>
                            <div className='w-[5%] py-2 px-1'>
                                <div className='btn-navigate btn-up h-full'>
                                    <button className='btn text-xl' onClick={() => swiper.slidePrev()}><IoChevronBackOutline /></button>
                                </div>
                            </div>

                            <div className='w-[90%] px-2'>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={10}
                                    slidesPerView={5}
                                    onSwiper={(swiper) => setSwiper(swiper)}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide className='border-2 rounded-lg overflow-hidden hover:border-primary'>
                                        <div>
                                            <img src={product_thumbnail_1} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='border-2 rounded-lg overflow-hidden hover:border-primary'>
                                        <div>
                                            <img src={product_thumbnail_1} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='border-2 rounded-lg overflow-hidden hover:border-primary'>
                                        <div>
                                            <img src={product_thumbnail_1} />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className='w-[5%] py-2 px-1'>
                                <div className='btn-navigate btn-down h-full'>
                                    <button className='btn text-xl' onClick={() => swiper.slideNext()}><IoChevronForwardOutline /></button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* product quick info wrapper */}
                <div className='product-info-wrapper w-[60%] border-2 p-4'>
                    <div className='ratings-wrapper flex items-baseline gap-2'>
                        <div className='ratings flex gap-0.5 items-center'>
                            <StarRating />
                        </div>
                        <span>0 Reviews</span>
                    </div>

                    <div className='product-name text-2xl text-black py-2'>Cropped Satin Bomber Jacket</div>
                    <div className='product-description pb-2'>
                        Established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less.
                    </div>

                    <div className='product-data flex border-t-[1px] py-2'>
                        <div className='w-[75%] flex flex-col'>
                            <div className='product-info-wrapper'>
                                <div className='mb-2'><span className='text-black font-medium'>Brand:</span> Pro Tech GearPro Tech Gear</div>
                                <div className='mb-2'><span className='text-black font-medium'>Condition:</span> Refurbished</div>
                                <div className='mb-2'><span className='text-black font-medium'>Reference:</span> Product5</div>
                                <div className='mb-2'><span className='text-black font-medium'>Available In Stock: <span className='text-green-500'>142 Items</span></span></div>
                                <div className='mb-6'>
                                    <span className='text-black font-medium'>Hurry up! only <span className='text-red-500'>142</span> items left in stock!</span>
                                    <div className="progress-wrapper w-[75%] pt-2">
                                        <ProgressBar value={35} maxValue={100} height={7} />
                                    </div>
                                </div>
                                <div className='mb-2 text-black font-medium'>
                                    <span className=''>Size: Small</span>
                                    <div className='mt-2'>
                                        <ul className='flex gap-2'>
                                            <li><button className='border-[1px] w-[60px] h-[30px] hover:bg-primary hover:text-white'>Small</button></li>
                                            <li><button className='border-[1px] w-[60px] h-[30px] hover:bg-primary hover:text-white'>Large</button></li>
                                            <li><button className='border-[1px] w-[60px] h-[30px] hover:bg-primary hover:text-white'>XL</button></li>
                                            <li><button className='border-[1px] w-[60px] h-[30px] hover:bg-primary hover:text-white'>XXL</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <span className='text-black font-medium'>Color: Black</span>
                                    <div>
                                        <ul className='flex'>
                                            <li className='text-4xl'><ColorCheckbox checked={true} onChange={(value) => {}} val={'#AAB2BD'} /></li>
                                            <li className='text-4xl'><ColorCheckbox checked={false} onChange={(value) => {}} val={'#A0D468'} /></li>
                                            <li className='text-4xl'><ColorCheckbox checked={true} onChange={(value) => {}} val={'#F1C40F'} /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="product-prices my-4">
                                <div className="product-price h5 ">
                                    <div className="current-price">
                                        <span className="current-price-value text-2xl font-semibold text-primary" content="94">
                                            $94.00
                                        </span>
                                    </div>
                                </div>
                                <div className="tax-shipping-delivery-label">
                                    <span className="delivery-information text-sm font-light">Free Shipping (Est. Delivery Time 2-3 Days)</span>
                                </div>
                            </div>

                            <div className='product-add-to-cart mb-4'>
                                <div className='flex h-[45px] gap-2'>
                                    <div className='product_quantity w-[100px]'>
                                        <Counter start={1} limit={10} step={1} />
                                    </div>
                                    <div className='product_add w-[250px]'>
                                        <button className='btn'>Add to Cart</button>
                                    </div>
                                </div>
                                <div className='product_wish_compare flex gap-3 py-3'>
                                    <span className='product_wish text-base flex items-center gap-1'>
                                        <IoMdHeartEmpty className='text-xl' />
                                        Add To Wishlist
                                    </span>
                                    <span className='product_compare text-base flex items-center gap-1'>
                                        <HiOutlineSquare2Stack className='text-xl' />
                                        Add To Compare
                                    </span>
                                </div>
                                <div className="product-availability flex">
                                    <div className="product-available border-[1px] px-2 bg-green-200">
                                        In Stock
                                    </div>
                                    <div className="product-unavailable border-[1px] px-2 bg-red-200">
                                        Out of Stock
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='w-[25%] flex justify-end'>
                            <div>
                                <img src={minim_brand_1} className='border-[1px] rounded-md p-2' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default ProductDetailsModal;