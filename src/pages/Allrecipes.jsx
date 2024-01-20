import React, { useEffect, useState } from 'react';
import GetRequest from "../helpers/getRequest";


function AllRecipres() {
 // const recipes = GetRequest("recipies/all")
 const [recipes,setrecipes] = useState();
  useEffect(()=>{
  GetRequest("recipies/all").then(res => {
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
