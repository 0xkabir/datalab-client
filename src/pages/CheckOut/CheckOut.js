import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    return (
        <div>
            <h2 className='text-3xl font-medium'>{course.name}</h2>
        </div>
    );
};

export default CheckOut;