import React from 'react';
import { NavLink } from 'react-router-dom';
//Components
import ContactUs from '../pages/ContactUs';
import Developers from '../pages/Developers';
import More from '../pages/More';
import MyZarinPal from '../pages/MyZarinPal';
import Price from '../pages/Price';
import Products from '../pages/Products';
//Image
import logo from '../images/logo-white.svg';

const Navbar = () => {
    return (
       <header>
            <div className='logo-container'>
                <img src={logo} alt='logo-image' />
            </div>
            <div className='list-container'>
                <ul className='navbar-wrapper'>
                    <li>
                        <NavLink to="">
                            محصولات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            تعرفه‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            توسعه‌دهنده‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            تماس با ما
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            بیش‌تر
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            زرین‌پال‌من
                        </NavLink>
                    </li>
                </ul>
            </div>
       </header>
    );
};

export default Navbar;