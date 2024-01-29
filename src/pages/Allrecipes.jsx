import React, { useEffect, useState } from 'react';
import GetRequest from "../helpers/getRequest";


function AllRecipres() {
 // const recipes = GetRequest("recipes/all")
 const [recipes,setrecipes] = useState();
  useEffect(()=>{
  GetRequest("recipes/all").then(res => {
  console.log("useEffect", res);
  setrecipes(res)
}
).catch(e => console.log(e))

 },[]);


  return (
    <div>
      {recipes && recipes[0]?.recipe_name}
    </div>
  );
}

export default AllRecipres;
