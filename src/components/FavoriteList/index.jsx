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

const FavoriteList = ({displayGrid}) => {

    return (
        <div className=''>

            {displayGrid && <div className='grid grid-cols-5 bg-slate-200 gap-0.5 overflow-hidden'>
                {new Array(18).fill(0).map((val, index) =>
                    <ProductMiniature />
                )}
            </div>}

            {!displayGrid && <div className='grid grid-cols-1 overflow-hidden'>
                <ul className='divide-y-2'>
                    {new Array(8).fill(0).map((val, index) =>
                        <li className=''>
                            <ProductMiniature layout='expanded' />
                        </li>
                    )}
                </ul>
            </div>}

        </div>
    )
};

export default FavoriteList;