import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
    const active = {
        backgroundColor: "rgb(30 41 59)",
        borderRadius: "5px",
        padding: "5px 15px",
        color: "white",
        fontWeight: "700"
    }

    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between items-center px-5'>
            <Link to='/'><h2 className='text-3xl font-medium'>Data<span className='text-orange-800'>Lab</span></h2></Link>
            <div>
            <div onClick={()=>setOpen(!open)} className='text-right md:hidden'>
                {open?<HiX/>:<HiMenuAlt3/>}
            </div>
            <div>
            <ul className={`md:px-5 md:text-lg lg:text-base flex flex-col justify-center md:flex-row w-[50vw] md:w-full bg-white h-[100vh] md:h-auto absolute md:static top-10 duration-500 ease-in-out ${open?'right-0':'right-[-250px] hidden md:flex'}`}>
                    <li className='px-3 relative'>
                        <NavLink to='/home' style={({isActive})=>isActive?active:undefined}>Home</NavLink>
                    </li>
                    <li className='px-3 relative'>
                        <NavLink to='/courses' style={({isActive})=>isActive?active:undefined}>Courses</NavLink>
                    </li>
                    <li className='px-3 relative'>
                        <NavLink to='/faq' style={({isActive})=>isActive?active:undefined}>FAQ</NavLink>
                    </li>
                    <li className='px-3 relative'>
                        <NavLink to='/blog' style={({isActive})=>isActive?active:undefined}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;