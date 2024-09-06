/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="w-full h-dvh flex items-center justify-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to='/signin'></Navigate>
    }

};

export default PrivateRoute;