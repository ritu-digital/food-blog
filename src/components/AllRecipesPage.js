import React from 'react';
import { recipeData } from '../data/recipeData';

import SearchPage from './SearchPage';

const AllRecipesPage = () => {
  return (
    <div>
      <br />
      <SearchPage recipes={recipeData[0]} />
      <br />
      <SearchPage recipes={recipeData[1]} />
      <br />
      <SearchPage recipes={recipeData[2]} />
    </div>
  );
};

export default AllRecipesPage;
