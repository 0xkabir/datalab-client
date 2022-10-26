import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png'
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const NavBar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const handleLogOut = () => {
        userLogOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <nav className='h-16 flex sticky top-0 justify-between items-center bg-white shadow-md z-10'>
            <Link to='/'>
                <div className='flex items-center px-5'>
                    <img src={logo} alt="" className='w-6 mr-2'/>
                    <h2 className='text-xl font-medium'><span className='text-orange-700'>Data</span>Lab</h2>
                </div>
            </Link>

            <div className='relative px-5'>
                <div onClick={()=>setOpen(!open)} className='text-right md:hidden'>
                    {
                        open?<HiX/>:<HiMenuAlt3/>
                    }
                </div>
                <div className={`md:px-5 md:text-lg lg:text-base flex flex-col justify-center md:flex-row w-[50vw] md:w-full bg-white h-[100vh] md:h-auto absolute md:static top-10 duration-500 ease-in-out ${open?'right-0':'right-[-250px] hidden md:flex'}`}>
                    <NavLink to='/home' className={({isActive})=>isActive?'mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 block'}>Home</NavLink>
                    <NavLink to='/courses' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-8 md:my-0 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 my-8 md:my-0 block'}>Courses</NavLink>
                    <NavLink to='/faq' className={({isActive})=>isActive?'mx-2 px-3 py-1 my-8 md:my-0 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 my-8 md:my-0 block'}>FAQ</NavLink>
                    <NavLink to='/blog' className={({isActive})=>isActive?'mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 block'}>Blog</NavLink>
                    {
                        (user?.email || user?.displayName)?<>
                        <img src={user.photoURL} alt="" className='w-8 mr-5 rounded-full' title={user.displayName}/>
                        <button onClick={handleLogOut} className='px-2 py-1 rounded-lg bg-slate-200 font-medium flex items-center'>Logout<FaAngleRight/></button>
                        </>:
                        <>
                        <NavLink to='/login' className={({isActive})=>isActive?'mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 block'}>Login</NavLink>
                        <NavLink to='/register' className={({isActive})=>isActive?'mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1 block'}>Register</NavLink>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;