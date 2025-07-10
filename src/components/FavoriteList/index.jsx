import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import ProductMiniature from '../ProductMiniature';
import { useSelector } from 'react-redux';

const FavoriteList = ({displayGrid}) => {
    const { loadingFeaturedProducts, featureProducts } = useSelector(state => state.productSlice);

    return (
        <div className='no-scrollbar'>

            {displayGrid && <div className='grid grid-cols-5 bg-slate-200 gap-0.5 overflow-hidden'>
                {loadingFeaturedProducts 
                ? new Array(18).fill(0).map((val, index) =>
                    <div> Test</div>
                )
                : featureProducts.map((data, index) =>
                    <ProductMiniature key={index} data={data} />
                )}
            </div>}

            {!displayGrid && <div className='grid grid-cols-1 overflow-hidden'>
                <ul className='divide-y-2'>
                    {loadingFeaturedProducts 
                    ? new Array(8).fill(0).map((val, index) =>
                        <li className=''>
                            <div> Test</div>
                        </li>
                    )
                    : featureProducts.map((data, index) =>
                        <li className='' key={index}>
                            <ProductMiniature data={data} layout='expanded' />
                        </li>
                    )}
                </ul>
            </div>}

        </div>
    )
};

export default FavoriteList;