import React from 'react';
import { NavLink } from 'react-router-dom';
//Image & Icons
import logo from '../images/logo-white.svg';
import { FiAlignJustify } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
//Style
import '../scss/Navbar.css';

const Navbar = ({isClicked, setIsClicked}) => {
    const clickHandler = () => {
        setIsClicked(!isClicked)
    };
    return (
       <header>
            <div className='logo-container'>
                <NavLink to="/">
                    <img src={logo} alt='logo-image' />
                </NavLink>
            </div>
            <nav>
                <ul className='navbar-wrapper'>
                    <li>
                        <NavLink className='link-list' to="/products">
                            محصولات
                            <FiChevronDown className='drop-down-sign' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/price">
                            تعرفه‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/developers">
                            توسعه‌دهنده‌ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/contact-us">
                            تماس با ما
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/more">
                            بیش‌تر
                            <FiChevronDown className='drop-down-sign' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link-list' to="/my-zarin-pal">
                            زرین‌پال‌من
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='icon-container'>
                {!isClicked ? 
                (<FiAlignJustify onClick={clickHandler} className='nav-icon' /> ) : 
                (<FiX onClick={clickHandler} className='nav-icon' /> )}
            </div>
       </header>
    );
};

export default Navbar;