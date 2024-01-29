import React, { useState } from 'react';
import StarRating from '../components/basic/StarRating';
import PostRequest from '../helpers/postRequest';

 function Cookies() {
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
    const recipeId = 2;
  
    // Send the rating to the server
    PostRequest(`recipes/rating`,{
      newRating : newRating,
      recipeid : recipeId
    })
      .then((response) => {
        if (response.status == 200) {
          console.log('Rating updated successfully');
        } else {
          throw new Error('Failed to update rating');
        }
      })
      .catch((error) => console.error('Error:', error.message)); 
  };
  
  return (
    <div>
      i am cookies!
      <StarRating onRate={handleRatingChange} />
      {/* <p>User Rating: {userRating}</p> */}
    </div>
  );
}

export default Cookies;
