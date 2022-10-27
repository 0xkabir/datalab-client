import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png'
import { FaAngleRight } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Navbar } from 'flowbite-react';

const NavBar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const handleLogOut = () => {
        userLogOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <Navbar
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
        {
                (user?.email || user?.displayName)?<>
                <img src={user.photoURL} alt="" className='w-8 mr-5 rounded-full' title={user.displayName}/>
                <button onClick={handleLogOut} className='px-2 py-1 rounded-lg bg-slate-200 font-medium flex items-center'>Logout<FaAngleRight/></button>
                </>:
                <div>
                <NavLink to='/login' className={({isActive})=>isActive?'mx-2 px-3 py-1.5 bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1.5'}>Login</NavLink>
                <NavLink to='/register' className={({isActive})=>isActive?'mx-2 px-3 py-1.5 bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center mx-2 px-3 py-1.5'}>Register</NavLink>
                </div>
            }      
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <NavLink to='/home' className={({isActive})=>isActive?'w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block '}>Home</NavLink>
        <NavLink to='/courses' className={({isActive})=>isActive?'w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>Courses</NavLink>
        <NavLink to='/faq' className={({isActive})=>isActive?'w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>FAQ</NavLink>
        <NavLink to='/blog' className={({isActive})=>isActive?'w-2/5 mx-auto md:mx-2 px-3 py-1 block bg-slate-700 font-medium text-white text-center rounded-lg': 'text-center w-2/5 mx-auto md:mx-2 px-3 py-1 block'}>Blog</NavLink>
            
        </Navbar.Collapse>
        </Navbar>
            );
};

export default NavBar;