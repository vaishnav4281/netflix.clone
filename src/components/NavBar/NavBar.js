import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/">TV Shows</a>
        <a href="/">Movies</a>
        <a href="/">Latest</a>
        <a href="/">My List</a>
      </div>
      <div className='nav-right'>
        <i className='search-icon fas fa-search'></i>
        <img className='avatar' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp" alt="Netflix avatar" />
        <div className='hamburger-menu' onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
