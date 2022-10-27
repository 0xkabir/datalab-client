import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    const {name, introduction, author, price} = course
    const navigate = useNavigate()
    const cancelCheckOut = () => {
        toast.error("Checkout Cancelled")
        navigate('/')
    }
    const proceedCheckOut = () => {
        toast.success("Checkout Successfull")
        navigate('/')
    }
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <div>
                <div className='w-11/12 md:w-3/5 mx-auto'>
                    <p className='text-lg font-medium tetx-slate-800'>You're checking out for the following course:</p>
                    <h2 className='text-2xl font-medium my-2'>{name}</h2>
                    <p className='text-slate-800'>{introduction}</p>
                    <span className='text-sm'>By {author}</span>
                    <p className='text-xl font-medium text-slate-800'>${price}</p>
                </div>
                <div className='w-4/5 md:w-2/5 mx-auto my-3 flex justify-evenly'>
                    <button onClick={cancelCheckOut} className='font-medium px-4 py-1.5 rounded-md text-slate-900 bg-slate-300 hover:bg-slate-400'>Cancel</button>
                    <button onClick={proceedCheckOut} className='font-medium px-4 py-1.5 rounded-md text-white bg-slate-800 hover:bg-slate-900'>Proceed Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;