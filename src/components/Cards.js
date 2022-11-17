import React from 'react';
//Images & Icons
import { BiArrowBack } from 'react-icons/bi';
import cardOne from '../images/s1.jpg';
import cardTwo from '../images/s2.jpg';
import cardThree from '../images/s3.jpg';
import cardFour from '../images/s4.jpg';
import cardFive from '../images/s5.jpg';

const Cards = () => {
    return (
        <section>
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
                        <button className='know-more-button'>بیش‌تر بدانید</button>
                     </div>
            </div>
        </section>
    );
};

export default Cards;