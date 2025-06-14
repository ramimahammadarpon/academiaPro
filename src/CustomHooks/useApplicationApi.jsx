import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useApplicationApi = () => {
    const axiosSecure = useAxiosSecure();

    const applicationPromise = email => {
        return axiosSecure.get(`enrollment?email=${email}`).then(res=> res.data);
    }
    return {
        applicationPromise
    };
};

export default useApplicationApi;