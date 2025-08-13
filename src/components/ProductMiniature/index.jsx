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
import { IoIosCloseCircleOutline, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import img_not_found from '../../assets/images/no-img-available.png'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StarRating from '../StarRating';
import ProductDetailsModal from '../ProductDetailsModal';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import convert from 'color-convert';
import { Tooltip } from '@mui/material';

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
    const { layout = 'compact', data } = props;
    const [open, setOpen] = React.useState(false);
    const [shouldShowUtilities, setShouldShowUtilities] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const showUtilities = (showUtilitiesFlag) => {
        setShouldShowUtilities(showUtilitiesFlag)
    }

    return (
        <>
            <div className='slider-item bg-white p-4'>

                {layout === 'compact'

                    ? <div className='product-miniature' onMouseEnter={() => showUtilities(true)} onMouseLeave={() => showUtilities(false)}>
                        <div className='thumbnail-container relative flex justify-center items-center'>
                            <div className='w-[188px] h-[194px] flex justify-center items-center'>
                                <Link to={`/products/${data._id}`}><img src={data.images.length > 0 ? data.images[0] : img_not_found} className='w-[188px] h-[194px] border-2' /></Link>
                            </div>

                            <div className='product-status absolute top-0 left-0'>
                                <ul className='flex flex-col gap-1 text-sm'>
                                    {data.stockCount > 0 ? <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-green-500 border-green-500 text-white">
                                            In Stock
                                        </div>
                                    </li>
                                        : <li className='flex'>
                                            <div className="border-[1px] rounded-sm px-2 bg-red-500 border-red-500 text-white">
                                                Sold Out
                                            </div>
                                        </li>}
                                    {data.discount > 0 && <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-red-500 border-red-500 text-white">
                                            -{data.discount}%
                                        </div>
                                    </li>}
                                </ul>
                            </div>

                            {shouldShowUtilities && <div className='product-utils absolute top-0 right-0'>
                                <ul className='text-xl flex flex-col gap-1'>
                                    <li className='bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white'><IoMdHeartEmpty /></li>
                                    <li className='bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white' onClick={handleOpen}><LiaExpandArrowsAltSolid /></li>
                                    <li className='bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white'><BsCartPlus /></li>
                                </ul>
                            </div>}
                        </div>

                        <div className="product-description relative flex flex-col gap-2 mt-1">
                            <div className="brand-title text-xs" itemProp="name">
                                <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                            </div>
                            <h3 className="h3 product-title text-black text-sm h-[40px]">{data.name}</h3>
                            <div className="comments_note flex justify-between">
                                <div className="star_content clearfix flex gap-0.5">
                                    <StarRating value={data.rating} />
                                </div>
                                <span className="text-xs total-rating">{data.review.length} Review(s)</span>
                            </div>
                            <div className="product-price-and-shipping flex items-center gap-1">
                                {data.oldPrice && <span className="price text-sm text-gray-400 line-through" aria-label="Old Price">
                                    ${data.oldPrice}
                                </span>}
                                <span className="price text-base text-primary font-bold" aria-label="Price">
                                    ${data.price}
                                </span>
                            </div>

                            {data.color.length > 0 && <div className='product-colors absolute -right-1 bottom-1'>
                                <ul className='text-xl flex items-center'>
                                    {
                                        data.color.slice(0,3).map((color, index) => <li key={index}><ColorCheckbox checked={false} onChange={(value) => { }} val={`#${convert.keyword.hex(color.toLowerCase())}`} /></li>)
                                    }
                                    {
                                        data.color.length > 3 && 
                                        <Tooltip title="More colors available" placement="top" arrow>
                                            <li className='ml-1 text-sm text-primary cursor-pointer'>+{data.color.length - 3}</li>
                                        </Tooltip>
                                    }
                                </ul>
                            </div>}
                        </div>
                    </div>

                    : <div className='product-expanded flex' onMouseEnter={() => showUtilities(true)} onMouseLeave={() => showUtilities(false)}>
                        <div className='thumbnail-container relative w-[20%] flex justify-center items-center'>
                            <div className='w-[188px] h-[194px] flex justify-center items-center'>
                                <Link to={`/products/${data._id}`}><img src={data.images.length > 0 ? data.images[0] : img_not_found} className='w-[188px] h-[194px] border-2' /></Link>
                            </div>

                            <div className='product-status absolute top-0 left-0'>
                                <ul className='flex flex-col gap-1 text-sm'>
                                    {data.discount > 0 && <li className='flex'>
                                        <div className="border-[1px] rounded-sm px-2 bg-red-500 border-red-500 text-white">
                                            -{data.discount}%
                                        </div>
                                    </li>}
                                </ul>
                            </div>
                        </div>

                        <div className='description-container relative w-[80%] px-4 ml-4'>
                            <div className="product-description flex flex-col gap-2">
                                <div className="brand-title text-xs" itemprop="name">
                                    <a href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/brand/8-pro-tech-gear">Pro Tech Gear</a>
                                </div>
                                <h3 className="product-title text-black text-sm">{data.name}</h3>
                                <div className="comments_note flex gap-4">
                                    <div className="star_content clearfix flex gap-0.5">
                                        <StarRating value={data.rating} />
                                    </div>
                                    <span className="text-xs total-rating">{data.review.length} Review(s)</span>
                                </div>
                                <div className="product-price-and-shipping flex items-center gap-2">
                                    {data.oldPrice && <span className="price text-base text-gray-400 line-through" aria-label="Old Price">
                                        ${data.oldPrice}
                                    </span>}
                                    <span className="price text-lg text-primary font-bold" aria-label="Price">
                                        ${data.price}
                                    </span>
                                    {data.stockCount > 0
                                        ? <div className="border-[1px] ml-2 rounded-sm px-2 bg-green-500 border-green-500 text-white">
                                            In Stock
                                        </div>
                                        : <div className="border-[1px] ml-2 rounded-sm px-2 bg-red-500 border-red-500 text-white">
                                            Out of Stock
                                        </div>
                                    }
                                </div>
                                <div>
                                    <p className='text-sm leading-tight line-clamp-2'>
                                        {data.description}
                                    </p>
                                </div>
                                <div className='flex gap-4 mt-2 items-center'>
                                    {data.color.length > 0 && <div className='product-colors'>
                                        <ul className='text-3xl flex'>
                                            {
                                                data.color.map((color, index) => <li key={index}><ColorCheckbox checked={false} onChange={(value) => { }} val={`#${convert.keyword.hex(color.toLowerCase())}`} /></li>)
                                            }
                                        </ul>
                                    </div>}
                                    <div className='w-[150px] h-[40px]'>
                                        <Link to={`/products/${data._id}`}><button className='btn'>Check Details</button></Link>
                                    </div>
                                </div>
                            </div>

                            {shouldShowUtilities && <div className='product-utils absolute top-0 right-0'>
                                <ul className='text-xl flex gap-1'>
                                    <li className='bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white' onClick={handleOpen}><LiaExpandArrowsAltSolid /></li>
                                    <li className='bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white'><BsCartPlus /></li>
                                    <li className='bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white'><IoMdHeartEmpty /></li>
                                </ul>
                            </div>}
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
                    <IoIosCloseCircleOutline className='text-4xl rounded-full absolute top-4 right-4 cursor-pointer bg-stone-200' style={{ zIndex: '1000' }} onClick={handleClose} />
                    <ProductDetailsModal data={data} />
                </Box>
            </Modal>
        </>
    )
};

export default ProductMiniature;