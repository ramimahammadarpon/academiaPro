import React, { useEffect, useState } from 'react';
import Card from './card';

const PopularCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('https://course-management-system-server.vercel.app/popularCourses').then(res=> res.json()).then(data=> {
            setCourses(data);
        });
    }, [])
    return (
        <div className='mt-20 px-3'>
            <h1 className='text-2xl font-semibold text-primary mb-7'>Popular Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    courses.map((course, index)=> <Card key={index} index={index} course={course}></Card>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;