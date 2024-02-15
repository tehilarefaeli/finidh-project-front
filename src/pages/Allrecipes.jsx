import React, { useEffect, useState } from 'react';
import './Allrecipes.css';
import GetRequest from "../helpers/getRequest";
import PictureCard from '../components/basic/pictureCard';

function AllRecipes() {


 const recipes = JSON.parse(localStorage.getItem('myRecipes')) 



  return (
    <div className = "allrecipes">  
      {recipes.length > 0 ? (
         Object.values(recipes).map((item) => {
          return(
           <PictureCard 
            title={item?.recipe_name}
            img={item?.recipe_img}
            data ={item}
            
           />)
        
      } )): (
        <p>Loading recipes...</p>
      )}
    </div>
  );
}

export default AllRecipes;
