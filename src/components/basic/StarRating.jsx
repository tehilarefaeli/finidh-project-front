// StarRating.js

import React from 'react';
import Rating from 'react-rating-stars-component';

const StarRating = ({ onRate }) => {
  return (
    <Rating
      count={5}
      size={24}
      onChange={(rating) => onRate(rating)}
    />
  );
};

export default StarRating;
