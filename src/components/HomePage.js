import React from 'react';
import Banner from './Banner';
import RecipeCard from './RecipeCard';
import { recipeData } from '../data/recipeData';

import RecentPosts from './RecentPosts';

const HomePage = () => {
  return (
    <div className='homePage'>
      <Banner />
      <RecipeCard recipes={recipeData} />
      <RecentPosts />
    </div>
  );
};

export default HomePage;
