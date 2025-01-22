import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import product_img_1 from '../../assets/images/products-slider-images/blue-laptop-bag.jpg'
import product_img_2 from '../../assets/images/products-slider-images/gold-watch-white-strap.jpg'
import product_img_3 from '../../assets/images/products-slider-images/hummingbird-cushion.jpg'
import product_img_4 from '../../assets/images/products-slider-images/modern-style-jug.jpg'
import product_img_5 from '../../assets/images/products-slider-images/nike-black-shoes.jpg'
import product_img_6 from '../../assets/images/products-slider-images/nike-black-shoes.jpg'
import product_img_7 from '../../assets/images/products-slider-images/white-cotton-jacket.jpg'
import product_img_8 from '../../assets/images/products-slider-images/wireless-mouse.jpg'
import { FaStar, FaStarHalf } from 'react-icons/fa';

const ProductSlider = () => {
    const [swiper, setSwiper] = React.useState(null);

    return (
        <div className='product-slider-component-wrapper'>
            <div className='flex justify-between items-center mb-2' style={{border1: '1px solid red'}}>
                <div className='text-[22px] text-black font-medium'>Latest Products</div>
                <div className='btn-segment flex items-center justify-between gap-2'>
                    <button className='slider-btn slider-button-prev' onClick={() => swiper.slidePrev()}><span><GoChevronLeft /></span></button>
                    <button className='slider-btn slider-button-next' onClick={() => swiper.slideNext()}><span><GoChevronRight /></span></button>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                slidesPerView={6}
                spaceBetween={0}
                loop={true}
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='product-slider-component border-stone-200 border-r-2'
            >
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix flex">
                                        {/* <div className="star text-xs"><FaStar /></div>
                                        <div className="star text-xs"><FaStar /></div>
                                        <div className="star text-xs"><FaStar /></div>
                                        <div className="star text-xs text-custom-gray"><FaStar /></div>
                                        <div className="star text-xs text-custom-gray"><FaStar /></div> */}
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='product-slide'>
                    <div className='slider-item border-stone-200 border-y-2 border-l-2'>
                        <div className='product-miniature'>
                            <div className='thumbnail-container'>
                                <img src={product_img_1} />
                            </div>
                            <div className="product-description">
                                <div className="brand-title" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="h3 product-title"><a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black" content="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/clothes/5-270-today-is-a-good-day-framed-poster.html#/1-size-small/11-color-black">Cropped Satin Bomber Jacket</a></h3>
                                <div className="comments_note">
                                    <div className="star_content clearfix">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <span className="total-rating">0 Review(s)&nbsp;</span>
                                </div>
                                <div className="product-price-and-shipping">
                                    <span className="price" aria-label="Price">
                                        $94.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default ProductSlider;