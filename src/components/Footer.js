import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Footer.css';
//Icons
import { BiArrowBack } from 'react-icons/bi';
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            <div className='support-container'>
                <div className='support-section'>
                    <p>پشتیبانی ۲۴ ساعته، ۷ روز هفته</p>
                    <span className='text-divider'>|</span>
                    <p className='phone-text'>شماره تماس:</p>
                    <span className='support-phone'>۰۲۱-۴۱۲۳۹</span>
                </div>
                <div className='support-request'>
                    <div><NavLink to='/contact-us' className='support-link'>
                    درخواست پشتیبانی </NavLink></div>
                    <div className='support-req-icon'><BiArrowBack className='support-arrow' /></div>
                </div>
            </div>
            <div className='footer-section'>
                <div className='shortcut-section'>
                    <div className='shortcut-list'>
                        <h4>محصولات</h4>
                        <NavLink className='footer-links'>زرین‌لینک</NavLink>
                        <NavLink className='footer-links'>درگاه پرداخت اینترنتی</NavLink>
                        <NavLink className='footer-links'>زرین‌کارت</NavLink>
                        <NavLink className='footer-links'>تسهیم</NavLink>
                    </div>
                    <div className='shortcut-list'>
                        <h4>آشنایی با زرین‌پال</h4>
                        <NavLink className='footer-links'>تعرفه‌ها</NavLink>
                        <NavLink className='footer-links'>درباره ما</NavLink>
                        <NavLink className='footer-links'>سوالات متداول</NavLink>
                        <NavLink className='footer-links'>همکاری در فروش</NavLink>
                    </div>
                    <div className='shortcut-list'>
                        <h4>ارتباط بیشتر</h4>
                        <NavLink className='footer-links'>تماس با ما</NavLink>
                        <NavLink className='footer-links'>قوانین و مقررات</NavLink>
                        <NavLink className='footer-links'>حریم ‌خصوصی</NavLink>
                    </div>
                    <div className='shortcut-list'>
                        <h4>منابع</h4>
                        <NavLink className='footer-links'>دریافت شماره شبا</NavLink>
                        <NavLink className='footer-links'>زرین‌بین</NavLink>
                        <NavLink className='footer-links'>توسعه‌دهندگان</NavLink>
                        <NavLink className='footer-links'>وبلاگ</NavLink>
                        <NavLink className='footer-links'>سنجش رضایتمندی</NavLink>
                    </div>
                </div>
                <div className='social-media'>
                    <h4>زرین‌پال در شبکه‌های اجتماعی:</h4>
                    <div className='icon-section'>
                        <a href='#'><FaInstagram className='footer-icons' /></a>
                        <a href='#'><FaTwitter className='footer-icons' /></a>
                        <a href='#'><FaTelegramPlane className='footer-icons' /></a>
                        <a href='#'><FaLinkedinIn className='footer-icons' /></a>
                        <a href='#'><SiAparat className='footer-icons' /></a>
                    </div>
                </div>
            </div>
            <div className='copy-right-footer'>
                <span>©</span>
                <p> ‌‌زرین‌پال ۱۴۰۱-۱۳۸۹</p>    
            </div>
        </footer>
    );
};

export default Footer;