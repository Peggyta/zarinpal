import React from 'react';
import { NavLink } from 'react-router-dom';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
//Image & Icons
import logo from '../images/logo-white.svg';
import { FiAlignJustify } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
//Style
import '../scss/Navbar.css';

const Navbar = ({isClicked, setIsClicked}) => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
    const clickHandler = () => {
        setIsClicked(!isClicked)
    };
    return (
        <>
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
                        <button className='link-list' id='dropDown-menu' {...buttonProps}>بیش‌تر
                            <FiChevronDown className='drop-down-sign' />
                        </button>
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
            <div className='dropDown-container'>
                <ul className={isOpen ? 'visible' : ''} role='menu'>
                            <li><a href='#'>سوالات متداول</a></li>
                            <li><a href='#'>سوالات متداول</a></li>
                            <li><a href='#'>سوالات متداول</a></li>
                            <li><a href='#'>سوالات متداول</a></li>
                            <li><a href='#'>سوالات متداول</a></li>
                        </ul>
            </div>
        </>
    );
};

export default Navbar;