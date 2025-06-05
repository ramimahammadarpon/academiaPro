import React from 'react';
import Navbar from '../Components/Navbar';

const HomePageLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <section className='bg-purple-600 h-screen'>This is Section 1</section>
                <section className='bg-amber-600 h-screen'>This is Section 2</section>
            </main>
        </div>
    );
};

export default HomePageLayout;