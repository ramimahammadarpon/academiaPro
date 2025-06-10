import React from 'react';
import Banner from '../Components/Banner';
import LatestCourses from '../Components/LatestCourses';

const Home = () => {
    return (
        <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20">
            <header>
                <Banner></Banner>
            </header>
            <main className='max-w-7xl mx-auto'>
                <section>
                    <LatestCourses></LatestCourses>
                </section>
            </main>
        </div>
    );
};

export default Home;