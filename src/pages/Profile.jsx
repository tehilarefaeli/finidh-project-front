import React from 'react';
import SimpleCard from '../components/basic/card';
import RecipeCard from '../components/basic/RecipeCard';

function Profile({ likedRecipes,getUserLikes,user }) {
  console.log({likedRecipes})

  if(!user){
   return  <div>Please login to view your profile</div>
  }
  return (
    <>
      <SimpleCard title='Profile' data='Im profile' size='small' />

      <div>
        {likedRecipes.length ? (
          likedRecipes.map((item) => {
            return <RecipeCard key={item.recipe_id}
             title={item?.recipe_name} img={item?.recipe_img} data={item} user={user} isLiked={true} getUserLikes={getUserLikes} />;
          })
        ) : (
          <p>You didn't like any recipe yet</p>
        )}
      </div>
    </>
  );
}

export default Profile;
