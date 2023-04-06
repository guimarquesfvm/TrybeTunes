import React from 'react';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import AlbumDetails from './pages/AlbumDetails';
import Profile from './pages/Profile';
import '../src/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/search" element={ <Search /> }/>
      <Route path="/profile" element={ <Profile /> }/>
      <Route path="/album/:albumID" element={ <AlbumDetails /> }/>
    </Routes>
  );
}

export default App;
