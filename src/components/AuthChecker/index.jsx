import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import { useEffect } from "react";
import { getData } from "../../api/postData.js";

const RequireAuth = () => {
    const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        async function checkLogin() {
            console.log('isUserLoggedIn', isUserLoggedIn);
            console.log(location);
            if (!isUserLoggedIn) {
                const response = await getData('/api/user/re-login');
                console.log(response);
                if (response.success) {
                    setIsUserLoggedIn(true);
                    navigate(location.pathname);
                }
            }
        }
        checkLogin();
    }, [])

    return (
        isUserLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
}


export default RequireAuth;