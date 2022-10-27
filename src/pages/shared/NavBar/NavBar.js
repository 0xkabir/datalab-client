import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png'
import { FaSignOutAlt } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Navbar } from 'flowbite-react';
import { useState } from 'react';

const NavBar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const handleLogOut = () => {
        userLogOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    const [theme,setTheme] = useState('light')

    const handleThemeChange = () => {
        if(theme === 'light'){
            setTheme("dark")
        }
        else{
            setTheme('light')
        }
    }

    return (
        <Navbar className='sticky shadow-md top-0 z-20'
        fluid={true}
        rounded={true}
        >
        <Link to="/">
            <div className='flex items-center px-5'>
                <img src={logo} alt="" className='w-6 mr-2'/>
                <h2 className='text-xl font-medium'><span className='text-orange-800'>Data</span>Lab</h2>
            </div>
        </Link>
        <div className="flex items-center md:order-2">
            <button onClick={handleThemeChange} className='text-lg mr-2'>{theme === 'light'?<HiMoon/>:<HiSun/>}</button>
        {
                (user?.email || user?.displayName|| user?.uid)?<>
                <img src={user.photoURL} alt="" className='w-8 mr-5 rounded-full' title={user.displayName}/>
                <button onClick={handleLogOut} className='px-2 py-1 rounded-lg text-white bg-slate-700 font-medium flex items-center'><FaSignOutAlt/></button>
                </>:
                <div className='hidden md:block'>
                <NavLink to='/login' className={({isActive})=>isActive?'md:text-base mx-2 px-3 py-1.5 bg-slate-700 font-medium text-white text-center rounded-lg': 'md:text-base font-medium text-center mx-2 px-3 py-1.5'}>Login</NavLink>
                <NavLink to='/register' className={({isActive})=>isActive?'md:text-base mx-2 px-3 py-1.5 bg-slate-700 font-medium text-white text-center rounded-lg': 'md:text-base font-medium text-center mx-2 px-3 py-1.5'}>Register</NavLink>
                </div>
            }      
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <NavLink to='/home' className={({isActive})=>isActive?'md:text-base w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'md:text-base text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block '}>Home</NavLink>
        <NavLink to='/courses' className={({isActive})=>isActive?'md:text-base w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'md:text-base text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>Courses</NavLink>
        <NavLink to='/faq' className={({isActive})=>isActive?'md:text-base w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'md:text-base text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>FAQ</NavLink>
        <NavLink to='/blog' className={({isActive})=>isActive?'md:text-base w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'md:text-base text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>Blog</NavLink>
        
        {
            (user?.email || user?.displayName || user?.uid)?<></>:<>
            <NavLink to='/login' className={({isActive})=>isActive?'md:hidden w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'md:hidden text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>Login</NavLink>
            <NavLink to='/register' className={({isActive})=>isActive?'md:hidden w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'md:hidden text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>Register</NavLink>
            </>
        }
            
        </Navbar.Collapse>
        </Navbar>
            );
};

export default NavBar;