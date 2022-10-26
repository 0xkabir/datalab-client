import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
             <h2 className='text-3xl font-medium text-center'>This will be the Courses Page</h2>
             <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-4'>
                    {
                        courses.map(course => <Link to={`/courses/${course._id}`} key={course._id}>
                            <p className='cursor-pointer font-medium m-5 md:mx-12 lg:mx-5 px-5 py-3 rounded-lg shadow-xl'>{course.name}</p>
                        </Link>)
                    }
                </div>
                <div className='col-span-12 lg:col-span-8 grid md:grid-cols-2 md:mx-10 gap-6'>
                    {
                        courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                    }
                </div>
             </div>
        </div>
    );
};

export default Courses;