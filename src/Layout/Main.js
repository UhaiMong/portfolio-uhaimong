import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shaired/Footer/Footer';
import Navebar from '../Pages/Shaired/Navbar/Navebar';

const Main = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;