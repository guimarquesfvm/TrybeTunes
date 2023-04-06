import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../img/user-4-64.png';
import logo from '../img/logo (1).png';
import logouticon from '../img/login-64.png';

function Header() {
  return (
    <div className='header-container'>
      <Link to="/"><button type='button'><img src={logouticon} alt="logout" className='logout-icon' /></button></Link>
      <Link to="/search"><img src={logo} alt="home" className='logo' /></Link>
      <Link to="/profile"><button type='button'><img src={profileIcon} alt="profile" className='profile-icon' /></button></Link>
</div>
  );
}

export default Header;
