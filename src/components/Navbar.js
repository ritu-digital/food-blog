import React from 'react';
import { menuData } from '../data/menuData';
import { Link, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import '../Navbar.css';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
// import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  const history = useHistory();
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>Sweet Paradise</Link>
      </div>
      <div className='navbar__section'>
        <div className='navbar__toggleIcon' onClick={toggleHandler}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={isOpen ? 'navbar__menu active' : 'navbar__menu'}>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.title}
            </Link>
          ))}
          <div className='navbar__search'>
            <input type='text' placeholder='search recipes' />
            <SearchIcon
              className='navbar__searchIcon'
              style={{ color: '#545454' }}
              onClick={() => history.push('/recipes')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
