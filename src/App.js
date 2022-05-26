import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Collection, Home, Cart, Product } from './pages';

import Footer from './components/Footer'

import "swiper/css/bundle";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
