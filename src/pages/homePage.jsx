import React from 'react';
import { Button } from 'antd'; 
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

function Homepage() {
  return (
    <div style={{ backgroundImage: "url('https://www.tropri.co.il/media/big/8-%D7%99%D7%97-%D7%9E%D7%A7%D7%A8%D7%95%D7%9F-%D7%91%D7%98%D7%A2%D7%9E%D7%99%D7%9D.jpg')", width: "100%", height: "100%", objectFit: "cover" }}>
      <h1>SWEET TIME</h1>

      <div style={{ display: "flex", justifyContent: "flex-start", margin: "10px" }}>
        <div></div>
        
        {/* Link to 'all.jsx' page */}
        <Link to="/all">
          <Button type="button">
            for all the recipes on the site                  
          </Button>
        </Link>

        {/* External link example */}
        <Link to="/Wantingredints">
          <Button type="button">
            Search recipes according to desired products                  
          </Button>
        </Link>
        

        {/* External link example */}
        <Link to="/Noingredints">
          <Button type="button">
            Searching for a recipe that does not contain certain ingredients                  
          </Button>
        </Link>
        
      </div>
    </div>
  );
}

export default Homepage;
