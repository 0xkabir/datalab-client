import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const{_id, imgurl, name, author, rating, reviews, price, isBestSeller} = course
    return (
        <Link to={`/courses/${_id}`}>
            <div className='p-5 rounded-lg shadow-xl'>
            <img src={imgurl} alt="" className='w-full rounded-lg mb-2'/>
            <h3 className='text-lg font-medium'>{name} {
                isBestSeller?<span className='text-xs px-2 py-1 rounded-xl bg-amber-600 text-white'>Bestseller</span>:undefined
            }</h3>
            <p className='text-sm text-gray-700'>{author}</p>
            <p className='text-amber-600 flex items-center'>
                <span className='mt-1'>{rating}</span>
                <span className='flex mx-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                </span>
                <span className='text-gray-700'>({reviews})</span>
            </p>
            <p className='font-medium'>${price}</p>
        </div>
        </Link>
    );
};

export default CourseCard;