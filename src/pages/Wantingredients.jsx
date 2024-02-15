import React, { useEffect } from 'react';
import DropDown from '../components/basic/DropDown';
import GetRequest from '../helpers/getRequest';


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
      <p>i want</p>
      <DropDown 
       onChange={handleChange}
      /> 
      <p>i dont want</p>
      <DropDown/>
   </div>
  );
}

export default Wantingred;
