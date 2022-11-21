import React from 'react';
import '../pagesStyle/Price.css';
//Components
import StartBox from '../components/StartBox';
//Image & Icons
import PricePic from '../images/pricepic.jpg';
import { FiChevronDown } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';


const Price = () => {
    return (
        <>
        <div className='price-container'>
           <div className='price-description'>
                <div className='price-image'>
                    <img src={PricePic} alt='image' />
                </div>
                <div className='price-text-content'>
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
           <div className='table-title'>
                <h3>تعرفه‌‌ها در زرین‌‌پال</h3>
           </div>
           <div className='price-list'>
                <div className='price-grid-table'>
                    <div className='grid-item'>تسویه‌‌حساب در ماه اول‌</div>
                    <div className='grid-item'>رایگان</div>
                    <div className='grid-item'>تسویه‌حساب به حساب بانکی</div>
                    <div className='grid-item'>۱٪ تا سقف ۳۰۰۰تومان به ازای هر تراکنش</div>
                    <div className='grid-item'>زرین‌‌لینک</div>
                    <div className='grid-item'>۲۰۰تومان به ازای هر تراکنش از پرداخت‌‌کننده</div>
                    <div className='grid-item'>تسویه‌‌حساب زرین‌‌کارت</div>
                    <div className='grid-item'>۰.۵٪ تا سقف ۲۰۰۰ تومان به ازای هر تراکنش</div>
                    <div className='grid-item'>تسویه‌حساب در سه‌شنبه‌های طلایی</div>
                    <div className='grid-item'>رایگان</div>
                </div>
                <div className='contact-us-container'>
                    <h3>کسب‌وکارهای بزرگ</h3>
                    <p>چنان‌‌چه تراکنش‌‌های شما،
                        از سقف ۱۰۰ تراکنش در روز بیش‌‌تر است، پیشنهاد می‌‌کنیم
                        این مورد را در صفحه‌‌ی زیر، با ما در میان بگذارید
                        ، تا جهت ارائه‌‌ی موثرترین راه‌‌کار، با شما تماس بگیریم.
                    </p>
                    <button className='contact-button'>
                        تماس با ما
                        <BiArrowBack />
                    </button>
                </div>
           </div>
           <StartBox />
        </div>
        </>
        
    );
};

export default Price;