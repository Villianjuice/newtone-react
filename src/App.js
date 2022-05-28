import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Collection, Home, Cart, Product } from './pages';
import Footer from './components/Footer';
import Header from './components/Header';
import { fetchItems } from './redux/items/itemsSlice';

import './App.css';
// import 'swiper/css/bundle';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
