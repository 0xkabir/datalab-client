import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
             <h2 className='my-8 w-11/12 mx-auto text-3xl text-slate-800 font-medium text-center'>Explore Our Popular Courses</h2>
             <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-4'>
                    {
                        courses.map(course => <Link to={`/courses/${course._id}`} key={course._id}>
                            <p className='cursor-pointer font-medium m-5 md:mx-12 lg:mx-5 px-5 py-3 rounded-lg shadow-md'>{course.name}</p>
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