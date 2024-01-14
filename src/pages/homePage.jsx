import React from 'react';

function Homepage() {
  return (
    <div style={{ backgroundImage: "url('/assets/images/backgroundHp.jpg')", width: "100%", height: "100%", objectFit: "cover" }}>
      <h1>SWEET TIME</h1>

      <div style={{ display: "flex", justifyContent: "flex-start", margin: "10px" }}>
        <a href="https://www.google.com">
          <button>for all the recipes on the site</button>
        </a>
        <a href="https://www.google.com">
          <button>Search recipes according to desired products</button>
        </a>
        <a href="https://www.google.com">
          <button>Searching for a recipe that does not contain certain ingredients</button>
        </a>
      </div>
    </div>
  );
}

export default Homepage;


