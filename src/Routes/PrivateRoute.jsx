import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(loading){
        return <Loading></Loading>
    }

    if(!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;