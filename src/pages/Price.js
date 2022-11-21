import React from 'react';
//Image & Icons
import PricePic from '../images/pricepic.jpg';
import { FiChevronDown } from 'react-icons/fi';

const Price = () => {
    return (
        <div className='price-container'>
           <div className='price-description'>
                <div className='price-image'>
                    <img src={PricePic} alt='image' />
                </div>
                <div className='price-description'>
                    <h3>تعرفه‌ها</h3>
                    <p>زرین‌‌پال با ارائه‌‌ی یک فرمول شفاف و منصفانه برای کارمزدها
                    ، امکانی فراهم کرده تا کاربران جدید، در ماه اول عضویت، تسویه‌‌حساب خود را به
                     صورت کاملا رایگان و بدون کسر کارمزد نهایی کنند. با این هدف که
                     در شروع فعالیت‌‌ کسب و کارها نقش حمایتی و در ادامه‌‌ی آن نقش
                     موثری داشته باشیم. این یعنی شروع یک بازی بُرد بُرد.
                     </p>
                </div>   
           </div>
           <div className='price-down-button'>
                <div></div>
                <FiChevronDown className='down-icon' />
           </div>
        </div>
    );
};

export default Price;