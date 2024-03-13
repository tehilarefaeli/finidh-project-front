import React, { useState } from 'react';
import PostRequest from '../helpers/postRequest';
import BasicInput from '../components/basic/BasicInput';
import BasicButton from '../components/basic/BasicButton'

import './AddRecipe.css'
function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    category_id: '',
    recipe_name: '',
    recipe_rating:0,
    recipe_prepare: '',
    rating_count:0,
    recipe_img: ''
  
});

  const handleChange = (event) => {
    console.log({event});
    const { name, value } = event.target;
    console.log("name",name);
    console.log("value",value);
    setRecipeData({
      ...recipeData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform post request with recipeData
    PostRequest('recipes/addrecipe', recipeData); // Example endpoint, replace with your API endpoint
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
      <div className='add-style'>
          <label htmlFor="category_id">Category ID:</label>
          <input
            type="text"
            className='add-input'
          //  id="category_id"
            name="category_id"
           // value={recipeData.category_id}
            onChange={handleChange}
          />
        </div>
        <div className='add-style'>
          <label htmlFor="recipe_name">Recipe Name:</label>
          <input
            className='add-input'
            type="text"
            //id="recipe_name"
            name="recipe_name"
          //  value={recipeData.recipe_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_prepare">Recipe Preparation:</label>
          <textarea
          //  id="recipe_prepare"
            name="recipe_prepare"
          //  value={recipeData.recipe_prepare}
            onChange={handleChange}
          />
        </div>
        <div className='add-style'>
          <label htmlFor="recipe_img">Recipe Image URL:</label>
          <input
            className='add-input'
            type="text"
          //  id="recipe_img"
            name="recipe_img"
          //  value={recipeData.recipe_img}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
