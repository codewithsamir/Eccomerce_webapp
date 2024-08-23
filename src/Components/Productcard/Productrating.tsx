import React from 'react';
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

const StarRating = ({ rating }:any) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return <MdStar key={index} color='orange' size={23} />;
        } else if (index === fullStars && halfStar) {
          return <MdStarHalf key={index} color='orange' size={23} />;
        } else {
          return <MdStarOutline key={index} color='orange' size={23} />;
        }
      })}
    </div>
  );
};

export default StarRating;
