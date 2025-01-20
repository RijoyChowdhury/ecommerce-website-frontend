import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import main_banner_1 from '../../assets/images/main-banner-1.jpg'
import main_banner_2 from '../../assets/images/main-banner-2.jpg'
import sub_banner_1 from '../../assets/images/sub-banner-1.jpg'
import sub_banner_2 from '../../assets/images/sub-banner-2.jpg'
import category_img_1 from '../../assets/images/categories/category-image-list-1.jpg'
import category_img_2 from '../../assets/images/categories/category-image-list-2.jpg'
import category_img_3 from '../../assets/images/categories/category-image-list-3.jpg'
import category_img_4 from '../../assets/images/categories/category-image-list-4.jpg'
import category_img_5 from '../../assets/images/categories/category-image-list-5.jpg'
import category_img_6 from '../../assets/images/categories/category-image-list-6.jpg'
import category_img_7 from '../../assets/images/categories/category-image-list-7.jpg'
import category_img_8 from '../../assets/images/categories/category-image-list-8.jpg'
import cms_banner_1 from '../../assets/images/cms-banner-1.jpg'
import cms_banner_2 from '../../assets/images/cms-banner-2.jpg'
import cms_banner_3 from '../../assets/images/cms-banner-3.jpg'
import cms_banner_4 from '../../assets/images/cms-banner-4.jpg'
import cms_banner_5 from '../../assets/images/cms-banner-5.jpg'
import cms_banner_6 from '../../assets/images/cms-banner-6.jpg'
import cms_banner_7 from '../../assets/images/cms-banner-7.jpg'
import offer_banner_1 from '../../assets/images/offer-banner-1.jpg'
import DeliveryIcon from '../../assets/images/delivery.svg'
import service_return from '../../assets/images/service-logo/return.svg'
import service_delivery from '../../assets/images/service-logo/delivery.svg'
import service_gift from '../../assets/images/service-logo/gift.svg'
import service_payment from '../../assets/images/service-logo/payment.svg'
import service_support from '../../assets/images/service-logo/support.svg'
import ProductSlider from '../../components/ProductSlider';
import './style.css';


