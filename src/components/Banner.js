import React from 'react';
//Components
import Cards from './Cards';
import Features from './Features';
//Style
import '../scss/Banner.css';
//Image & Icons
import bannerImg from '../images/home.svg';
import { FiChevronDown } from 'react-icons/fi';

const Banner = () => {
    return (
        <>
        <main>
            <div className='banner'>
                <div className='banner-content'>
                    <h3>بیش از ۱۲ سال</h3>
                    <h3>انتخاب مطمئنِ کسب و کارهای آنلاین</h3>
                    <p>زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک
                         را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.</p>
                    <div className='button-container'>
                        <button className='register'>ثبت‌نام</button>
                        <button className='login'>ورود</button>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='banner' />
                </div>
            </div>
            <div className='go-down-button'>
                <div></div>
                <FiChevronDown className='go-down-icon' />
            </div>
        </main>
            <Cards />
            <Features />
        </>
        
    );
};

export default Banner;