import React, {useState} from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Footer from './Footer';
import { Outlet } from 'react-router';

export default () => {
    const[isClicked, setIsClicked] = useState(false);
    return (
        <>
            <Navbar isClicked={isClicked} setIsClicked={setIsClicked} />
            {isClicked ? <Menu /> : null} 
            <Outlet />
            <Footer />
        </>
    );
};