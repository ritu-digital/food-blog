import React from 'react';
import '../RecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipes }) => {
  return (
    <div className='recipeCard'>
      {recipes.map((recipe, index) => (
        <div className='recipeCard__container'>
          <img src={recipe.image} alt={recipe.alt} key={index} />
          <Link to={recipe.path}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
