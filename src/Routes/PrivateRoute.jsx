import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <div className='h-screen flex items-center justify-center'><span className="loading loading-bars loading-xl"></span></div>
    }
    return children;
};

export default PrivateRoute;