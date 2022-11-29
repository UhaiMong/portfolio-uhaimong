import React from 'react';
import '../../Style/Style.css'

const Navebar = () => {
    return (
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#"><span className="first-name">Uhai</span> <span className="last-name">Mong</span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#services" className="menu-btn">Service</a></li>
                        <li><a href="#skills" className="menu-btn">Skills</a></li>
                        <li><a href="#teams" className="menu-btn">Team</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                        <li><a href="#footer" className="menu-btn">Blogs</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="uil uil-bars"></i>
                    </div>

                </div>
            </nav>
    );
};

export default Navebar;