import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import './style.css';
import ProductSlider from '../../components/ProductSlider';
import product_big_1 from '../../assets/images/product_big_1.jpg';
import product_thumbnail_1 from '../../assets/images/product_thumbnail_1.jpg';
import minim_brand_1 from '../../assets/images/minim_brand_1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { FaRegThumbsUp, FaStar } from 'react-icons/fa';
import ProgressBar from '../../components/ProgressBar';
import ColorCheckbox from '../../components/ColorCheckbox';
import Counter from '../../components/Counter';
import { HiOutlineSquare2Stack } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { PiHandArrowDownLight } from 'react-icons/pi';

const ProductDetails = () => {
    const breadcrumbList = ['Home', 'Fashion', 'Cropped Satin Bomber Jacket'];
    const [swiper, setSwiper] = useState(null);
    const [sectionId, setSectionId] = useState(0);

    return (
        <>
            <div className='container py-8'>
                <Breadcrumb breadcrumbList={breadcrumbList} />
            </div>

            <div className='block py-10'>
                <div className='container'>
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
                                <div className='ratings flex gap-0.5'>
                                    <div className="star text-xs text-yellow"><FaStar /></div>
                                    <div className="star text-xs text-yellow"><FaStar /></div>
                                    <div className="star text-xs text-yellow"><FaStar /></div>
                                    <div className="star text-xs text-custom-gray"><FaStar /></div>
                                    <div className="star text-xs text-custom-gray"><FaStar /></div>
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
                                                    <li className='text-4xl'><ColorCheckbox val={'#AAB2BD'} /></li>
                                                    <li className='text-4xl'><ColorCheckbox val={'#A0D468'} /></li>
                                                    <li className='text-4xl'><ColorCheckbox val={'#F1C40F'} /></li>
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

                            <div className="block_reassurance_product mt-2 flex flex-col gap-2">
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

                    {/* product description and details wrapper */}
                    <div className='product-description-wrapper py-10'>
                        <div className=''>

                            <div className='topic-selection flex gap-4 my-4'>
                                <span className='text-2xl text-black hover:text-primary cursor-pointer' onClick={() => setSectionId(0)}>Description</span>
                                <span className='text-2xl text-black hover:text-primary cursor-pointer' onClick={() => setSectionId(1)}>Product Details</span>
                            </div>

                            {/* description section */}
                            {sectionId === 0 && <div className='description-wrapper border-2 rounded-lg'>
                                <div className='m-8'>
                                    The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office.
                                    Painted wooden frame with passe-partout for more depth.

                                    <span className='block mt-4 font-semibold text-black text-base'>Lightweight Design</span>
                                    Designed with a super light geometric case, the Versa family watches are slim, casual and comfortable enough to wear all day and night.
                                    Switch up your look with classic, leather, metal and woven accessory bands. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

                                    <span className='block mt-4 font-semibold text-black text-base'>Free Shipping & Return</span>
                                    We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US.

                                    <span className='block mt-4 font-semibold text-black text-base'>Money Back Guarantee</span>
                                    We guarantee our products and you could get back all of your money anytime you want in 30 days.

                                    <span className='block mt-4 font-semibold text-black text-base'>Online Support</span>
                                    You will get 24 hour support with this purchase product and you can return it within 30 days for an exchange.
                                </div>
                            </div>}

                            {/* details section */}
                            {sectionId === 1 && <div className='details-wrapper border-2 rounded-lg'>
                                <div className='m-8'>
                                    <div className='brand-img-wrapper border-2 rounded-md inline-block p-2'>
                                        <img src={minim_brand_1} />
                                    </div>

                                    <div className=''>
                                        <div className='flex gap-5'><span className='text-black font-semibold'>Reference:</span> Product5</div>
                                        <div className='flex gap-5'><span className='text-black font-semibold'>Condition:</span> Refurbished</div>
                                        <div className='flex gap-5'><span className='text-black font-semibold'>In stock:</span><span className='text-green-500'>142 Items</span></div>
                                        <div>
                                            <span className='text-black font-semibold'>Data sheet</span>
                                            <dl className="data-sheet flex flex-col gap-2 text-black mt-2">
                                                <div className='flex gap-2'>
                                                    <dt className="name w-[50%] border-[1px] py-2 pl-4 bg-custom-light-gray">Composition</dt>
                                                    <dd className="value w-[50%] border-[1px] py-2 pl-4 bg-custom-light-gray">Ceramic</dd>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <dt className="name w-[50%] border-[1px] py-2 pl-4">Property</dt>
                                                    <dd className="value w-[50%] border-[1px] py-2 pl-4">Long sleeves</dd>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <dt className="name w-[50%] border-[1px] py-2 pl-4 bg-custom-light-gray">Style</dt>
                                                    <dd className="value w-[50%] border-[1px] py-2 pl-4 bg-custom-light-gray">Classic</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                        </div>
                    </div>

                    {/* product slider section */}
                    <div className='pb-8'><ProductSlider /></div>

                    {/* product slider section */}
                    <div className='pb-8'><ProductSlider /></div>

                    {/* reviews section */}
                    <div className='review-section-wrapper'>
                        <div className=''>
                            <div className='review-section-header text-2xl text-black'>Reviews</div>
                            <div className='review-section-content'>
                                <div className='review-wrapper flex'>
                                    <div className='review-owner w-[20%] p-4'>
                                        <div className='rating-section flex mb-2'>
                                            <span className='w-[50%]'>Rating</span>
                                            <div className='ratings w-[50%] flex gap-0.5 items-center'>
                                                <div className="star text-xs text-yellow"><FaStar /></div>
                                                <div className="star text-xs text-yellow"><FaStar /></div>
                                                <div className="star text-xs text-yellow"><FaStar /></div>
                                                <div className="star text-xs text-custom-gray"><FaStar /></div>
                                                <div className="star text-xs text-custom-gray"><FaStar /></div>
                                            </div>
                                        </div>
                                        <div className='user-section flex flex-col bg-custom-light-gray'>
                                            <span className='flex justify-center text-black'>Marco</span>
                                            <em className='flex justify-center'>03/05/2024</em>
                                        </div>
                                    </div>
                                    <div className='review-content w-[80%] border-l-2 p-4'>
                                        <div>
                                            <span className='block'>Perfect product!</span>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <FaRegThumbsUp />
                                            <span>2 people found this review useful.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductDetails;