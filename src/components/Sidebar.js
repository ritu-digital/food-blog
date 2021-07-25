import React from 'react';
import '../Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import { recipeData } from '../data/recipeData';
import { menuData } from '../data/menuData';
import { Link, useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();

  return (
    <div className='sidebar'>
      <div className='sidebar__search'>
        <input type='text' placeholder='search recipes' />
        <SearchIcon
          className='sidebar__searchIcon'
          onClick={() => history.push('/recipes')}
        />
      </div>
      <div className='sidebar__links'>
        <h4>Search by Posts</h4>
        {recipeData.map((recipe, index) => (
          <Link to={recipe.path} key={index}>
            {recipe.title}
          </Link>
        ))}
        <h4>Search by Category</h4>
        {menuData.map((recipe, index) => (
          <Link to={recipe.link} key={index}>
            {recipe.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
