import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/slices/userSlice.jsx';
import toast from "react-hot-toast";

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);

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
                ? <span>Fetching user data</span>
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}


export default RequireAuth;