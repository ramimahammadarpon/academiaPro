import Card from './card';

const LatestCourses = ({courses}) => {
    return (
        <div className='mt-20 px-3'>
            <h1 className='text-2xl font-semibold text-primary mb-7'>Latest Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    courses.map((course, index)=> <Card key={index} index={index} course={course}></Card>)
                }
            </div>
        </div>
    );
};

export default LatestCourses;