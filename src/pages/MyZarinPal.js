import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css?raw";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import '../pagesStyle/MyZarinPal.css';
//Images
import zarinLogo from '../images/logo-white.svg';
import slideOne from '../images/slide1.jpg';
import slideTwo from '../images/slide2.jpg';
import { BsBell } from 'react-icons/bs';
const AutoplaySlider = withAutoplay(AwesomeSlider);   
const MyZarinPal = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth > 990);
    const updateMedia = () => {
        setIsMobile(window.innerWidth > 990);
    };
    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia)
    });
    return (
        <div className='login-container-main'>
            <div className='login-container'>
                <div className='register-login'>
                    <div className='logo-login'>
                        <div>
                            <NavLink to="/">
                                <img className='logo-pic-login' src={zarinLogo} alt='logo' />
                            </NavLink>
                        </div>
                    
                        <div className='login-link'>
                            <a href='#'>ورود با رمزینه</a>
                        </div>
                    </div>
                    <div className='zarin-login-setion'>
                        <h3>ورود به زرین‌پال</h3>
                        <p>برای استفاده از خدمات زرین‌پال، وارد حساب کاربری خود شوید.
                            در صورت نداشتن حساب کاربری ثبت‌‌نام کنید.
                        </p>
                        <div className='zarin-input-section'>
                            <input type='text' placeholder='شماره همراه یا ایمیل' />
                        </div>
                        <div className='continue-button'>
                            <button>تایید و ادامه</button>
                        </div>
                    </div>
                </div>
                {isMobile ? (
                <AutoplaySlider className='img-slider'
                    play={true}
                    cancelOnInteraction={false} 
                    interval={5000}
                    organicArrows={false}
                    bullets= {false}   
                >
                    <div data-src={slideOne} />
                    <div data-src={slideTwo} />
                </AutoplaySlider>) : ''}
            </div>
            <div className='bell'>
                <BsBell className='bell-icon' />
            </div>
        </div>
    );
};

export default MyZarinPal;