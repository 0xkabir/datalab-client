import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/shared/NavBar/NavBar';
import SiteFooter from '../../pages/shared/SiteFooter/SiteFooter';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default Main;