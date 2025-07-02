import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Divider, IconButton } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import cart_thumbnail_product from '../../assets/images/cart-thumbnail-product.jpg'
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import noImgAvailable from '../../assets/images/no-img-available.png';
import cartEmpty from '../../assets/images/cart-empty.avif';
import LoadingSpinner from '../LoadingSpinner';

const CartDrawer = (props) => {
    const navigate = useNavigate();
    const { open, toggleDrawer } = props;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();
    const { getCartDetails, updateCartState, removeCartItem } = actions;
    const { cart } = useSelector(state => state.cartSlice);
    const { user } = useSelector(state => state.userSlice);

    const goToCartPage = () => {
        toggleDrawer(false);
        navigate('/cart');
    };

    const goToChechoutPage = () => {
        toggleDrawer(false);
        navigate('/checkout');
    };

    const fetchCartDetails = async () => {
        if (cart) {
            setCartItems(cart);
        }
    }

    const getTotalCartAmt = () => {
        if (cartItems.length === 0) return 0;
        return cartItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
    }

    const removeItem = (productId) => {
        dispatch(removeCartItem(productId));
    }

    useEffect(() => {
        fetchCartDetails();
    }, [cart]);

    const DrawerList = (
        <Box sx={{ width: 420 }} role="presentation" className='flex flex-col h-lvh'>
            <div className='menu-header flex items-center justify-between my-1 ml-4 mr-2 text-[16px] font-[400] h-fit'>
                Shopping Cart ({cartItems.length})
                <IconButton aria-label="close-menu" onClick={() => toggleDrawer(false)}>
                    <IoMdClose />
                </IconButton>
            </div>
            <Divider />
            <div className='cart-content overflow-auto top-12 grow'>
                {/* cart item list */}
                {cartItems.length > 0 && cartItems.map((item, index) => <div key={index} className='cart-item flex p-2'>
                    <div className='product-thumbnail border-2 rounded-lg overflow-hidden'>
                        <img src={item.product.images.length > 0 ? item.product.images[0] : noImgAvailable} width="90px" height="90px" />
                    </div>
                    <div className='product-details flex flex-col w-[65%] p-2'>
                        <span className='text-primary font-bold text-base truncate'>{item.product.name}</span>
                        <span>Quantity: {item.quantity}</span>
                        <span className='text-primary'>${item.quantity * item.product.price}</span>
                    </div>
                    <div className='delete-wrapper text-xl flex justify-end p-2'>
                        <button className='hover:text-red-500' onClick={() => removeItem(item._id)}><FaRegTrashAlt /></button>
                    </div>
                </div>)}

                {/* cart empty message */}
                {cartItems.length === 0 && <div className='h-full flex items-center'>
                    <img src={cartEmpty} />
                </div>}
            </div>
            <Divider />
            <div className='cart-total h-fit'>
                <div className='item-count p-2'>
                    <li className='flex justify-between font-semibold'><span>{cartItems.length} item(s)</span><span className='text-primary'>${getTotalCartAmt()}</span></li>
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
                {loading && <div className='w-[420px] h-full border-2'><LoadingSpinner /></div>}
                {!loading && DrawerList}
            </Drawer>
        </>
    )
};

export default CartDrawer;