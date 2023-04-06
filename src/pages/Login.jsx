import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo (1).png';

function Login() {
  const { username, setUsername } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='login-container'>
      <img src={logo} alt="trybetunes logo" />
      <h1>Login</h1>
      <input type="text" onChange={ (e) => setUsername(e.target.value) } placeholder="What's your name?"/>
      <button disabled={ username.length < 3 } onClick={ () => navigate('/search') }>Login</button>
    </div>
  );
}

export default Login;
