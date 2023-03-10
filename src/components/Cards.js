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
            <section className='card-section' id='card-num-three'>
                <div className='img-card-container-three'>
                    <img src={cardThree} alt='card image' />
                </div>
                <div className='card-container'>
                    <h2>زرین‌کارت</h2>
                    <h3>طلایی‌ترین کارتِ بانکی</h3>
                    <p>
                    زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب
                     و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار
                      برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود
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
            <section className='card-section' id='card-num-four'>
                <div className='card-container'>
                    <h2>تسهیم</h2>
                    <h3>درگاه پرداخت اشتراکی</h3>
                    <p>
                    تسهیم بهترین روش برای مدیریت مالی کسب‌
                     و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا
                      خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم
                      شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.
                    </p>
                    <div className='card-buttons'>
                        <button className='payment-button'>ساخت درگاه پرداخت</button>
                        <button className='know-more-button'>
                        بیش‌تر بدانید<BiArrowBack className='arrow-section' />
                        </button>
                    </div>
                </div>
                <div className='img-card-container-four'>
                    <img src={cardFour} alt='card image' />
                </div>
            </section>
            <section className='card-section' id='card-num-three'>
                <div className='img-card-container-five'>
                    <img src={cardFive} alt='card image' />
                </div>
                <div className='card-container' id='card-num-five'>
                    <h2>زرین‌پلاس</h2>
                    <h3>ابزار هوشمند سوددهی</h3>
                    <p>
                    زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده
                     است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن
                      ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود،
                      بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند
                      و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.
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