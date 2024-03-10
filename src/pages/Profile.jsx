import React from 'react';
import SimpleCard from '../components/basic/card';
import RecipeCard from '../components/basic/RecipeCard';
import './Profile.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

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
          <div className="no-liked-recipes">
            <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive" }}>
              SWEETIME
            </h1>
            <p>You don't have any recipes saved yet
              <br></br> search the site for recipes for you </p>
            <Link to="/all">
              <Button type="button" className="recipeButton">
                All Recipes
              </Button>
            </Link>
          </div>
        )}
      </div>
      <style>
        {`
            .recipeButton {
              width: 300px;
              height: 50px;
              text-align: center;
              font-size: 20px;
              background-color: rgb(184,183,93);
              color: white;
              border: none;
              border-radius: 10px;
              cursor: pointer;
            }
            .recipeButton:hover {
              background-color: rgb(238,236,183);
            .recipeButton:hover {
             color: black;
            }
          `}
      </style>
    </>
  );
}

export default Profile;

