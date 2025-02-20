import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";

const RequireAuth = () => {
    const location = useLocation();
    const { user, isLoading } = useSelector(state => state.userSlice);

    return (
        user
            ? <Outlet />
            : isLoading
                ? <div className="h-[700px]"><LoadingSpinner text={'Loading Data...'} /></div>
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;