import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Collection, Home } from './pages';

import "swiper/css/bundle";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
      </Routes>
    </div>
  );
}

export default App;
