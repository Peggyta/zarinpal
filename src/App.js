import './App.css';
import {Route, Routes} from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import Developers from './pages/Developers';
import More from './pages/More';
import MyZarinPal from './pages/MyZarinPal';
import Price from './pages/Price';
import Products from './pages/Products';

function App() {
  return (
    <div>
        <Navbar />
      <Routes>
          <Route path="products" element={<Products />} />
          <Route path="price" element={<Price />} />
          <Route path="developers" element={<Developers />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="more" element={<More />} />
          <Route path="my-zarin-pal" element={<MyZarinPal />} />
      </Routes>
    </div>
  );
}

export default App;
