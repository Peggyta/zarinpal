import React from 'react';
import '../pagesStyle/ContactUs.css';
//Image
import supportImg from '../images/support.jpg';
import { BsBell } from 'react-icons/bs';

const ContactUs = () => {
    return (
        <div className='contact-us-page'>
           <div className='contact-us-box'>
                <h3>تماس با ما </h3>
           </div>
           <div className='contact-info'>
                <div className='address-bar'>
                    <p className='address-title'>اطلاعات تماس</p>
                    <p><span>نشانی :</span> تهران، یوسف آباد، کوچه بیستم، پلاک ۶۱، واحد ۲</p>
                    <div className='phone-num'>
                        <div>
                            <p><span>تلفن:</span> ۴۱۲۳۹-۰۲۱ </p>
                        </div>
                        <div>
                            <p>۴۱۲۳۹   ۰۹۴۲-۶۰</p> 
                        </div>
                    </div>
                    <div className='postal-code'>
                        <div>
                            <p><span>کد پستی: </span>۱۴۳۱۹۶۵۳۷۱</p>
                        </div>
                        <div>
                            <p><span>فکس:</span> ۴۵۶۲۸۸۸۸-۰۲۱</p>
                        </div>
                    </div>
                    <p>
                        <span>ساعات کاری:</span>شنبه تا چهارشنبه از ساعت ۹ صبح الی ۵ بعد از ظهر.
                    </p>
                </div>
                <div className='map-address'>
                <div class="mapouter">
                    <div class="gmap_canvas">
                            <iframe width="640" height="370" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
                                src="https://maps.google.com/maps?width=696&amp;height=425&amp;hl=en&amp;q=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%DB%8C%D9%88%D8%B3%D9%81%20%D8%A2%D8%A8%D8%A7%D8%AF%D8%8C%20%DA%A9%D9%88%DA%86%D9%87%20%D8%A8%DB%8C%D8%B3%D8%AA%D9%85%D8%8C%20%D9%BE%D9%84%D8%A7%DA%A9%20%DB%B6%DB%B1%D8%8C%20%D9%88%D8%A7%D8%AD%D8%AF%20%DB%B2%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe><a href='https://maps-generator.com/'></a>
                        </div>
                    </div>
                </div>
           </div>
           <div className='tracking-section'>
                <div className='tracking-section-txt'>
                    <p>جهت پیگیری تراکنش‌های درگاه پرداخت خود، روی لینک روبرو کلیک کنید.</p>
                </div>
                <div className='tracking-section-btn'>
                    <a className='tracking-button' href='#'>پیگیری تراکنش</a>
                </div>     
           </div>
           <div className='support-sec'>
                <div>
                    <img src={supportImg} alt='support' />
                </div>
                <div className='send-ticket'>
                    <p className='enter-number'>جهت ارسال تیکت، لطفا شماره تلفن همراه خود را وارد نمایید.</p>
                    <input type='text' placeholder='شماره همراه' />
                    <div className='next-button'>
                        <button>مرحله بعدی</button>
                    </div>  
                </div>
           </div>
           <div className='bell'>
                <BsBell className='bell-icon' />
            </div>
        </div>
    );
};

export default ContactUs;