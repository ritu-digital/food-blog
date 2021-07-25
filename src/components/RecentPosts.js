import React from 'react';
import '../RecentPosts.css';
import { recentPostsData } from '../data/recentPostsData';
import RecipeCard from './RecipeCard';
import Sidebar from './Sidebar';

const RecentPosts = () => {
  return (
    <div className='recentPosts'>
      <RecipeCard recipes={recentPostsData} />
      <Sidebar />
    </div>
  );
};

export default RecentPosts;
