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
                    <NavLink to='/contact-us' className='support-link'>
                    درخواست پشتیبانی<BiArrowBack className='support-arrow' /></NavLink>
                </div>
            </div>
            <div className='footer-section'>
                <div className='shortcut-section'>
                    <div>
                        <h4>محصولات</h4>
                        <NavLink>زرین‌لینک</NavLink>
                        <NavLink>درگاه پرداخت اینترنتی</NavLink>
                        <NavLink>زرین‌کارت</NavLink>
                        <NavLink>تسهیم</NavLink>
                    </div>
                    <div>
                        <h4>آشنایی با زرین‌پال</h4>
                        <NavLink>تعرفه‌ها</NavLink>
                        <NavLink>درباره ما</NavLink>
                        <NavLink>سوالات متداول</NavLink>
                        <NavLink>همکاری در فروش</NavLink>
                    </div>
                    <div>
                        <h4>ارتباط بیشتر</h4>
                        <NavLink>تماس با ما</NavLink>
                        <NavLink>قوانین و مقررات</NavLink>
                        <NavLink>حریم ‌خصوصی</NavLink>
                    </div>
                    <div>
                        <h4>منابع</h4>
                        <NavLink>دریافت شماره شبا</NavLink>
                        <NavLink>زرین‌بین</NavLink>
                        <NavLink>توسعه‌دهندگان</NavLink>
                        <NavLink>وبلاگ</NavLink>
                        <NavLink>سنجش رضایتمندی</NavLink>
                    </div>
                </div>
                <div className='social-media'>
                    <h4>زرین‌پال در شبکه‌های اجتماعی:</h4>
                    <div className='icon-section'>
                        <a><FaInstagram /></a>
                        <a><FaTwitter /></a>
                        <a><FaTelegramPlane /></a>
                        <a><FaLinkedinIn /></a>
                        <a><SiAparat /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;