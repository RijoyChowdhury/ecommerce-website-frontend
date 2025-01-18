import React from 'react';
import Header from '../../components/Header';
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
import category_img_1 from '../../assets/images/category-image-list-1.jpg'
import category_img_2 from '../../assets/images/category-image-list-2.jpg'
import category_img_3 from '../../assets/images/category-image-list-3.jpg'
import category_img_4 from '../../assets/images/category-image-list-4.jpg'
import category_img_5 from '../../assets/images/category-image-list-5.jpg'
import category_img_6 from '../../assets/images/category-image-list-6.jpg'
import category_img_7 from '../../assets/images/category-image-list-7.jpg'
import category_img_8 from '../../assets/images/category-image-list-8.jpg'
import cms_banner_1 from '../../assets/images/cms-banner-1.jpg'
import cms_banner_2 from '../../assets/images/cms-banner-2.jpg'
import cms_banner_3 from '../../assets/images/cms-banner-3.jpg'
import DeliveryIcon from '../../assets/images/delivery.svg'
import './style.css';


const Home = () => {
    return (
        <>
            <Header />
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

                </div>
            </div>

        </>
    )
};

export default Home;