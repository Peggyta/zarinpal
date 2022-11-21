import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
//Components
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';
import Banner from './components/Banner';
import ContactUs from './pages/ContactUs';
import Developers from './pages/Developers';
import MyZarinPal from './pages/MyZarinPal';
import Price from './pages/Price';
import Products from './pages/Products';

function App() {
  return (
    <div className='App'>
      
      <Routes>
          <Route element={<WithoutNav />} >
            <Route path="developers" element={<Developers />} />
            <Route path="my-zarin-pal" element={<MyZarinPal />} />
          </Route>
          <Route element={<WithNav />} >
            <Route path="products" element={<Products />} />
            <Route path="price" element={<Price />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="/" exact={true} element={<Banner />} />
          </Route>
          
      </Routes>       
    </div>
  );
}

export default App;
