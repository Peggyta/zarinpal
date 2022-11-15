import React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { FiChevronDown } from 'react-icons/fi';
import '../scss/Navbar.css';

const ProductsDropMenu = () => {
    const { isOpen, itemProps, buttonProps } = useDropdownMenu(5);
    return (
        <div>
            <button className='link-list' {...buttonProps}>
                محصولات
                <FiChevronDown className='drop-down-sign' />
            </button>
            <div className={ isOpen ? 'visible': ''} role='menu'>
                <div>
                    <a href='#'{...itemProps[0]}>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                    </a>
                    <a href='#'{...itemProps[1]}>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                    </a>
                    <a href='#'{...itemProps[2]}>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                    </a>
                </div>
                <div>
                    <a href='#'{...itemProps[3]}>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                    </a>
                    <a href='#'{...itemProps[4]}>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductsDropMenu;