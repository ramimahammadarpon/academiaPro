import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const HomePageLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
               <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomePageLayout;