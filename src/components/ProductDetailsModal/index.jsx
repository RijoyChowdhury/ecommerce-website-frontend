import React, { useEffect, useState } from 'react';
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
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { PiHandArrowDownLight } from 'react-icons/pi';
import StarRating from '../../components/StarRating';
import product_big_1 from '../../assets/images/product_big_1.jpg';
import product_thumbnail_1 from '../../assets/images/product_thumbnail_1.jpg';
import minim_brand_1 from '../../assets/images/minim_brand_1.jpg';
import './style.css';
import img_not_found from '../../assets/images/no-img-available.png'
import { LiaHeart } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import { actions as wishlistActions } from '../../redux/slices/wishlistSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import convert from 'color-convert';

const notify = (message) => toast.success(message);

const ProductDetailsModal = ({ data }) => {
    const [swiper, setSwiper] = useState(null);
    const [productCount, setProductCount] = useState(1);
    const [addedToWishlist, setAddedToWishlist] = useState(false);
    const { user } = useSelector(state => state.userSlice);

    const dispatch = useDispatch();
    const { addItemToCart } = cartActions;
    const { addToWishlist, checkInWishlist } = wishlistActions;

    const handleAddItemToCart = () => {
        const payload = {
            product: data,
            quantity: productCount,
            size: 'S',
            color: 'Red',
            user: user._id,
        };
        dispatch(addItemToCart(payload));
        notify('Item added to cart');
    };

    const addItemToWishlist = async (productId) => {
        if (!user) {
            notify('Please login to add item to wishlist');
            return;
        }
        if (addedToWishlist) {
            notify('Item already added to Wishlist');
            return;
        }
        setAddedToWishlist(true);
        const response = await dispatch(addToWishlist(productId)).unwrap();
        if (response.success) {
            notify('Added to Wishlist');
        }
    }

    const checkProductAddedInWishlist = async (productId) => {
        const response = await dispatch(checkInWishlist(productId)).unwrap();
        if (response.success && response.data) {
            setAddedToWishlist(true);
        }
    }

    useEffect(() => {
        checkProductAddedInWishlist(data._id);
    }, [data]);

    return (
        <>
            {/* product details section */}
            <div className='product-details-wrapper flex gap-5'>

                <div className='product-img-sticky-wrapper w-[40%]'>
                    <div className='product-img-wrapper sticky top-20'>
                        <div className='img-display-wrapper relative'>
                            <div className='border-2 mb-6 w-[642px] h-[663px] overflow-hidden'>
                                <img src={data.images.length > 0 ? data.images[0] : img_not_found} className='w-[642px] h-[663px] object-fill' />
                            </div>

                            <div className='absolute cursor-pointer p-1 right-6 bottom-4 text-3xl text-red-500 flex justify-center bg-white border-2' onClick={() => addItemToWishlist(data._id)}>
                                {addedToWishlist && <IoMdHeart />}
                                {!addedToWishlist && <IoMdHeartEmpty />}
                            </div>
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
                                    {data.images.length > 0
                                        ? data.images.map((img => <SwiperSlide className='border-2 rounded-lg overflow-hidden hover:border-primary'>
                                            <div className='w-[101px] h-[101px]'>
                                                <img src={img} className='w-[101px] h-[101px]' />
                                            </div>
                                        </SwiperSlide>))
                                        : <SwiperSlide className='border-2 rounded-lg overflow-hidden'>
                                            <div className='w-[101px] h-[101px]'>
                                                <img src={img_not_found} className='w-[101px] h-[101px]' />
                                            </div>
                                        </SwiperSlide>}
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
                            <StarRating value={data.rating} />
                        </div>
                        <span>{data.review.length} Review(s)</span>
                    </div>

                    <div className='product-name text-2xl text-black py-2'>{data.name}</div>
                    <div className='product-description pb-2 line-clamp-2 h-[58px] overflow-hidden'>
                        {data.description}
                    </div>

                    <div className='product-data flex border-t-[1px] py-2'>
                        <div className='w-[75%] flex flex-col'>
                            <div className='product-info-wrapper'>
                                <div className='mb-2'><span className='text-black font-medium'>Brand:</span> MINIM</div>
                                <div className='mb-2'><span className='text-black font-medium'>Condition:</span> New</div>
                                <div className='mb-2'><span className='text-black font-medium'>Reference:</span> {data.name}</div>
                                <div className='mb-2'><span className='text-black font-medium'>Available In Stock: <span className='text-green-500'>{data.stockCount} Items</span></span></div>
                                <div className='mb-6'>
                                    <span className='text-black font-medium'>Hurry up! only <span className='text-red-500'>{data.stockCount}</span> items left in stock!</span>
                                    <div className="progress-wrapper w-[75%] pt-2">
                                        <ProgressBar value={35} maxValue={100} height={7} />
                                    </div>
                                </div>

                                {/* size variations */}
                                {data.size.length > 0
                                    ? <div className='mb-2 text-black font-medium'>
                                        <span className=''>Size: {data.size[0]}</span>
                                        <div className='mt-2'>
                                            <ul className='flex gap-2'>
                                                {data.size.map(sizeData => <li><button className='border-[1px] px-4 h-[30px] hover:bg-primary hover:text-white'>{sizeData}</button></li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    : <div className='mb-2 text-black font-medium'>
                                        <span className=''>Size: <span className='text-red-400'>NA</span></span>
                                        <div className='mt-2'>
                                            <ul className='flex gap-2'>
                                                <li><button className='border-[1px] px-4 h-[30px] hover:bg-primary hover:text-white'>No Size Variations Available</button></li>
                                            </ul>
                                        </div>
                                    </div>}

                                {/* color variations */}
                                {data.color.length > 0 && <div className='mb-2'>
                                    <span className='text-black font-medium'>Color: {data.color[0]}</span>
                                    <div>
                                        <ul className='flex gap-0'>
                                            {
                                                data.color.map((color, index) => 
                                                <li className='text-4xl' key={index}><ColorCheckbox checked={index === 0} onChange={(value) => { }} val={`#${convert.keyword.hex(color.toLowerCase())}`} /></li>
                                            )}
                                        </ul>
                                    </div>
                                </div>}
                            </div>


                            <div className="product-prices my-4">
                                <div className="product-price h5 flex gap-2 items-center">
                                    <div className="old-price">
                                        <span className="current-price-value text-xl text-gray-400 line-through">
                                            ${data.oldPrice}.00
                                        </span>
                                    </div>
                                    <div className="current-price">
                                        <span className="current-price-value text-2xl font-semibold text-primary">
                                            ${data.price}.00
                                        </span>
                                    </div>
                                    {data.discount > 0 && <div className="current-discount">
                                        <span className="current-price-value ml-2 text-lg font-semibold text-green-500">
                                            (-{data.discount}%)
                                        </span>
                                    </div>}
                                </div>
                                <div className="tax-shipping-delivery-label">
                                    <span className="delivery-information text-sm font-light">Free Shipping (Est. Delivery Time 2-3 Days)</span>
                                </div>
                            </div>

                            <div className='product-add-to-cart mb-4'>
                                <div className='flex h-[45px] gap-2'>
                                    <div className='product_quantity w-[100px]'>
                                        <Counter start={productCount} limit={10} onValueChange={value => setProductCount(value)} />
                                    </div>
                                    {user
                                        ? <div className='product_add w-[250px]'>
                                            <button className='btn' onClick={handleAddItemToCart}>Add to Cart</button>
                                        </div>
                                        : <div className='product_add w-[250px]'>
                                            <Link to={'/login'} state={{ lastLocation: window.location.pathname }}>
                                                <button className='btn '>Login to add to Cart</button>
                                            </Link>
                                        </div>}
                                </div>
                                {/* <div className='product_wish_compare flex gap-3 py-3'>
                                    <span className='product_wish text-base flex items-center gap-1'>
                                        <IoMdHeartEmpty className='text-xl' />
                                        Add To Wishlist
                                    </span>
                                    <span className='product_compare text-base flex items-center gap-1'>
                                        <HiOutlineSquare2Stack className='text-xl' />
                                        Add To Compare
                                    </span>
                                </div> */}
                                <div className="product-availability flex py-3">
                                    {data.stockCount > 0
                                        ? <div className="product-available border-[1px] px-2 bg-green-200">
                                            In Stock
                                        </div>
                                        : <div className="product-unavailable border-[1px] px-2 bg-red-200">
                                            Out of Stock
                                        </div>}
                                </div>
                                <div className="product-condition flex">
                                    {
                                        data.condition === 'New' &&
                                        <div className="product-new border-[1px] px-2 bg-green-200">
                                            New
                                        </div>
                                    }
                                    {
                                        data.condition === 'Refurbished' &&
                                        <div className="product-refurbished border-[1px] px-2 bg-blue-200">
                                            Refurbished
                                        </div>
                                    }
                                    {
                                        data.condition === 'Used' &&
                                        <div className="product-used border-[1px] px-2 bg-red-200">
                                            Used
                                        </div>
                                    }
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