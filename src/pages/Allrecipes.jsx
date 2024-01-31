import React, { useEffect, useState } from 'react';
import './Allrecipes.css';
import GetRequest from "../helpers/getRequest";
import PictureCard from '../components/basic/pictureCard';

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

function AllRecipres() {
 // const recipes = GetRequest("recipes/all")
 const [recipes,setrecipes] = useState();
  useEffect(()=>{
  GetRequest("recipes/all").then(res => {
  console.log("useEffect", res);
  setrecipes(res)
}
).catch(e => console.log(e))

 },[]);


  return (
    <div className = "allrecipes">  
      {recipes.length > 0 ? (
         Object.values(recipes).map((item) => {
          return(
           <PictureCard 
            title={item?.recipe_name}
            data={item?.recipe_img}
           />)
        
      } )): (
        <p>Loading recipes...</p>
      )}
    </div>
  );
}
}
export default AllRecipes;
