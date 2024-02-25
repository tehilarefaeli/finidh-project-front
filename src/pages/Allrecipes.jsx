import React, { useEffect, useState } from 'react';
import './Allrecipes.css';
import GetRequest from "../helpers/getRequest";
import RecipeCard from '../components/basic/RecipeCard';

function AllRecipes({user}) {


 const recipes = JSON.parse(localStorage.getItem('myRecipes')) 



  return (
    <div className = "allrecipes">  
      {recipes.length > 0 ? (
         Object.values(recipes).map((item) => {
          return(
           <RecipeCard 
            title={item?.recipe_name}
            img={item?.recipe_img}
            data ={item}
            user={user}
           />)
        
      } )): (
        <p>Loading recipes...</p>
      )}
    </div>
  );
}

export default AllRecipes;
