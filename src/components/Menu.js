import React from 'react';
import { NavLink } from 'react-router-dom';
//Style
import '../scss/Menu.css';
import { FiX } from 'react-icons/fi';
import { FiAlignJustify } from 'react-icons/fi';

const Menu = ({isClicked, setIsClicked}) => {
    const clickHandler = () => {
        setIsClicked(!isClicked)
    };
    return (
       <header className='hambur-menu'>
            {!isClicked ? 
                (<ul className='hambur-wrapper'>
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
            </ul>) : 
                (<FiX onClick={clickHandler} className='nav-icon' /> )}
       </header>
    );
};

export default Menu;