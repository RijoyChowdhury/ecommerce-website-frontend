import React from 'react';
import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 100,
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

const CustomModal = () => {
    const { openModal } = useAuth();

    return (
        <Modal
            open={openModal}
            aria-labelledby="loading-modal"
            aria-describedby="shows-loading-text"
        >
            <Box sx={style}>
                <CircularProgress color="inherit" size="2rem" />
                <Typography id="loading-modal" variant="h6" component="h2">
                    Logging you in
                </Typography>
            </Box>
        </Modal>
    )
};

export default CustomModal;