const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='content'>
                    <div className='top-banner-segment my-7'>
                        <div className='main-banner'>
                            <div className='container'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between'>
                                        {/* Slider Banne 1 */}
                                        <div className='jumbo-banner w-[73%]'>
                                            <Swiper
                                                modules={[EffectFade, Navigation, Pagination]}
                                                spaceBetween={30}
                                                navigation={true}
                                                effect={'fade'}
                                                loop={true}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                onSwiper={(swiper) => console.log(swiper)}
                                                onSlideChange={() => console.log('slide change')}
                                                className='mySwiper'
                                            >
                                                <SwiperSlide className='relative'>
                                                    <img src={main_banner_1} />
                                                    <div className='main-banner-text relative'>
                                                        <div class="headings text-black">
                                                            <div class="heading-text">Big Saving Days Sale</div>
                                                            <div class="sub-heading">Buy Modern Chair In <span>Black Color</span></div>
                                                            <div class="offer-text">Starting At Only<span>$99.00</span></div>
                                                            <div class="button-shopnow w-[25%] mt-5">
                                                                {/* <a href="#" class="btn btn-primary">Shop Now</a> */}
                                                                <button className='btn transition'><span className='text-sm'>Shop Now</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={main_banner_2} />
                                                    <div className='main-banner-text relative'>
                                                        <div class="headings text-black">
                                                            <div class="heading-text">Big Saving Days Sale</div>
                                                            <div class="sub-heading">Women Solid Round <span>Green T-Shirt</span></div>
                                                            <div class="offer-text">Starting At Only<span>$59.00</span></div>
                                                            <div class="button-shopnow w-[25%] mt-5">
                                                                {/* <a href="#" class="btn btn-primary">Shop Now</a> */}
                                                                <button className='btn transition'><span className='text-sm'>Shop Now</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        {/* Banner Seg 2 */}
                                        <div className='sub-banner-section flex flex-col gap-7'>
                                            <div className='sub-banner-section-item relative'>
                                                <img src={sub_banner_1} />
                                                <div class="sub-banner-text flex items-center ml-8">
                                                    <div>
                                                        <div class="main-title text-2xl text-black font-medium">Samsung Gear <span>VR Camera</span></div>
                                                        <div class="offer-title text-xl font-bold text-primary my-3">$129.00</div>
                                                        <div class="shopnow"><a class="btn btn-primary" href="#">Shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='sub-banner-section-item relative'>
                                                <img src={sub_banner_2} />
                                                <div class="sub-banner-text flex items-center">
                                                    <div>
                                                        <div class="main-title text-2xl text-black font-medium">Marcel Dining <span>Room Chair</span></div>
                                                        <div class="offer-title text-xl font-bold text-primary my-3">$129.00</div>
                                                        <div class="shopnow"><a class="btn btn-primary" href="#">Shop Now</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Slider Banner 2 */}
                                    <div className='lower-banner mt-7'>
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            navigation={true}
                                            slidesPerView={7}
                                            spaceBetween={30}
                                            loop={true}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}
                                            className='mySwiper2'
                                        >
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_1} />
                                                <span className='absolute bottom-3'>Smart Tablets</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_2} />
                                                <span className='absolute bottom-3'>T-shirts</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_3} />
                                                <span className='absolute bottom-3'>Leather Watches</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_4} />
                                                <span className='absolute bottom-3'>Diamond Rings</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_5} />
                                                <span className='absolute bottom-3'>Wooden Chairs</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_6} />
                                                <span className='absolute bottom-3'>Shoes</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_7} />
                                                <span className='absolute bottom-3'>Bags & Purse</span>
                                            </SwiperSlide>
                                            <SwiperSlide className='lower-banner-slide'>
                                                <img src={category_img_8} />
                                                <span className='absolute bottom-3'>Game Consoles</span>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block offer-section-1 py-7'>
                        <div className='container'>
                            <div className='offer-details'>
                                <div class="offercms-text flex justify-between">
                                    <div class="offercms-item offer-title w-[25%] flex items-center justify-center">
                                        <div className=''><img src={DeliveryIcon} width={'50px'} /></div>
                                        <div className='text-[28px] text-black'>Free Shipping</div>
                                    </div>
                                    <div class="offercms-item offer-desc flex justify-center w-[50%] border-x-2 border-stone-200">
                                        <div className='text-base'>Free Delivery Now On Your First Order and over $200</div>
                                    </div>
                                    <div class="offercms-item offer-price w-[25%] flex justify-center">
                                        <div className='text-[28px] text-black'>- Only $200*</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block banner-section-2 pb-7'>
                        <div className='container'>
                            <div className='banner-content flex justify-between'>
                                <div className='banner-content-section'>
                                    <div class="cmsbanner cmsbanner3">
                                        <a href="#" class="banner-anchor">
                                            <img src={cms_banner_1} />
                                        </a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="main-title text-2xl text-black font-medium">S22 Samsung <span>Smartphone</span></div>
                                                <div class="offer-title text-xl font-bold text-primary my-3">$250.00</div>
                                                <div class="view_more"><a class="btn btn-primary" href="#">Shop Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='banner-content-section'>
                                    <div class="cmsbanner cmsbanner3">
                                        <a href="#" class="banner-anchor">
                                            <img src={cms_banner_2} />
                                        </a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="main-title text-2xl text-black font-medium">Armchair Made <span>By shopstic</span></div>
                                                <div class="offer-title text-xl font-bold text-primary my-3">$190.00</div>
                                                <div class="view_more"><a class="btn btn-primary" href="#">Shop Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='banner-content-section'>
                                    <div class="cmsbanner cmsbanner3">
                                        <a href="#" class="banner-anchor">
                                            <img src={cms_banner_3} />
                                        </a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="main-title text-2xl text-black font-medium">Noise Wireless <span>Headphones</span></div>
                                                <div class="offer-title text-xl font-bold text-primary my-3">$129.00</div>
                                                <div class="view_more"><a class="btn btn-primary" href="#">Shop Now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block banner-section-3'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    <div className='block banner-section-4 banner-custom-ad-block py-14'>
                        <div className='container'>
                            <img src={offer_banner_1} />
                        </div>
                    </div>

                    <div className='block banner-section-5 pb-7'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    <div className='block banner-section-6 pb-7'>
                        <div className='container'>
                            <div class="banner-content flex justify-between gap-7">
                                <div class="banner-content-section">
                                    <div class="cmsbanner cmsbanner1">
                                        <a href="#" class="banner-anchor"><img src={cms_banner_4} /></a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="offer-title text-lg">Save Up To 20% Off</div>
                                                <div class="main-title text-3xl text-black font-base my-3">Santa Lucia Three <span>Seater Sofa</span></div>
                                                <button class="view_more btn !w-[125px] !h-[40px]"><a href="#">Shop Now</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner-content-section">
                                    <div class="cmsbanner cmsbanner2">
                                        <a href="#" class="banner-anchor"><img src={cms_banner_5} /></a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="offer-title text-lg">Best Online Discount</div>
                                                <div class="main-title text-3xl text-black font-base my-3">Woman In Red Crew <span>Neck T-shirt</span></div>
                                                <button class="view_more btn !w-[125px] !h-[40px]"><a href="#">Shop Now</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block banner-section-7 pb-7'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    <div className='block banner-section-8 pb-7'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    <div className='block banner-section-9 pb-7'>
                        <div className='container'>
                            <div class="banner-content flex justify-between gap-7">
                                <div class="banner-content-section">
                                    <div class="cmsbanner cmsbanner1 overflow-hidden rounded-md group">
                                        <a href="#" class="banner-anchor"><img src={cms_banner_6} className='transition-all ease-in-out duration-1000 group-hover:scale-110' /></a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="offer-title text-lg">20 Days Return Policy</div>
                                                <div class="main-title text-3xl text-black font-base my-3">Mobile Shope-Smart <span>Watch T-55</span></div>
                                                <button class="view_more btn !w-[125px] !h-[40px]"><a href="#">Shop Now</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner-content-section">
                                    <div class="cmsbanner cmsbanner2">
                                        <a href="#" class="banner-anchor"><img src={cms_banner_7} /></a>
                                        <div class="banner-text flex items-center">
                                            <div>
                                                <div class="offer-title text-lg">Save Up To 30% Off</div>
                                                <div class="main-title text-3xl text-black font-base my-3">Decoration Design <span>Lamp Light</span></div>
                                                <button class="view_more btn !w-[125px] !h-[40px]"><a href="#">Shop Now</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block service-section py-16'>
                        <div className='container'>
                            <div className='footer flex'>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[50px]'>
                                        <div><img src={service_delivery} /></div>
                                    </div>
                                    <div class="service-content text-center">
                                        <div class="service-heading">Free Shipping</div>
                                        <div class="service-description">For all Orders Over $100</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <div><img src={service_return} /></div>
                                    </div>
                                    <div class="service-content text-center">
                                        <div class="service-heading">30 Days Returns</div>
                                        <div class="service-description">For an Exchange Product</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <img src={service_payment} />
                                    </div>
                                    <div class="service-content text-center">
                                        <div class="service-heading">Secured Payment</div>
                                        <div class="service-description">Payment Cards Accepted</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <img src={service_gift} />
                                    </div>
                                    <div class="service-content text-center">
                                        <div class="service-heading">Special Gifts</div>
                                        <div class="service-description">Our First Product Order</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <img src={service_support} />
                                    </div>
                                    <div class="service-content text-center">
                                        <div class="service-heading">Support 24/7</div>
                                        <div class="service-description">Contact us Anytime</div>
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

export default Home;