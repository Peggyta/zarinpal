import React, {useState} from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { FiChevronDown } from 'react-icons/fi';
import '../scss/DropMenu.css';

const DropMenu = () => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(5);

    return (
        <>
            <button className='link-list' id='dropDown-menu' {...buttonProps}>
                بیش‌تر
                <FiChevronDown className='drop-down-sign' />
            </button>
            <div className={isOpen ? 'visible active' : ''} role='menu'>
                    <ul className='drop-list-items'>
                    <li><a {...itemProps[0]} href='#'>وبلاگ</a></li>
                    <li><a {...itemProps[1]} href='#'>دریافت شماره شبا</a></li>
                    <li><a {...itemProps[2]} href='#'>سوالات متداول</a></li>
                    <li><a {...itemProps[3]} href='#'>اپلیکیشن</a></li>
                    <li><a {...itemProps[4]} href='#'>زرین‌بین</a></li>
                </ul>
            </div>
        </>
        
    );
};

export default DropMenu;