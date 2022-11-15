import React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { FiChevronDown } from 'react-icons/fi';

const DropMenu = () => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(5);
    return (
        <>
            <button className='link-list' id='dropDown-menu' {...buttonProps}>
                بیش‌تر
                <FiChevronDown className='drop-down-sign' />
            </button>
            <div className={isOpen ? 'visible' : ''} role='menu'>
                    <ul className='drop-list-items'>
                    <li><a href='#'>وبلاگ</a></li>
                    <li><a href='#'>دریافت شماره شبا</a></li>
                    <li><a href='#'>سوالات متداول</a></li>
                    <li><a href='#'>اپلیکیشن</a></li>
                    <li><a href='#'>زرین‌بین</a></li>
                </ul>
            </div>
        </>
        
    );
};

export default DropMenu;