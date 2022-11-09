import React from 'react';
import { NavLink } from 'react-router-dom';
//Image
import logo from '../images/logo-white.svg';
//Style
import '../scss/Navbar.css';

const Navbar = () => {
    return (
       <header>
            <div className='logo-container'>
                <NavLink to="/">
                    <img src={logo} alt='logo-image' />
                </NavLink>
            </div>
            <div className='list-container'>
                <ul className='navbar-wrapper'>
                    <li>
                        <NavLink to="/products">
                            محصولات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/price">
                            تعرفه‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/developers">
                            توسعه‌دهنده‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">
                            تماس با ما
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/more">
                            بیش‌تر
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-zarin-pal">
                            زرین‌پال‌من
                        </NavLink>
                    </li>
                </ul>
            </div>
       </header>
    );
};

export default Navbar;