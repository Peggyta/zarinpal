import React from 'react';
import { NavLink } from 'react-router-dom';
//Icons
import { BiArrowBack } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer>
            <div className='support-section'>
                <div><p>پشتیبانی ۲۴ ساعته، ۷ روز هفته</p>
                <span>|</span>
                <p>شماره تماس:</p>
                <span>۴۱۲۳۹-۰۲۱</span></div>
            </div>
            <div className='support-request'>
                <NavLink to='/contact-us' className='support-link'>
                    درخواست پشتیبانی<BiArrowBack /></NavLink>
            </div>
        </footer>
    );
};

export default Footer;