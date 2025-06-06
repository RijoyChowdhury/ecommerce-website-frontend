import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import category_img_1 from '../../assets/images/categories/category-image-list-1.jpg'
import category_img_2 from '../../assets/images/categories/category-image-list-2.jpg'
import category_img_3 from '../../assets/images/categories/category-image-list-3.jpg'
import category_img_4 from '../../assets/images/categories/category-image-list-4.jpg'
import category_img_5 from '../../assets/images/categories/category-image-list-5.jpg'
import category_img_6 from '../../assets/images/categories/category-image-list-6.jpg'
import category_img_7 from '../../assets/images/categories/category-image-list-7.jpg'
import category_img_8 from '../../assets/images/categories/category-image-list-8.jpg'

const index = () => {
    const bannerItems = [
        {
            img: category_img_1,
            value: 'Smart Tablets',
        },
        {
            img: category_img_2,
            value: 'T-shirts',
        },
        {
            img: category_img_3,
            value: 'Leather Watches',
        },
        {
            img: category_img_4,
            value: 'Diamond Rings',
        },
        {
            img: category_img_5,
            value: 'Wooden Chairs',
        },
        {
            img: category_img_6,
            value: 'Shoes',
        },
        {
            img: category_img_7,
            value: 'Bags & Purse',
        },
        {
            img: category_img_8,
            value: 'Game Consoles',
        },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            slidesPerView={7}
            spaceBetween={30}
            loop={true}
            onSwiper={(swiper) => { }}
            onSlideChange={() => { }}
            className='mySwiper'
        >
            {bannerItems.map((item) => <SwiperSlide className='lower-banner-slide'>
                <Link to='/products'>
                    <div className='flex justify-center'>
                        <img src={item.img} />
                        <span className='absolute bottom-3'>{item.value}</span>
                    </div>
                </Link>
            </SwiperSlide>)}
        </Swiper>
    )
}

export default index