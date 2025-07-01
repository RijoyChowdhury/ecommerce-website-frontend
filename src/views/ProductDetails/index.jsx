import React, { useEffect, useState } from 'react';
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
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import ProgressBar from '../../components/ProgressBar';
import ColorCheckbox from '../../components/ColorCheckbox';
import Counter from '../../components/Counter';
import { HiOutlineSquare2Stack } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import StarRating from '../../components/StarRating';
import DeliveryPolicies from '../../components/Policies';
import { Link, useParams } from 'react-router-dom';
import { actions } from '../../redux/slices/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../../components/LoadingSpinner/index.jsx';

const ProductDetails = () => {
    const breadcrumbList = ['Home', 'Fashion', 'Cropped Satin Bomber Jacket'];
    const [swiper, setSwiper] = useState(null);
    const [review, setReview] = useState('');
    const [productCount, setProductCount] = useState(1);
    const [productDetails, setProductDetails] = useState(null);
    const [reviewList, setReviewList] = useState([]);
    const [reviewListCount, setReviewListCount] = useState(5);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sectionId, setSectionId] = useState(0);
    const dispatch = useDispatch();
    const id = '685ea8837503570f85234e52';
    // const { id } = useParams();
    const { getProductDetails, submitProductReview } = actions;
    const { user } = useSelector(state => state.userSlice);

    const fetchProductDetails = async (id) => {
        setLoading(true);
        const response = await dispatch(getProductDetails(id)).unwrap();
        if (response.success) {
            const sortedArray = response.data.review.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()); // Ascending
            response.data.review = sortedArray;
            setProductDetails(response.data);
            setReviewList(response.data.review);
        }
        if (response.error) {
            setError(response.error);
        }
        setLoading(false);
    };

    const submitReview = async () => {
        const reviewPayload = {
            productId: id,
            userId: user._id,
            comment: review,
        };
        console.log(productDetails.review);
        const response = await dispatch(submitProductReview(reviewPayload)).unwrap();
        if (response.success) {
            // add review to the revies list on top
            setReview('');
            setReviewList(state => {
                return [
                    {
                        comment: review,
                        like: 0,
                        dislike: 0,
                        user: { _id: user._id, name: user.name },
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    ...state,
                ]
            });
        }
        if (response.error) {
            // notify failure
        }
    };

    const addItemToCart = () => {
        console.log('Product Id:', productDetails._id);
        console.log('Count:', productCount);
        console.log('User Id:', user._id,);
    };

    useEffect(() => {
        fetchProductDetails(id);
        console.log('user');
        console.log(user);
    }, []);

    if (loading) {
        return (<div className='h-[600px]'>
            <LoadingSpinner />;
        </div>);
    }

    if (error || !productDetails) {
        return (<div className='h-[600px]'>
            <span className='text-2xl text-primary'>Error</span>
        </div>)
    }

    return (
        <>
            <div className='container py-8'>
                <Breadcrumb breadcrumbList={breadcrumbList} />
            </div>

            <div className='block py-10'>
                <div className='container'>
                    {/* product details section */}
                    <div className='product-details-wrapper flex gap-5'>

                        <div className='product-img-sticky-wrapper w-[40%]'>
                            <div className='product-img-wrapper sticky top-20'>
                                <div className='img-display-wrapper'>
                                    <div className='border-2 mb-6'><img src={productDetails.images[0]} /></div>
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
                                            {productDetails.images.map(img => (
                                                <SwiperSlide className='border-2 rounded-lg overflow-hidden hover:border-primary'>
                                                    <div>
                                                        <img src={img} />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
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
                            <div className='ratings-wrapper flex items-center gap-2'>
                                <div className='ratings flex gap-0.5 items-center'>
                                    <StarRating />
                                    <div>({productDetails.rating})</div>
                                </div>
                                <span>{productDetails.review.length} Review(s)</span>
                            </div>

                            <div className='product-name text-2xl text-black py-2'>{productDetails.name}</div>
                            <div className='product-description pb-2'>
                                {productDetails.description}
                            </div>

                            <div className='product-data flex border-t-[1px] py-2'>
                                <div className='w-[75%] flex flex-col'>
                                    <div className='product-info-wrapper'>
                                        <div className='mb-2'><span className='text-black font-medium'>Brand:</span> {productDetails.brand}</div>
                                        <div className='mb-2'><span className='text-black font-medium'>Condition:</span> Refurbished</div>
                                        <div className='mb-2'><span className='text-black font-medium'>Reference:</span> Product5</div>
                                        <div className='mb-2'><span className='text-black font-medium'>Available In Stock: <span className='text-green-500'>{productDetails.stockCount} Items</span></span></div>
                                        <div className='mb-6'>
                                            <span className='text-black font-medium'>Hurry up! only <span className='text-red-500'>{productDetails.stockCount}</span> items left in stock!</span>
                                            <div className="progress-wrapper w-[75%] pt-2">
                                                <ProgressBar value={35} maxValue={100} height={7} />
                                            </div>
                                        </div>
                                        <div className='mb-2 text-black font-medium'>
                                            <span className=''>Size: Small</span>
                                            <div className='mt-2'>
                                                <ul className='flex gap-2'>
                                                    {productDetails.size.map(size => (
                                                        <li><button className='border-[1px] w-[60px] h-[30px] hover:bg-primary hover:text-white'>{size}</button></li>
                                                    ))}
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
                                                    ₹{productDetails.price}
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
                                                <Counter start={1} limit={10} onValueChange={value => setProductCount(value)} />
                                            </div>
                                            <div className='product_add w-[250px]'>
                                                <button className='btn' onClick={addItemToCart}>Add to Cart</button>
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
                                            {productDetails.stockCount > 0 && <div className="product-available border-[1px] px-2 bg-green-200">
                                                In Stock
                                            </div>}
                                            {productDetails.stockCount === 0 && <div className="product-unavailable border-[1px] px-2 bg-red-200">
                                                Out of Stock
                                            </div>}
                                        </div>
                                    </div>


                                </div>
                                <div className='w-[25%] flex justify-end'>
                                    <div>
                                        <img src={minim_brand_1} className='border-[1px] rounded-md p-2' />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-2'>
                                <DeliveryPolicies />
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
                    <div className='review-section-wrapper pb-8'>
                        <div className=''>
                            <div className='review-section-header text-2xl text-black'>Reviews</div>
                            <div className='review-section-content border-2 rounded-md'>

                                {/* render the individual reviews */}
                                {reviewList.slice(0, reviewListCount).map(item => <div className='review-wrapper flex'>
                                    <div className='review-owner w-[20%] p-4'>
                                        <div className='rating-section flex mb-2'>
                                            <span className='w-[50%]'>Rating</span>
                                            <div className='ratings w-[50%] flex gap-0.5 items-center text-xs'>
                                                <StarRating />
                                            </div>
                                        </div>
                                        <div className='user-section flex flex-col bg-custom-light-gray'>
                                            <span className='flex justify-center text-black'>{item.user.name}</span>
                                            <em className='flex justify-center'>{new Date(item.updatedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit'
                                            })}</em>
                                        </div>
                                    </div>
                                    <div className='review-content w-[80%] border-l-2 p-4'>
                                        <div className='border-2 h-[100px]'>
                                            <p className='px-1 text-wrap scroll-auto overflow-hidden'>
                                                {item.comment}
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-end gap-2'>
                                            <FaRegThumbsUp className='cursor-pointer' />
                                            <span>11</span>
                                            <FaRegThumbsDown className='cursor-pointer' />
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>)}

                            </div>
                            <div className='mt-4 text-lg flex justify-end'>
                                <button className='btn-primary' onClick={() => setReviewListCount(state => state + 5)}>Load More</button>
                            </div>
                        </div>
                    </div>

                    {/* add review section */}
                    <div className='add-review-section-wrapper flex flex-col gap-3'>
                        <div className='add-review-header text-2xl text-black'>Add Review</div>
                        <div className='add-review-section flex justify-between gap-2 h-[150px]'>
                            {/* add review textbox - user should be logged in */}
                            {user ? <div className='review-textbox border-2 w-[80%]'>
                                <textarea
                                    className='w-[100%] h-[100%]'
                                    placeholder='Write a review...'
                                    style={{ resize: 'none', padding: '2px 7px' }}
                                    value={review}
                                    onChange={e => setReview(e.target.value.length <= 350 ? e.target.value : review)}
                                ></textarea>
                            </div>
                                : <div className='review-textbox border-2 w-[80%] flex justify-center items-center'>
                                    <div className='italic'><Link to={'/login'} className='link underline'>Login</Link> to add review.</div>
                                </div>}

                            {/* add review btn */}
                            <div className='review-btn-grp flex flex-col w-[20%] gap-2'>
                                <button className='btn' onClick={submitReview}>Submit</button>
                                <button className='btn !bg-white !text-primary' onClick={() => setReview('')}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductDetails;