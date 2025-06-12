import React from 'react';
import errorPic from '../assets/error404.png';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center max-h-[90vh]'>
            <img className='max-w-xl' src={errorPic} alt="" />
            <button onClick={()=> navigate(-1)} className=" px-3 py-1 text-lg text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white border-2 border-secondary hover:border-none rounded-sm transform hover:scale-110 transition-all duration-150 cursor-pointer"
            >
              Go Back
            </button>
        </div>
    );
};

export default Error;