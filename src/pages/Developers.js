import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../pagesStyle/Developers.css';
//Image & Icons
import { FiChevronDown } from 'react-icons/fi';
import { SlMagnifier } from 'react-icons/sl';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { MdPayment } from 'react-icons/md';
import labLogo from '../images/00000.png';
import systemsIcon from '../images/othersystems.png';
import hostIcon from '../images/hosting.png';
import joomlaIcon from '../images/joomla.png';
import storeIcon from '../images/store.png';
import wordpressIcon from '../images/wordpress.png';
import codeIcon from '../images/codes.png';
import scriptIcon from '../images/script.png';


const Developers = () => {
    const [navbar, setNavbar] = useState(false);
   
    const changeBackground = () => {
        if (window.scrollY > 550) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <div className='lab'>
                <div className={navbar ? 'visibleNav active' : 'visibleNav' }>
                    <div className='lab-logo'>
                        <NavLink to='/'>
                            <img src={labLogo} alt='logo' />
                        </NavLink>
                        <p>آزمایشگاه</p>  
                    </div>
                    <div className='lab-navbar-items'>
                        <ul className='lab-navbar-items'>
                            <li><NavLink to='/' className='lab-link'>زرین‌پال</NavLink></li>
                            <li><NavLink className='lab-link'>وبلاگ</NavLink></li>
                            <li><NavLink className='lab-link'>نمونه کدها</NavLink></li>
                            <li><NavLink className='lab-link'>افزونه های وردپرس</NavLink></li>
                            <li><NavLink className='lab-link'>افزونه های جوملا</NavLink></li>
                            <li><NavLink className='lab-link'>بیشتر
                                        <FiChevronDown className='drop-sign' />   
                            </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='zarinpal-lab'>
                    <p>ترکیب تجربه فنی و توسعه‌پذیری</p>
                    <h1>آزمایشگاه زرین‌پال</h1>
                    <div className='lab-input-container'>
                        <input className='lab-input' type='text' placeholder='جستجوی افزونه مورد نظر شما...'  />
                        <SlMagnifier className='lab-icon' />
                    </div>
                    
                </div>
            </div>
            <div className='extention-container'>
                <h2>دسته‌های افزونه‌ها</h2>
                <div className='extention-list'>
                    <div className='extention-items'>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={hostIcon} alt='host-icon' />
                                <p>اتوماسیون فروش هاستینگ (1) WHMCS </p>
                            </a>
                        </div>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={scriptIcon} alt='script-icon' />
                                <p>اسکریپت‌های آماده (6)</p>   
                            </a>
                        </div>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={joomlaIcon} alt='joomla-icon' />
                                <p> جوملا (14)</p>
                            </a>
                        </div>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={systemsIcon} alt='system-icon' />
                                <p> دیگر سیستم‌ها (16)</p> 
                            </a>
                        </div>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={storeIcon} alt='store-icon' />
                                <p>سیستم‌های فروشگاه ساز (10) </p>
                            </a>
                        </div>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={codeIcon} alt='code-icon' />
                                <p>نمونه کدها (26)</p>        
                            </a>
                        </div>
                        <div>
                            <a className='extention-link' href='#'>
                                <img src={wordpressIcon} alt='wordpress-icon' />
                                <p> وردپرس (16)</p>        
                            </a>
                        </div>     
                    </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='register-footer'>
                    <div className='footer-title'>
                        <MdPayment className='pay-icon' />
                        <h3>زرین‌پال، کیف‌پول الکترونیک و درگاه پرداخت ایمن کشور</h3>
                    </div>
                    <div className='footer-buttoms'>
                        <button>ثبت‌نام</button>
                        <button>ورود به زرین‌پال</button>
                    </div>
                </div>
                <div className='footer-list-title'>
                    <div className='footer-list-items'>
                        <div>
                            <ul>
                                <p className='footer-titles'>زرین‌پال</p>
                                <li>زرین‌کارت</li>
                                <li>اپلیکیشن</li>
                                <li>آزمایشگاه</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <p className='footer-titles'>ارتباط بیشتر</p>
                                <li>تماس با ما</li>
                                <li>قوانین و مقررات</li>
                                <li>حریم خصوصی</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <p className='footer-titles'>بیشتر بشناسید</p>
                                <li>تیم درجه یک</li>
                                <li>درباره زرین‌پال</li>
                                <li>سوالات متداول</li>
                            </ul>
                        </div>
                    </div>
                    <div className='news'>
                        <p>آخرین اخبار و اتفاقات ویژه در ایمیل شما،
                        فقط کافیست ایمیل خود را وارد کنید.
                        </p>
                        <div>
                            <input className='news-input' type='text' placeholder='آدرس ایمیل خود را وارد نمایید' />
                            <button>خبرنامه</button>
                        </div>
                        <p>* ما هم مثل شما از اسپم متنفریم،
                         فقط پیشنهادها و خبرهای ویژه را برای شما ارسال می‌کنیم
                        </p>
                    </div>
                </div>
                <div className='lab-social-media'>
                    <div className='copy-right'>
                        <p>  صاحب امتیاز تمامی تصاویر، مطالب موجود در وب‌سایت،   
                        <span> زرین‌پال </span> است.  لذا استفاده از آن باید با ذکر نام منبع صورت گیرد.  
                        </p>
                    </div>
                    <div className='lab-icon-list'>
                        <a href='#'><FaTelegramPlane className='lab-icons' /></a>
                        <a href='#'><FaLinkedinIn className='lab-icons' /></a>
                        <a href='#'><CgFacebook className='lab-icons' /></a>
                        <a href='#'><FaInstagram className='lab-icons' /></a>
                        <a href='#'><FaTwitter className='lab-icons' /></a>       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Developers;