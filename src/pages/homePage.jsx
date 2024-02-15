import React, {useEffect} from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import GetRequest from "../helpers/getRequest";


function Homepage() {

  useEffect(()=>{
  GetRequest("recipes/all").then(res => {
  console.log("useEffect", res);
    localStorage.setItem('myRecipes',JSON.stringify(res) )
}
).catch(e => console.log(e))

 },[]);


  return (
    <div
      style={{
        backgroundImage: "url('https://foodislife.co.il/wp-content/uploads/2023/05/pistachio-macaroons-dessert-white-background-top-view.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px",
        color: "#FF69B4", // ייתכן שתרצה לשנות צבע הכתב לפי הדרישות שלך
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive" }}>
        SWEETIME
      </h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        {/* נותן סגנון יותר נקי ואטרקטיבי לכפתורים */}
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

        <Link to="/all">
          <Button type="button" className="recipeButton">
            Explore All Recipes
          </Button>
        </Link>

        <Link to="/Wantingredints">
          <Button type="button" className="recipeButton">
            Search by Ingredients
          </Button>
        </Link>

        <Link to="/Noingredints">
          <Button type="button" className="recipeButton">
            Search Without Ingredients
          </Button>
        </Link>
        <br /><br /><br />
        <Link to="/Login">
          <Button type="button" className="recipeButton">
            Login
          </Button>
        </Link>
        <Link to="/Signup">
        <Button type="button" className="recipeButton">
          Sign up
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
