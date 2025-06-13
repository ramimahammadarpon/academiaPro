import React, { useEffect, useState } from 'react';
import Card from '../Components/card';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3000/courses').then(res=> res.json()).then(data=> setCourses(data));
    }, [])
    return (
        <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20 lg:py-30">
            <h1 className='text-center font-semibold text-2xl text-primary mb-7'>Courses</h1>

            <div className='grid grid-cols-3 gap-3 max-w-7xl mx-auto'>
                {
                    courses.map((course, index) => <Card key={index} course={course} ></Card>)
                }
            </div>
        </div>
    );
};

export default Courses;