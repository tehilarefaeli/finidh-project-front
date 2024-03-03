import React from 'react';
import SimpleCard from '../components/basic/card';
import RecipeCard from '../components/basic/RecipeCard';
import './Profile.css';

function Profile({ likedRecipes, getUserLikes, user }) {
  console.log({ likedRecipes });

  if (!user) {
    return (
      <div className="login-message">
        <img src="https://touchfood.co.il/wp-content/uploads/2019/04/%D7%A7%D7%99%D7%A0%D7%95%D7%97%D7%99%D7%9D-%D7%9C%D7%A4%D7%A1%D7%97-Medium.jpg" alt="Cake" />
        <h2>You are not logged in
          <br></br>
          Log in and discover your favorite recipes!</h2>
        <p> Join the SWEETIME community and start baking</p>
        <a href="/login" className="button">Log in</a>
      </div>
    );
  }

  return (
    <>

      <div className="liked-recipes">
        {likedRecipes.length ? (
          likedRecipes.map((item) => {
            return (
              <RecipeCard
                key={item.recipe_id}
                title={item?.recipe_name}
                img={item?.recipe_img}
                data={item}
                user={user}
                isLiked={true}
                getUserLikes={getUserLikes}
              />
            );
          })
        ) : (
          <p>You didn't like any recipe yet</p>
        )}
      </div>
    </>
  );
}

export default Profile;
