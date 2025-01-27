import React from 'react';
import product_img_1 from '../../assets/images/products-slider-images/blue-laptop-bag.jpg'
import product_img_2 from '../../assets/images/products-slider-images/gold-watch-white-strap.jpg'
import product_img_3 from '../../assets/images/products-slider-images/hummingbird-cushion.jpg'
import product_img_4 from '../../assets/images/products-slider-images/modern-style-jug.jpg'
import product_img_5 from '../../assets/images/products-slider-images/nike-black-shoes.jpg'
import product_img_6 from '../../assets/images/products-slider-images/nike-black-shoes.jpg'
import product_img_7 from '../../assets/images/products-slider-images/white-cotton-jacket.jpg'
import product_img_8 from '../../assets/images/products-slider-images/wireless-mouse.jpg'
import ColorCheckbox from '../ColorCheckbox';
import { LiaExpandArrowsAltSolid, LiaHeart } from 'react-icons/lia';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StarRating from '../StarRating';
import ProductDetailsModal from '../ProductDetailsModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1700,
    // height: 850,
    bgcolor: 'background.paper',
    border: '2px solid #ddd',
    borderRadius: '5px',
    "& fieldset": {
        border: "1px solid var(--gray) !important",
    },
    p: 4,
    outline: 0
};

const ProductMiniature = (props) => {
    const { layout = 'compact' } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='slider-item bg-white p-4'>

                {layout === 'compact'

                    ? <div className='product-miniature'>
                        <div className='thumbnail-container relative'>
                            <div><img src={product_img_1} /></div>

                            <div className='product-colors absolute bottom-1'>
                                <ul className='text-xl flex'>
                                    <li><ColorCheckbox val={'#AAB2BD'} /></li>
                                    <li><ColorCheckbox val={'#5D9CEC'} /></li>
                                    <li><ColorCheckbox val={'#A0D468'} /></li>
                                </ul>
                            </div>

                            <div className='product-status absolute top-0'>
                                <ul className='flex flex-col gap-1 text-sm'>
                                    <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-green-200">
                                            New
                                        </div>
                                    </li>
                                    <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-red-200">
                                            Sold Out
                                        </div>
                                    </li>
                                    <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-green-200">
                                            -12%
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='product-utils absolute top-0 right-0'>
                                <ul className='text-xl flex flex-col gap-1'>
                                    <li className='border-2 rounded-full p-2 cursor-pointer' onClick={handleOpen}><LiaExpandArrowsAltSolid /></li>
                                    <li className='border-2 rounded-full p-2 cursor-pointer'><LiaHeart /></li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-description flex flex-col gap-2">
                            <div className="brand-title text-xs" itemprop="name">
                                <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                            </div>
                            <h3 className="h3 product-title text-black text-sm">Cropped Satin Bomber Jacket</h3>
                            <div className="comments_note flex justify-between">
                                <div className="star_content clearfix flex gap-0.5">
                                    <StarRating />
                                </div>
                                <span className="text-xs total-rating">0 Review(s)</span>
                            </div>
                            <div className="product-price-and-shipping">
                                <span className="price text-base text-primary font-bold" aria-label="Price">
                                    $94.00
                                </span>
                            </div>
                        </div>
                    </div>

                    : <div className='product-expanded flex'>
                        <div className='thumbnail-container relative w-[20%]'>
                            <div className=''><img src={product_img_1} /></div>

                            <div className='product-status absolute top-0'>
                                <ul className='flex flex-col gap-1 text-sm'>
                                    <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-green-200">
                                            New
                                        </div>
                                    </li>
                                    <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-green-200">
                                            -12%
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='product-utils absolute top-0 right-0'>
                                <ul className='text-xl flex flex-col gap-1'>
                                    <li className='border-2 rounded-full p-2 cursor-pointer' onClick={handleOpen}><LiaExpandArrowsAltSolid /></li>
                                    <li className='border-2 rounded-full p-2 cursor-pointer'><LiaHeart /></li>
                                </ul>
                            </div>
                        </div>

                        <div className='description-container w-[80%] px-4 ml-4'>
                            <div className="product-description flex flex-col gap-2">
                                <div className="brand-title text-xs" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="product-title text-black text-sm">Cropped Satin Bomber Jacket</h3>
                                <div className="comments_note flex gap-4">
                                    <div className="star_content clearfix flex gap-0.5">
                                        <StarRating />
                                    </div>
                                    <span className="text-xs total-rating">0 Review(s)</span>
                                </div>
                                <div className="product-price-and-shipping flex items-center gap-4">
                                    <span className="price text-base text-primary font-bold" aria-label="Price">
                                        $94.00
                                    </span>
                                    <div className="border-[1px] rounded-sm px-2 bg-green-200">
                                        In Stock
                                    </div>
                                    <div className="border-[1px] rounded-sm px-2 bg-red-200">
                                        Out of Stock
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm leading-tight'>
                                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                        by the charms of pleasure of the moment, so blinded by desire that they cannot.
                                    </p>
                                </div>
                                <div className='flex gap-4 mt-2 items-center'>
                                    <div className='product-colors'>
                                        <ul className='text-3xl flex'>
                                            <li><ColorCheckbox val={'#AAB2BD'} /></li>
                                            <li><ColorCheckbox val={'#5D9CEC'} /></li>
                                            <li><ColorCheckbox val={'#A0D468'} /></li>
                                        </ul>
                                    </div>
                                    <div className='w-[150px] h-[40px]'>
                                        <button className='btn'>Options</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IoIosCloseCircleOutline className='text-4xl rounded-full absolute top-4 right-4 cursor-pointer bg-stone-200' style={{zIndex: '1000'}} onClick={handleClose} />
                    <ProductDetailsModal />
                </Box>
            </Modal>
        </>
    )
};

export default ProductMiniature;