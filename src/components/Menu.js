import React from 'react';
import { NavLink } from 'react-router-dom';
//Image & Icons
import { FiAlignJustify } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
//Style
import '../scss/Navbar.css';

const Menu = () => {
    return (
       <header>
            <nav>
                <ul className='navbar-wrapper'>
                    <li>
                        <NavLink className='link-list' to="/price">
                            تعرفه‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/">
                           اپلیکیشن
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/">
                            سوالات متداول
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/products">
                            محصولات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/contact-us">
                            تماس با ما
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/my-zarin-pal">
                            زرین‌پال‌من
                        </NavLink>
                    </li>
                </ul>
            </nav>
       </header>
    );
};

export default Menu;