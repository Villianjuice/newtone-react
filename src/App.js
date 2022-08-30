import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import { Collection, Home, Cart, Product, Auth } from './pages';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Collection = lazy(() => import('./pages/Collection'));
const Auth = lazy(() => import('./pages/Auth'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
