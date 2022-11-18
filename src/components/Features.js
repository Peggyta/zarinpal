import React from 'react';
//Icons
import { MdCallSplit } from "react-icons/md";
import { MdHeadsetMic } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const Features = () => {
    return (
        <article className='features'>
            <div className='definition'>
                <h3>ویژگی‌های درگاه پرداخت زرین‌پال</h3>
                <p>درگاه پرداخت اینترنتی زرین‌پال،
                امکان مدیریت تراکنش‌های مالی در
                بستر وب را به راحتی امکان‌پذیر می‌کند
                و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه،
                باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
                </p>
            </div>
            <div className='feature-list'>
                <div className='feature first-feature'>
                    <MdOutlineCheckCircleOutline />
                    <h4>ضمانتِ پرداخت</h4>
                </div>
                <p>
                درگاه پرداخت زرین‌پال،
                تجربه‌ی پرداخت اینترنتی آسان،
                سریع و امن را به مشتریان کسب
                و کارهای آنلاین هدیه می‌دهد.
                </p>
            </div>
            <div className='feature-list'>
                <div className='feature second-feature'>
                    <MdCallSplit />
                    <h4>مسیردهی هوشمند</h4>
                </div>
                <p>
                استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف،
                باعث می‌شود کاربران به بهترین
                درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند.
                </p>
            </div>
            <div className='feature-list'>
                <div className='feature third-feature'>
                    <MdHeadsetMic />
                    <h4>پشتیبانی ۲۴/۷</h4>
                </div>
                <p>
                هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال،
                 آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.
                </p>
            </div>
            <div className='feature-list'>
                <div className='feature fourth-feature'>
                    <MdHeadsetMic />
                    <h4>امنیتِ پرداخت</h4>
                </div>
                <p>
                درگاه امن زرین‌پال، ضمانتی برای امنیت
                اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.
                </p>
            </div>
        </article>
    );
};

export default Features;