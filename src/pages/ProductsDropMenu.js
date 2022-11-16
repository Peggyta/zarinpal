import React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
//Icons
import { FiChevronDown } from 'react-icons/fi';
//Style
import '../scss/ProductsDropMenu.css';

const ProductsDropMenu = () => {
    const { isOpen, itemProps, buttonProps } = useDropdownMenu(5);
    return (
        <div>
            <button className='link-list' id='products-button' {...buttonProps}>
                محصولات
                <FiChevronDown className='drop-down-sign' />
            </button>
            <div className={ isOpen ? 'products-menu': ''} role='menu'>
                <span className='products-first-col'>
                    <a href='#'{...itemProps[0]}>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                    </a>
                    <a href='#'{...itemProps[1]}>
                        <p>زرین‌لینک</p>
                        <p>لینک پرداخت در شبکه‌های اجتماعی</p>
                    </a>
                    <a href='#'{...itemProps[2]}>
                        <p>زرین‌پلاس</p>
                        <p>ابزار هوشمند سوددهی</p>
                    </a>
                </span>
                <span className='products-second-col'>
                    <a href='#'{...itemProps[3]}>
                        <p>زرین کارت طلایی</p>
                        <p>طلایی‌ترین کارت بانکی</p>
                    </a>
                    <a href='#'{...itemProps[4]}>
                        <p>تسهیم</p>
                        <p>درگاه پرداخت اشتراکی</p>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ProductsDropMenu;