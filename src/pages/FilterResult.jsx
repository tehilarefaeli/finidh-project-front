import React from 'react';
import { useEffect } from 'react';
import GetRequest from '../helpers/getRequest';



function FilterResult() {

  const productsInRecipe = JSON.parse(localStorage.getItem('wantProducts'));
  const productsNotInRecipe = JSON.parse(localStorage.getItem('dontWantProducts'));
  const products = JSON.parse(localStorage.getItem('products'));

  const productsInRecipeIds = [];
  const productsNotInRecipeIds = [];
  

  productsInRecipe.forEach(productName => {
      const product = products.find(p => p.product_name === productName);
      if (product) {
        productsInRecipeIds.push(product.product_id);
      }
    });

    productsNotInRecipe.forEach(productName => {
      const product = products.find(p => p.product_name === productName);
      if (product) {
          productsNotInRecipeIds.push(product.product_id);
      }
    });

  //   useEffect(() => {
  //     GetRequest("recipes/recipeByParams", {
  //         productsInRecipeIds: productsInRecipeIds,
  //         productsNotInRecipeIds: productsNotInRecipeIds
  //     }).then(res => {
  //         console.log("useEffect", res);
  //     }).catch(e => console.log(e));
  // }, []);

  useEffect(() => {
    GetRequest(`recipes/recipeByParams/${productsInRecipeIds}/${productsNotInRecipeIds}`)
      .then(res => {
        console.log("useEffect", res);
      })
      .catch(e => console.log(e));
  }, []);


  return (
    <div className = "allrecipes">  
    {/* {recipes.length > 0 ? (
       Object.values(recipes).map((item) => {
        return(
         <PictureCard 
          title={item?.recipe_name}
          img={item?.recipe_img}
          data ={item}
          
         />)
      
    } )): (
      <p>Loading recipes...</p>
    )} */}
  </div>
  );
}

export default FilterResult;


