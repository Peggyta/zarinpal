import React from 'react';
import '../pagesStyle/Price.css';
//Components
import StartBox from '../components/StartBox';
//Image & Icons
import PricePic from '../images/pricepic.jpg';
import { FiChevronDown } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import { BiCaretLeft } from 'react-icons/bi';


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
                    <div className='grid-item'> <span>۱٪</span> تا سقف <span>۳۰۰۰</span> تومان به ازای هر تراکنش</div>
                    <div className='grid-item'>زرین‌‌لینک</div>
                    <div className='grid-item'><span>۲۰۰ </span>تومان به ازای هر تراکنش از پرداخت‌‌کننده </div>
                    <div className='grid-item'>تسویه‌‌حساب زرین‌‌کارت</div>
                    <div className='grid-item'> <span>۰.۵٪</span> تا سقف <span>۲۰۰۰</span> تومان به ازای هر تراکنش</div>
                    <div className='grid-item'>تسویه‌حساب در سه‌شنبه‌های طلایی</div>
                    <div className='grid-item'>رایگان</div>
                </div>
                <div className='contact-box'>
                    <div className='contact-us-container'>
                        <h3>کسب‌وکارهای بزرگ</h3>
                        <p>چنان‌‌چه تراکنش‌‌های شما،
                        از سقف ۱۰۰ تراکنش در روز بیش‌‌تر است، پیشنهاد می‌‌کنیم
                        این مورد را در صفحه‌‌ی زیر، با ما در میان بگذارید
                        ، تا جهت ارائه‌‌ی موثرترین راه‌‌کار، با شما تماس بگیریم.
                        </p>
                        <button className='contact-button'>
                            تماس با ما
                            <BiArrowBack className='arrow-contact' />
                        </button>
                    </div>
                </div>
                
           </div>
           <div className='more-description'>
                    <h3>توضیحات بیش‌‌تر را این‌‌جا بخوانید:</h3>
                    <h4>تعرفه‌های فوق منوط به ثبت کد مالیاتی و نماد اعتماد می‌باشد.</h4>
                    <p>
                        <BiCaretLeft className='left-arrow' />
                        پس از هر تراکنش موفق، بلافاصله کارمزد آن محاسبه
                        و کسر خواهد شد و موجودی قابل تسویه،
                        حداکثر یک روز بعد، تا ساعت ۱۷ به حساب پذیرنده واریز می‌‌شود.
                    </p>
                    <p>
                        <BiCaretLeft className='left-arrow' />
                        فرآیند تسویه‌‌حساب پذیرندگان در روزهای تعطیل رسمی
                        ، مطابق با فرآیند پرداخت‌‌یاری، به روز پس از تعطیلی موکول می‌‌شود.
                    </p>
                    <p>
                        <BiCaretLeft className='left-arrow' />
                        در هر تراکنش با زرین‌لینک،
                        مبلغ ۲۰۰ تومان به عنوان کارمزد از شخص پرداخت‌کننده کسر خواهد شد.
                    </p>
                </div>
           <StartBox />
        </div>
        </>
        
    );
};

export default Price;