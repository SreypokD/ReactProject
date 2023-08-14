import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/homepage/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import FooterBar from './components/footer/FooterBar';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <FooterBar/>
    </div>
  );
}

export default App;
