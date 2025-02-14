import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import { useEffect } from "react";
// import { getData } from "../../api/postData.js";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/slices/userSlice.jsx';

const RequireAuth = () => {
    const { setOpenModal } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, error, isUserLoggedIn } = useSelector(state => state.userSlice);

    useEffect(() => {
        (async () => {console.log('isUserLoggedIn', isUserLoggedIn);
        console.log(location);
        const isAccessTokenPresent = localStorage.getItem('isAccessTokenPresent');
        if (!isUserLoggedIn && isAccessTokenPresent !== 'false') {
            console.log('refresh user started');
            await dispatch(actions.refreshUser());
            console.log('refresh user ended');
            navigate(location.pathname);
        }})();
    }, [isUserLoggedIn]);

    return (
        isUserLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
}


export default RequireAuth;