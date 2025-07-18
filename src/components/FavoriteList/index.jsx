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
import { MdDeleteOutline } from 'react-icons/md';

const FavoriteList = ({ displayGrid }) => {
    const [shouldShowDelete, setShouldShowDelete] = React.useState(null);

    const dispatch = useDispatch();
    const { getWishlist, removeItemFromWishlist, deleteItemFromWishlist } = wishlistActions;
    const { loadingWishlist, isWishlistDirty, wishlist } = useSelector(state => state.wishlistSlice);

    const showDeleteButton = (showDeleteIndex) => {
        setShouldShowDelete(showDeleteIndex)
    }

    const handleFavDelete = async (id) => {
        dispatch(deleteItemFromWishlist(id));
    }

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
                    <div className='relative' onMouseEnter={() => showDeleteButton(index)} onMouseLeave={() => showDeleteButton(null)}>
                        <ProductMiniature key={index} data={data.product} />
                        {shouldShowDelete === index &&
                            <div className='absolute text-xl top-4 right-4 bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white' onClick={() => handleFavDelete(data._id)}>
                                <MdDeleteOutline />
                            </div>
                        }
                    </div>)}
            </div>}

            {!displayGrid && <div className='grid grid-cols-1 overflow-hidden'>
                <ul className='divide-y-2'>
                    {loadingWishlist && <div className='h-[420px]'><LoadingSpinner /></div>}
                    {wishlist && wishlist.map((data, index) =>
                        <li className='relative' key={index} onMouseEnter={() => showDeleteButton(index)} onMouseLeave={() => showDeleteButton(null)}>
                            <ProductMiniature data={data.product} layout='expanded' />
                            {shouldShowDelete === index &&
                                <div className='absolute text-xl top-4 right-4 bg-white border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:border-primary hover:text-white' onClick={() => handleFavDelete(data._id)}>
                                    <MdDeleteOutline />
                                </div>
                            }
                        </li>
                    )}
                </ul>
            </div>}

        </div>
    )
};

export default FavoriteList;