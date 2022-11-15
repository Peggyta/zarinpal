import React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { FiChevronDown } from 'react-icons/fi';

const ProductsDropMenu = () => {
    const { isOpen, itemProps, buttonProps } = useDropdownMenu(5);
    return (
        <div>
            <button className='link-list' {...buttonProps}>
                محصولات
                <FiChevronDown className='drop-down-sign' />
            </button>
            <div className={ isOpen ? 'products-menu': ''}>
                <div>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ProductsDropMenu;