import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About'
import Cookies from './pages/Cookies';
import Profile from './pages/Profile';
import Cakes from './pages/Cakes';
import Deserts from './pages/Deserts';
import Headers from './components/common/Headers';
import Wantingred from './pages/Wantingredients';
import All from './pages/Allrecipes';
import Noingred from './pages/Noingredients';
import Login from './pages/Login';
import Footers from './components/common/Footers';
import Signup from './pages/signup';
import axios from "axios";



function App() {

const getFromBackEnd = async () => {
  const response = await axios.get("http://localhost:3000");
  return response.data;
};
  return (
    
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/deserts' element={<Deserts />} />
        <Route path='/Wantingredints' element={<Wantingred />} />
        <Route path='/Noingredints' element={<Noingred />} />
        <Route path='/all' element={<All />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footers/>
    </BrowserRouter>

  );

}

export default App;
