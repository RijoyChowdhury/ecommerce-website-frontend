import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const style = {
    height: '100%',
    bgcolor: 'background.paper',
    p: 4,
    outline: 'none',
    borderRadius: '5px',
    display: 'flex',
    gap: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--primary)',
};

const LoadingSpinner = ({ text }) => {
    return (
        <Box sx={style}>
            <CircularProgress color="inherit" size="2rem" />
            {text && <Typography id="loading-modal" variant="h6" component="h2">
                {text}
            </Typography>}
        </Box>
    )
};

export default LoadingSpinner;