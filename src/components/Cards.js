import React from 'react';
import '../scss/Cards.css';
//Images & Icons
import { BiArrowBack } from 'react-icons/bi';
import cardOne from '../images/s1.jpg';
import cardTwo from '../images/s2.jpg';
import cardThree from '../images/s3.jpg';
import cardFour from '../images/s4.jpg';
import cardFive from '../images/s5.jpg';

const Cards = () => {
    return (
        <>
            <section className='card-section'>
                <div className='img-card-container'>
                    <img src={cardOne} alt='card image' />
                </div>
                <div className='card-container'>
                    <h2>درگاه پرداخت اینترنتی</h2>
                    <h3>مهندسی شده برای رشد و فروش بیش‌تر</h3>
                    <p>درگاه پرداخت زرین‌پال، با اتصالِ 
                    همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و
                     مطمئن‌ترین درگاه
                     بانکی منتقل می‌کند
                     و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود.</p>
                <div className='card-buttons'>
                    <button className='payment-button'>ساخت درگاه پرداخت</button>
                    <button className='know-more-button'>
                    بیش‌تر بدانید<BiArrowBack className='arrow-section' />
                    </button>
                </div>
            </div>
            </section>
            <section className='card-section'>
                <div className='card-container'>
                    <h2>زرین‌لینک</h2>
                    <h3>پرداخت در شبکه‌های اجتماعی</h3>
                    <p>
                    زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع،
                     باعث افزایش فروش محصولات و خدمات،
                      از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود.
                    </p>
                    <div className='card-buttons'>
                        <button className='payment-button'>ساخت درگاه پرداخت</button>
                        <button className='know-more-button'>
                        بیش‌تر بدانید<BiArrowBack className='arrow-section' />
                        </button>
                    </div>
                </div>
                <div className='img-card-container-two'>
                    <img src={cardTwo} alt='card image' />
                </div>
            </section>
            <section className='card-section'>
                <div className='img-card-container-three'>
                    <img src={cardThree} alt='card image' />
                </div>
                <div className='card-container'>
                    <h2>زرین‌کارت</h2>
                    <h3>طلایی‌ترین کارتِ بانکی</h3>
                    <p>
                    زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب
                     و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود
                      فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی
                      و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.
                    </p>
                <div className='card-buttons'>
                    <button className='payment-button'>ساخت درگاه پرداخت</button>
                    <button className='know-more-button'>
                    بیش‌تر بدانید<BiArrowBack className='arrow-section' />
                    </button>
                </div>
            </div>
            </section>
        </>
        
        
    );
};

export default Cards;