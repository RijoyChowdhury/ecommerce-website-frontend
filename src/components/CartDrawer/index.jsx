import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Divider, IconButton } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartDrawer = (props) => {
    const navigate = useNavigate();
    const { open, toggleDrawer } = props;
    const goToCartPage = () => {
        toggleDrawer(false);
        navigate('/cart');
    };
    const goToChechoutPage = () => {
        toggleDrawer(false);
        navigate('/checkout');
    };
    const DrawerList = (
        <Box sx={{ width: 420 }} role="presentation" className='flex flex-col h-lvh'>
            <div className='menu-header flex items-center justify-between my-1 ml-4 mr-2 text-[16px] font-[400] h-fit'>
                Shopping Cart (4)
                <IconButton aria-label="close-menu" onClick={() => toggleDrawer(false)}>
                    <IoMdClose />
                </IconButton>
            </div>
            <Divider />
            <div className='cart-content overflow-auto top-12 overflow-auto grow'>

                {new Array(4).fill(0).map((val, index) => <div key={index} className='cart-item flex p-2'>
                    <div className='product-thumbnail border-2 rounded-lg overflow-hidden'>
                        <img src={cart_thumbnail_product} />
                    </div>
                    <div className='product-details flex flex-col w-[65%] p-2'>
                        <span>Apple AirPods Max Over-Ear Wireless Headphone</span>
                        <span>1 x $42.00</span>
                    </div>
                    <div className='delete-wrapper text-xl flex justify-end p-2'>
                        <button className='hover:text-red-500'><FaRegTrashAlt /></button>
                    </div>
                </div>)}

            </div>
            <Divider />
            <div className='cart-total h-fit'>
                <div className='item-count p-2'>
                    <li className='flex justify-between font-semibold'><span>1 item</span><span className='text-primary'>$42.00</span></li>
                    <li className='flex justify-between font-semibold'><span>Shipping</span><span className='text-primary'>$7.00</span></li>
                </div>
                <Divider />
                <div className='item-total p-2'>
                    <li className='flex justify-between font-semibold'><span>Total (tax excl.)</span><span className='text-primary'>$49.00</span></li>
                    <li className='flex justify-between font-semibold'><span>Total (tax incl.)</span><span className='text-primary'>$49.00</span></li>
                    <li className='flex justify-between font-semibold'><span>Taxes:</span><span className='text-primary'>$0.00</span></li>

                </div>
                <div className='flex p-2 gap-2 h-[60px] border-t-2 border-custom-light-gray bg-custom-light-gray'>
                    <button className='btn' onClick={goToCartPage}>Cart</button>
                    <button className='btn' onClick={goToChechoutPage}>Checkout</button>
                </div>
            </div>

        </Box>
    );

    return (
        <>
            <Drawer open={open} anchor='right' onClose={() => toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
};

export default CartDrawer;