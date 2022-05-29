import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Collection, Home, Cart, Product, Auth } from './pages';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
