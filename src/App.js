import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Cookies from './pages/Cookies';
import Profile from './pages/Profile';
import Cakes from './pages/Cakes';
import Deserts from './pages/Deserts';
import Headers from './components/common/Headers';
import Wantingred from './pages/Wantingredients';
import All from './pages/Allrecipes';
//import Noingred from './pages/Noingredients';
import Login from './pages/Login';
import Footers from './components/common/Footers';
import Signup from './pages/signup';
import Recipe from './pages/recipe';
import FilterResult from './pages/FilterResult';
import GetRequest from './helpers/getRequest';

function App() {
  const [user, setUser] = useState();
  const [likes, setLikes] = useState([]);
  const recipes = JSON.parse(localStorage.getItem('myRecipes'));

  console.log({likes,recipes})
  const likedRecipes = recipes.filter( recipe => likes.includes(recipe.recipe_id))

  console.log(likes);

  const getUserLikes = (email) =>{
    GetRequest('recipes/likes/'+user.email).then(value =>{
      setLikes(value)
    })
  }

  useEffect(()=>{
    if( user?.email){
      getUserLikes(user.email)
    }

  },[user?.email])

  return (
    <BrowserRouter>
      <Headers user={user}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile likedRecipes={likedRecipes} getUserLikes={getUserLikes} user={user}/>} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/deserts' element={<Deserts />} />
        <Route path='/Wantingredints' element={<Wantingred />} />
        <Route path='/all' element={<All user={user} likes={likes} getUserLikes={getUserLikes} recipes={recipes}/>} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/Login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/FilterResult' element={<FilterResult />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
