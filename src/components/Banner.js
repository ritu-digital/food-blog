import React from 'react';
import '../Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <img
        src='https://images.unsplash.com/photo-1561087548-94e6546744a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        alt='banner'
        className='banner__image'
      />
    </div>
  );
};

export default Banner;
