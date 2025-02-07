import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import { useEffect } from "react";

const RequireAuth = () => {
    const { isUserLoggedIn } = useAuth();
    const location = useLocation();

    useEffect(() => {
        
    }, [])

    return (
        isUserLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
}


export default RequireAuth;