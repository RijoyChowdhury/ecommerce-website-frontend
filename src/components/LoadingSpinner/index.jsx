import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingSpinner = ({text}) => {
    return (
        <div className='block h-full'>
            <div className='container h-full'>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }} className='h-full flex flex-col gap-4'>
                    <CircularProgress color="inherit" size="4rem" />
                    {text && <span className='text-lg'>{text}</span>}
                </Box>
            </div>
        </div>
    )
};

export default LoadingSpinner;