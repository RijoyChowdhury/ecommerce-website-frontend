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
import SliderBanner from '../../components/SliderBanner';
import './style.css';
import { Link } from 'react-router-dom';


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
                                                onSwiper={(swiper) => { }}
                                                onSlideChange={() => { }}
                                                className='mySwiper'
                                            >
                                                <SwiperSlide className='relative overflow-hidden rounded-md group'>
                                                    <img src={main_banner_1} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                                    <div className='main-banner-text relative'>
                                                        <div className="headings text-black">
                                                            <div className="heading-text">Big Saving Days Sale</div>
                                                            <div className="sub-heading">Buy Modern Chair In <span>Black Color</span></div>
                                                            <div className="offer-text">Starting At Only<span>$99.00</span></div>
                                                            <div className="button-shopnow w-[25%] mt-5">
                                                                <button className='btn transition'>
                                                                    <Link className='text-sm' to={{
                                                                        pathname: "/products",
                                                                        search: "?category=furniture",
                                                                    }}>Shop Now</Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='relative overflow-hidden rounded-md group'>
                                                    <img src={main_banner_2} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                                    <div className='main-banner-text relative'>
                                                        <div className="headings text-black">
                                                            <div className="heading-text">Big Saving Days Sale</div>
                                                            <div className="sub-heading">Women Solid Round <span>Green T-Shirt</span></div>
                                                            <div className="offer-text">Starting At Only<span>$59.00</span></div>
                                                            <div className="button-shopnow w-[25%] mt-5">
                                                                <button className='btn transition'>
                                                                    <Link className='text-sm' to={{
                                                                        pathname: "/products",
                                                                        search: "?category=fashion",
                                                                    }}>Shop Now</Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        {/* Banner Seg 2 */}
                                        <div className='sub-banner-section flex flex-col gap-7'>
                                            <div className='sub-banner-section-item relative overflow-hidden rounded-md group'>
                                                <img src={sub_banner_1} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                                <div className="sub-banner-text flex items-center ml-8">
                                                    <div>
                                                        <div className="main-title text-2xl text-black font-medium">Samsung Gear <span>VR Camera</span></div>
                                                        <div className="offer-title text-xl font-bold text-primary my-3">$129.00</div>
                                                        <div className="shopnow">
                                                            <Link className="btn btn-primary" to={{
                                                                pathname: "/products",
                                                                search: "?category=electronics",
                                                            }}>Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='sub-banner-section-item relative overflow-hidden rounded-md group'>
                                                <img src={sub_banner_2} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                                <div className="sub-banner-text flex items-center">
                                                    <div>
                                                        <div className="main-title text-2xl text-black font-medium">Marcel Dining <span>Room Chair</span></div>
                                                        <div className="offer-title text-xl font-bold text-primary my-3">$129.00</div>
                                                        <div className="shopnow">
                                                            <Link className="btn btn-primary" to={{
                                                                pathname: "/products",
                                                                search: "?category=furniture",
                                                            }}>Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Slider Banner 2 */}
                                    <div className='lower-banner mt-7'>
                                        <SliderBanner />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* offer-section-1 */}
                    <div className='block offer-section-1 py-7'>
                        <div className='container'>
                            <div className='offer-details'>
                                <div className="offercms-text flex justify-between">
                                    <div className="offercms-item offer-title w-[25%] flex items-center justify-center">
                                        <div className=''><img src={DeliveryIcon} width={'50px'} /></div>
                                        <div className='text-[28px] text-black'>Free Shipping</div>
                                    </div>
                                    <div className="offercms-item offer-desc flex justify-center w-[50%] border-x-2 border-stone-200">
                                        <div className='text-base'>Free Delivery Now On Your First Order and over $200</div>
                                    </div>
                                    <div className="offercms-item offer-price w-[25%] flex justify-center">
                                        <div className='text-[28px] text-black'>- Only $200*</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* banner-section-2 */}
                    <div className='block banner-section-2 pb-7'>
                        <div className='container'>
                            <div className='banner-content flex justify-between'>
                                <div className='banner-content-section'>
                                    <div className="cmsbanner cmsbanner3 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=electronics",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_1} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                            <div className="banner-text flex items-center">
                                                <div>
                                                    <div className="main-title text-2xl text-black font-medium">S22 Samsung <span>Smartphone</span></div>
                                                    <div className="offer-title text-xl font-bold text-primary my-3">$250.00</div>
                                                    <div className="view_more"><Link className="btn btn-primary" to={{
                                                        pathname: "/products",
                                                        search: "?category=electronics",
                                                    }}>Shop Now</Link></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='banner-content-section'>
                                    <div className="cmsbanner cmsbanner3 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=furniture",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_2} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                            <div className="banner-text flex items-center">
                                                <div>
                                                    <div className="main-title text-2xl text-black font-medium">Armchair Made <span>By shopstic</span></div>
                                                    <div className="offer-title text-xl font-bold text-primary my-3">$190.00</div>
                                                    <div className="view_more"><Link className="btn btn-primary" to={{
                                                        pathname: "/products",
                                                        search: "?category=furniture",
                                                    }}>Shop Now</Link></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='banner-content-section'>
                                    <div className="cmsbanner cmsbanner3 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=electronics",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_3} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                            <div className="banner-text flex items-center">
                                                <div>
                                                    <div className="main-title text-2xl text-black font-medium">Noise Wireless <span>Headphones</span></div>
                                                    <div className="offer-title text-xl font-bold text-primary my-3">$129.00</div>
                                                    <div className="view_more"><Link className="btn btn-primary" to={{
                                                        pathname: "/products",
                                                        search: "?category=electronics",
                                                    }}>Shop Now</Link></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* banner-section-3 */}
                    <div className='block banner-section-3'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    {/* banner-section-4 */}
                    <div className='block banner-section-4 banner-custom-ad-block py-14'>
                        <div className='container relative'>
                            <Link to={{
                                pathname: "/products",
                                search: "?category=electronics",
                            }} className="banner-anchor">
                                <img src={offer_banner_1} />
                                <div className='absolute top-0 flex justify-center w-[100%] h-[100%]'>
                                    <div className='flex gap-5 text-white'>
                                        <div className='text-5xl font-bold flex items-center'>WATCH</div>
                                        <div className='flex flex-col justify-center font-thin'>
                                            <div className='text-lg'>M6 Smart Band 2.3 – Fitness Band</div>
                                            <div className='text-lg'>Men’s and Women’s Health Tracking, Red Strap</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* banner-section-5 */}
                    <div className='block banner-section-5 pb-7'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    {/* banner-section-6 */}
                    <div className='block banner-section-6 pb-7'>
                        <div className='container'>
                            <div className="banner-content flex justify-between gap-7">
                                <div className="banner-content-section">
                                    <div className="cmsbanner cmsbanner1 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=furniture",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_4} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                        </Link>
                                        <div className="banner-text flex items-center">
                                            <div>
                                                <div className="offer-title text-lg">Save Up To 20% Off</div>
                                                <div className="main-title text-3xl text-black font-base my-3">Santa Lucia Three <span>Seater Sofa</span></div>
                                                <button className="view_more btn !w-[125px] !h-[40px]"><Link to={{
                                                    pathname: "/products",
                                                    search: "?category=furniture",
                                                }}>Shop Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-content-section">
                                    <div className="cmsbanner cmsbanner2 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=fashion",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_5} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                        </Link>
                                        <div className="banner-text flex items-center">
                                            <div>
                                                <div className="offer-title text-lg">Best Online Discount</div>
                                                <div className="main-title text-3xl text-black font-base my-3">Woman In Red Crew <span>Neck T-shirt</span></div>
                                                <button className="view_more btn !w-[125px] !h-[40px]"><Link to={{
                                                    pathname: "/products",
                                                    search: "?category=fashion",
                                                }}>Shop Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* banner-section-7 */}
                    <div className='block banner-section-7 pb-7'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    {/* banner-section-8 */}
                    <div className='block banner-section-8 pb-7'>
                        <div className='container'>
                            <ProductSlider />
                        </div>
                    </div>

                    {/* banner-section-9 */}
                    <div className='block banner-section-9 pb-7'>
                        <div className='container'>
                            <div className="banner-content flex justify-between gap-7">
                                <div className="banner-content-section">
                                    <div className="cmsbanner cmsbanner1 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=electronics",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_6} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                        </Link>
                                        <div className="banner-text flex items-center">
                                            <div>
                                                <div className="offer-title text-lg">20 Days Return Policy</div>
                                                <div className="main-title text-3xl text-black font-base my-3">Mobile Shope-Smart <span>Watch T-55</span></div>
                                                <button className="view_more btn !w-[125px] !h-[40px]"><Link to={{
                                                    pathname: "/products",
                                                    search: "?category=electronics",
                                                }}>Shop Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-content-section">
                                    <div className="cmsbanner cmsbanner2 overflow-hidden rounded-md group">
                                        <Link to={{
                                            pathname: "/products",
                                            search: "?category=electronics",
                                        }} className="banner-anchor">
                                            <img src={cms_banner_7} className='transition-all ease-in-out duration-1000 group-hover:scale-110' />
                                        </Link>
                                        <div className="banner-text flex items-center">
                                            <div>
                                                <div className="offer-title text-lg">Save Up To 30% Off</div>
                                                <div className="main-title text-3xl text-black font-base my-3">Decoration Design <span>Lamp Light</span></div>
                                                <button className="view_more btn !w-[125px] !h-[40px]"><Link to={{
                                                    pathname: "/products",
                                                    search: "?category=electronics",
                                                }}>Shop Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* service-section */}
                    <div className='block service-section py-16'>
                        <div className='container'>
                            <div className='footer flex'>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[50px]'>
                                        <div><img src={service_delivery} /></div>
                                    </div>
                                    <div className="service-content text-center">
                                        <div className="service-heading">Free Shipping</div>
                                        <div className="service-description">For all Orders Over $100</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <div><img src={service_return} /></div>
                                    </div>
                                    <div className="service-content text-center">
                                        <div className="service-heading">30 Days Returns</div>
                                        <div className="service-description">For an Exchange Product</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <img src={service_payment} />
                                    </div>
                                    <div className="service-content text-center">
                                        <div className="service-heading">Secured Payment</div>
                                        <div className="service-description">Payment Cards Accepted</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <img src={service_gift} />
                                    </div>
                                    <div className="service-content text-center">
                                        <div className="service-heading">Special Gifts</div>
                                        <div className="service-description">Our First Product Order</div>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-center'>
                                    <div className='service-icon w-[40px] pb-2'>
                                        <img src={service_support} />
                                    </div>
                                    <div className="service-content text-center">
                                        <div className="service-heading">Support 24/7</div>
                                        <div className="service-description">Contact us Anytime</div>
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