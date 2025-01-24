import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import ProductMiniature from '../ProductMiniature';

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
                spaceBetween={2}
                loop={true}
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='product-slider-component border-2 rounded-lg bg-slate-200'
            >
                {new Array(8).fill(0).map((item, index) => <SwiperSlide key={index} className='product-slide'>
                    <ProductMiniature />
                </SwiperSlide>)}
                
            </Swiper>
        </div>
    )
};

export default ProductSlider;