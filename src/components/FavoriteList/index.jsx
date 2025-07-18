import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import ProductMiniature from '../ProductMiniature';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner';
import { actions as wishlistActions } from '../../redux/slices/wishlistSlice.jsx';

const FavoriteList = ({displayGrid}) => {
    const dispatch = useDispatch();
    const { getWishlist } = wishlistActions;
    const { loadingWishlist, isWishlistDirty, wishlist } = useSelector(state => state.wishlistSlice);

    useEffect(() => {
        if (!wishlist || isWishlistDirty) {
            dispatch(getWishlist());
        }
    }, [isWishlistDirty, wishlist])

    return (
        <div className=''>

            {displayGrid && <div className='grid grid-cols-5 bg-slate-200 gap-0.5 overflow-hidden'>
                {loadingWishlist && <div className='h-[420px] w-[1118px]'><LoadingSpinner /></div>}
                {wishlist && wishlist.map((data, index) =>
                    <ProductMiniature key={index} data={data.product} />
                )}
            </div>}

            {!displayGrid && <div className='grid grid-cols-1 overflow-hidden'>
                <ul className='divide-y-2'>
                    {loadingWishlist && <div className='h-[420px]'><LoadingSpinner /></div>}
                    {wishlist && wishlist.map((data, index) =>
                        <li className='' key={index}>
                            <ProductMiniature data={data.product} layout='expanded' />
                        </li>
                    )}
                </ul>
            </div>}

        </div>
    )
};

export default FavoriteList;