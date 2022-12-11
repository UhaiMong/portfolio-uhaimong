import React from 'react';
import '../../Style/Style.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom';

const Navebar = () => {
    return (
        <nav className="navbar">
            <div className="max-width">
                <img className="logoImg" src={logo} alt="logo" />
                <div className="logo">
                    <span className="first-name">Uhai</span>
                    <span className="last-name">Mong</span>
                </div>
                <ul className="menu">
                    <li><Link to='/' className='menu-btn'>Home</Link></li>
                    <li><Link to='/about' className='menu-btn'>About</Link></li>
                    <li><Link to='/services'  className='menu-btn'>Services</Link></li>
                    <li><Link to='/skills' className='menu-btn'>Skills</Link></li>
                    <li><Link to='/projects' className='menu-btn'>Projects</Link></li>
                    <li><Link to='/contact' className='menu-btn'>Contact</Link></li>
                    <li><Link to='/blogs' className='menu-btn'>Blogs</Link></li>
                </ul>
                <div className="menu-btn">
                    <i className="uil uil-bars"></i>
                </div>

            </div>
        </nav>
    );
};

export default Navebar;