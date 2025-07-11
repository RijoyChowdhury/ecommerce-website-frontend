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
            category: '685d143b4ffac65fb991204e',
        },
        {
            img: category_img_2,
            value: 'T-shirts',
            category: '685e39b6de768fcbce547858',
        },
        {
            img: category_img_3,
            value: 'Leather Watches',
            category: '685e39b6de768fcbce547858',
        },
        {
            img: category_img_4,
            value: 'Diamond Rings',
            category: '685e39b6de768fcbce547858',
        },
        {
            img: category_img_5,
            value: 'Wooden Chairs',
            category: '685e39ddde768fcbce54785b',
        },
        {
            img: category_img_6,
            value: 'Shoes',
            category: '685e39b6de768fcbce547858',
        },
        {
            img: category_img_7,
            value: 'Bags & Purse',
            category: '685e39b6de768fcbce547858',
        },
        {
            img: category_img_8,
            value: 'Game Consoles',
            category: '685d143b4ffac65fb991204e',
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
                <Link to={{
                    pathname: "/products",
                    search: `?category=${item.category}`,
                }}>
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