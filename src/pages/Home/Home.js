import React from 'react';
import TechSlider from './TechSlider/TechSlider';
import banner from './home-banner.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center w-11/12 mx-auto mt-8'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-4xl font-medium text-slate-800'>Become a Data Expert Today!!</h1>
                    <p className='text-slate-800 my-5'>So, You want to start your career as a data expert having no clue how to start off? No Worries!! DataLab has got your back. Satrt learning all the essential skiis and step into your dream career.</p>
                    <Link to='/register'>
                    <button className='text-white font-medium bg-slate-800 hover:bg-slate-900 px-5 py-2 rounded-full'>Sign Up</button>
                    </Link>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={banner} alt="" />
                </div>
            </div>
            <p className=' mt-8 text-3xl font-medium text-center text-slate-800'>Technologies You'll Learn</p>
            <TechSlider/>
            <div className='w-11/12 md:w-4/5 lg:w-3/5 mx-auto'>
                <h2 className='text-2xl font-medium text-slate-800'>Why US?</h2>
                <p className='text-slate-800 my-5'>You may or may not have any prior knowledge in this field. That's why we've designed our curriculum in such a way that you can start learning from any stage. We've started from very basic statistics to topics like Data Science and Machine Learning. So what are you waiting for? Enroll our polular courses today and boost your carer as a data expert.</p>
                <Link to='/courses'>
                <button className='text-white font-medium bg-slate-800 hover:bg-slate-900 px-5 py-2.5 rounded-full'>Explore Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;