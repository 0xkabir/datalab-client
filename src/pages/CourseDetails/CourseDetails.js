import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { createRef } from 'react';
import {useReactToPrint} from 'react-to-print'
import toast from 'react-hot-toast';

const CourseDetails = () => {
    const printRef = createRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: 'CourseDetails',
        onAfterPrint: () => toast.success('pdf downloaded')
    })
    const details = useLoaderData()
    const {_id, imgurl, name, description, introduction, author, rating, reviews, price} = details
    const {intro, features, conclusion} = description
    
    return (
        <div>
            <div className='grid md:grid-cols-2 items-center md:px-8 md:py-5 my-5 w-full lg:w-4/5 mx-auto bg-slate-900 text-white'>
                <div className='p-4 md:p-0 md:pr-4 lg:pr-8 order-2 md:order-1'>
                <h2 className='text-3xl font-medium'>
                    {name}
                </h2>
                <p className='text-lg'>{introduction}</p>
                <p className='text-amber-600 flex items-center'>
                <span className='mt-1'>{rating}</span>
                <span className='flex mx-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                </span>
                <span className='text-gray-300'>({reviews} reviews)</span>
                </p>
                <p>Created by: {author}</p>
                <p className='text-4xl font-bold mt-4'>${price}</p>
                <span>
                    <button onClick={handlePrint} className='text-base bg-gray-200 px-2 py-1 mt-2 rounded-md font-medium text-slate-800'>Print Details</button>
                </span>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={imgurl} alt="" className='ml-auto w-full md:w-96'/>
                </div>
            </div>

            <div style={{width:"100%", height: window.innerHeight}} ref={printRef}>
            <div className='w-11/12 md:w-4/5 mx-auto'>
                <h3 className='text-3xl font-medium'>Description</h3>
                <p>{intro}</p>
                <p className='text-xl mt-3 font-medium'>What You'll Learn</p>
                <ul className='list-disc list-outside ml-8'>
                    {
                        features.map((feature, idx)=>{
                            return <li key={idx}>{feature}</li>
                        })
                    }
                </ul>
                <p className='mt-3 mb-5'>{conclusion}</p>
                </div>
            </div>
            
            <div className='w-11/12 md:w-4/5 mx-auto'>
            <Link to={`/checkout/${_id}`}>
                <button className='px-3 py-1.5 mb-10 bg-slate-800 hover:bg-slate-900 rounded font-medium text-white'>Get Premium Access</button>
            </Link>
            </div>            
        </div>
    );
};

export default CourseDetails;