import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About'
import Cookies from './pages/Cookies';
import Profile from './pages/Profile';
import Cakes from './pages/Cakes';
import Deserts from './pages/Deserts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/deserts' element={<Deserts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
