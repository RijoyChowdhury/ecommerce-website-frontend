import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/slices/userSlice.jsx';
import toast from "react-hot-toast";
import { Box, CircularProgress, Typography } from "@mui/material";

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);

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
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userSlice);
    const { fetchUser } = actions;
    const [isLoading, setIsLoading] = useState(true);

    const isAccessTokenPresent = () => localStorage.getItem('isAccessTokenPresent') === 'true';

    const checkUserPresent = async () => {
        if (!user && isAccessTokenPresent()) {
            const response = await dispatch(fetchUser()).unwrap();
            if (response.success) {
                notifySuccess('Login successful');
            }
        }
        setIsLoading(false);
    };

    useEffect(() => {
        checkUserPresent();
    }, []);

    console.log('Render page');

    return (
        user
            ? <Outlet />
            : isLoading
                ? <Box sx={style}>
                    <CircularProgress color="inherit" size="2rem" />
                    <Typography id="loading-modal" variant="h6" component="h2">
                        Loading Data
                    </Typography>
                </Box>
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}


export default RequireAuth;