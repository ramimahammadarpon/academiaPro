import React from 'react';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen">
            <header>
                <Banner></Banner>
            </header>
        </div>
    );
};

export default Home;