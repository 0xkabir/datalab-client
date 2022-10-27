import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const SiteFooter = () => {
    return (
        <Footer container={true}>
        <div className="w-full text-center">
        <Footer.Divider />
            <div className="w-full justify-between flex flex-col md:flex-row">
            <Link to="/">
            <div className='flex items-center px-5 justify-center'>
                <img src={logo} alt="" className='w-6 mr-2'/>
                <h2 className='text-xl font-medium'><span className='text-orange-800'>Data</span>Lab</h2>
            </div>
            </Link>
            <Footer.LinkGroup className='justify-center my-2 md:my-auto'>
                <Link to='/' className='px-3'>About</Link>
                <Link to='/' className='px-3'>Privacy Policy</Link>
                <Link to='/' className='px-3'>Contact</Link>
            </Footer.LinkGroup>
            </div>
            <Footer.Copyright
            by="DataLab"
            year={2022}
            />
        </div>
        </Footer>
    );
};

export default SiteFooter;