import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import { logout } from "../Store/AuthSlice";

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const validateSession = async () => {
            if (isAuthenticated) {
                try {
                    // Try to fetch profile to validate token (and refresh if needed via interceptor)
                    await AuthService.getProfile();
                } catch (error) {
                    // If validation fails (and refresh failed), logout
                    console.error("Session validation failed", error);
                    dispatch(logout());
                }
            }
            setIsChecking(false);
        };

        validateSession();
    }, [isAuthenticated, dispatch]);

    if (isChecking && isAuthenticated) {
        // Show nothing or a loader while checking validity
        return <div className="min-h-screen flex items-center justify-center dark:bg-gray-900"><div className="text-blue-600 dark:text-blue-400 font-bold">Verifying Session...</div></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
