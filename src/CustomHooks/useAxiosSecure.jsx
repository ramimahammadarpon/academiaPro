import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://course-management-system-server.vercel.app/"
});

const useAxiosSecure = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            signOutUser()
              .then(() => {
                console.log("Logged out due to token issue.");
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading]);

  return axiosInstance;
};

export default useAxiosSecure;
