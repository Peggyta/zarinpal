import './App.css';
import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import ContactUs from './pages/ContactUs';
import Developers from './pages/Developers';
import MyZarinPal from './pages/MyZarinPal';
import Price from './pages/Price';
import Products from './pages/Products';

function App() {
  const[isClicked, setIsClicked] = useState(false);
  return (
    <div className='App'>
        <Navbar isClicked={isClicked} setIsClicked={setIsClicked} />
        {isClicked ? <Menu /> : null}
      <Routes>
          <Route path="products" element={<Products />} />
          <Route path="price" element={<Price />} />
          <Route path="developers" element={<Developers />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="my-zarin-pal" element={<MyZarinPal />} />
          <Route path="/" exact={true} element={<Banner />} />
      </Routes>
    </div>
  );
}

export default App;
