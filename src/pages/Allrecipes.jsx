import React, { useEffect, useState } from 'react';
import './Allrecipes.css';
import GetRequest from '../helpers/getRequest';
import RecipeCard from '../components/basic/RecipeCard';

function AllRecipes({ user, likes, getUserLikes,recipes }) {

  return (
    <div className='allrecipes'>
      {recipes.length > 0 ? (
       (recipes).map((item) => {
          const isLiked = likes.includes(item.recipe_id);
          return <RecipeCard key={item.recipe_id} title={item?.recipe_name} img={item?.recipe_img} data={item} 
          user={user} isLiked={isLiked} getUserLikes={getUserLikes}/>;
        })
      ) : (
        <p>Loading recipes...</p>
      )}
    </div>
  );
}

export default AllRecipes;
