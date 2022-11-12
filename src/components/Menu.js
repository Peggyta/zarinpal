import React from 'react';
import { NavLink } from 'react-router-dom';
//Image & Icons
import { FiAlignJustify } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
//Style
import '../scss/Menu.css';

const Menu = () => {
    return (
       <header className='hambur-menu'>
            <nav className='hambur-nav'>
                <ul className='hambur-wrapper'>
                    <li>
                        <NavLink className='hambur-list' to="/price">
                            تعرفه‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='hambur-list' to="/">
                           اپلیکیشن
                        </NavLink>
                    </li>
                    <div></div>
                    <li>
                        <NavLink className='hambur-list' to="/">
                            سوالات متداول
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='hambur-list' to="/products">
                            محصولات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='hambur-list' to="/contact-us">
                            تماس با ما
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='hambur-list' to="/my-zarin-pal">
                            زرین‌پال‌من
                        </NavLink>
                    </li>
                </ul>
            </nav>
       </header>
    );
};

export default Menu;