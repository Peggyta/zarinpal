import React from 'react';
import { NavLink } from 'react-router-dom';
//Image & Icons
import { FiChevronDown } from 'react-icons/fi';
import { SlMagnifier } from 'react-icons/sl';
import labLogo from '../images/00000.png';

const Developers = () => {
    return (
        <>
            <div className='lab'>
                <div className='lab-navbar'>
                    <div className='lab-logo'>
                        <img src={labLogo} alt='logo' />
                    </div>
                    <div className='lab-navbar-items'>
                        <ul>
                            <li><NavLink>زرین‌پال</NavLink></li>
                            <li><NavLink>وبلاگ</NavLink></li>
                            <li><NavLink>نمونه کدها</NavLink></li>
                            <li><NavLink>افزونه های وردپرس</NavLink></li>
                            <li><NavLink>افزونه های جوملا</NavLink></li>
                            <li><NavLink>بیشتر
                                        <FiChevronDown />   
                            </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='zarinpal-lab'>
                    <p>ترکیب تجربه فنی و توسعه‌پذیری</p>
                    <h1>آزمایشگاه زرین‌پال</h1>
                    <div>
                        <input type='text' placeholder='جستجوی افزونه مورد نظر شما...'  />
                        <SlMagnifier />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Developers;