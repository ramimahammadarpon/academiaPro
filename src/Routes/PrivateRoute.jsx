import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return children;
};

export default PrivateRoute;