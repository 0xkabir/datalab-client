import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h2 className='text-3xl font-medium'>Data<span className='text-orange-800'>Lab</span></h2>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/courses'>Courses</NavLink>
                </li>
                <li>
                    <NavLink to='/faq'>FAQ</NavLink>
                </li>
                <li>
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;