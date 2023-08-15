import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/homepage/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import FooterBar from './components/footer/FooterBar';
import Cart from './components/cart/Cart';
import Shop from './components/shop/Shop';
import ShopContextProvider from './components/context/ShopContext';

function App() {
  return (
    <div className="App">
      <Header />
      <ShopContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shopping' element={<Shop />} />
        </Routes>
      </ShopContextProvider>
      <FooterBar />
    </div>
  );
}

export default App;