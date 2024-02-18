import React, { useEffect } from 'react';
import './Wantingredients.css'
import DropDown from '../components/basic/DropDown';
import GetRequest from '../helpers/getRequest';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';



function Wantingred() {
  useEffect(()=>{
    GetRequest("products/all").then(res => {
    console.log("useEffect", res);
      localStorage.setItem('products',JSON.stringify(res) )
  }
  ).catch(e => console.log(e))
  
   },[]);

   const handleChange = (value) => {
    console.log(`change: ${value}`);
  };
  
  
   

  return (
    
    
      <div>
        <div>
          <p>i want</p>
          <DropDown onChange={handleChange} />
          <p>i dont want</p>
          <DropDown />
        </div>
  
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <Link to="/FilterResult">
            <Button type="button" className="rButton">
              We will find for you the winner recipt!
            </Button>
          </Link>
        </div>
      </div>
    
    
  );
  


}


export default Wantingred;
