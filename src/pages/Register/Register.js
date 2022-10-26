import React from 'react';
import register from './regsiter.png'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className='text-2xl font-medium text-center mt-10'>Create a New Account</h2>
            <div className='grid md:grid-cols-2 items-center'>
            <img src={register} alt="" className='lg:w-4/5 mx-auto'/>
            <div>
                <form className='mx-auto w-4/5 md:w-auto md:mt-2 lg:mt-0'>
                    <label htmlFor="name" className='block'>Full Name</label>
                    <input type="text" name="name" className='bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5'/>
                    <label htmlFor="photourl" className='block'>PhotoURL</label>
                    <input type="text" name="photourl" className='bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5'/>
                    <label htmlFor="email" className='block'>Email</label>
                    <input type="email" name="email" className='bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5'/>
                    <label htmlFor="password" className='block'>Password</label>
                    <input type="password" name="password" className='bg-gray-200 px-2 py-1.5 rounded my-1.5 w-full md:w-4/5 lg:w-2/5'/>
                    <button type='submit' className='px-5 py-1.5 rounded bg-slate-700 hover:bg-slate-900 text-white font-medium block mt-3'>Register!</button>
                </form>
                <p className='mt-2'>Already have an account? <Link to='/login' className='text-slate-700'>Login Now!</Link></p>
                <p className='text-center w-full md:w-4/5 lg:w-2/5 my-3'>Or, Continue with</p>
                <div className='w-full md:w-4/5 lg:w-2/5 flex justify-evenly'>
                <button className='flex items-center px-4 py-1.5 rounded text-slate-700 border-2 border-slate-700 hover:bg-slate-800 hover:text-white hover:font-medium'><FaGoogle className='mr-2'/> Google</button>
                <button className='flex items-center px-4 py-1.5 rounded text-slate-700 border-2 border-slate-700 hover:bg-slate-800 hover:text-white hover:font-medium'><FaGithub className='mr-2'/> GitHub</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;