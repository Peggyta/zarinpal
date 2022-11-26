import React from 'react';
//Images
import zarinLogo from '../images/logo-white.svg';

const MyZarinPal = () => {
    return (
        <div className='login-container-main'>
            <div className='login-container'>
                <div className='register-login'>
                    <div className='logo-login'>
                        <div>
                            <img src={zarinLogo} alt='logo' />
                        </div>
                    
                        <div>
                            <a href='#'>ورود با رمزینه</a>
                        </div>
                    </div>
                    <div className='login-descript'>
                        <h3>ورود به زرین‌پال</h3>
                        <p>برای استفاده از خدمات زرین‌پال، وارد حساب کاربری خود شوید.
                            در صورت نداشتن حساب کاربری ثبت‌‌نام کنید.
                        </p>
                        <div>
                            <input type='text' placeholder='شماره همراه یا ایمیل' />
                        </div>
                        <div>
                            <button>تایید و ادامه</button>
                        </div>
                    </div>
                </div>
                <div className='carousel'>
                    
                </div>
            </div>
        </div>
    );
};

export default MyZarinPal;