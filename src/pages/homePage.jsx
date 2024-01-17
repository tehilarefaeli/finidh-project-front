import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


function Homepage() {
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
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "3rem", fontWeight: "bold" }}>SWEETIME</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        {/* Link to 'all.jsx' page */}
        <Link to="/all">
          <Button type="button" style={{ width: "auto" }}>
            for all the recipes on the site
          </Button>
        </Link>

        {/* External link example */}
        <Link to="/Wantingredints">
          <Button type="button" style={{ width: "auto" }}>
            Search recipes according to desired products
          </Button>
        </Link>

        {/* External link example */}
        <Link to="/Noingredints">
          <Button type="button" style={{ width: "auto" }}>
            Searching for a recipe that does not contain certain ingredients
          </Button>
        </Link>
        <br></br>
        <Link to="/Login">
          <Button type="button" style={{ width: "auto" }}>
            Login
          </Button>
          <br></br>
          <Button>Guest </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;