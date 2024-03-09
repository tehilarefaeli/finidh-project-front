import React, { useState } from 'react';
import PutRequest from '../helpers/putRequest';

function UpdateRecipe() {
  const [recipeData, setRecipeData] = useState({
    category_id: '',
    recipe_name: '',
    recipe_rating:0,
    recipe_prepare: '',
    rating_count:0,
    recipe_img: ''
  
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform post request with recipeData
    const recipename = recipeData.recipe_name;
    PutRequest(`recipes/updaterecipe/${recipename}`, recipeData);
  };

  return (
    <div>
      <h2>Update Recipe (not update recipe name )</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="category_id">Category ID:</label>
          <input
            type="text"
            id="category_id"
            name="category_id"
            value={recipeData.category_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_name">Recipe Name:</label>
          <input
            type="text"
            id="recipe_name"
            name="recipe_name"
            value={recipeData.recipe_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_prepare">Recipe Preparation:</label>
          <textarea
            id="recipe_prepare"
            name="recipe_prepare"
            value={recipeData.recipe_prepare}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_img">Recipe Image URL:</label>
          <input
            type="text"
            id="recipe_img"
            name="recipe_img"
            value={recipeData.recipe_img}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateRecipe;
