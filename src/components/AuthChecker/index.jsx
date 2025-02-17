import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";

const style = {
    height: 700,
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

const RequireAuth = () => {
    const location = useLocation();
    const { user, isLoading } = useSelector(state => state.userSlice);

    return (
        user
            ? <Outlet />
            : isLoading
                ? <Box sx={style}>
                    <CircularProgress color="inherit" size="2rem" />
                    <Typography id="loading-modal" variant="h6" component="h2">
                        Loading Data...
                    </Typography>
                </Box>
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;