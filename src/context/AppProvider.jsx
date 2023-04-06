import AppContext from "./AppContext";
import React, { useEffect, useState } from 'react'

function AppProvider({ children }) {
  const [username, setUsername] = useState('');
  const [albuns, setAlbuns] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('LSfav')) || []);

  const handleFavorite = (song) => {
    if (favorites.some((el) => el.previewUrl === song.previewUrl)) {
      const rmSong = favorites.filter((el) => el.previewUrl !== song.previewUrl);
      setFavorites(rmSong);
    } else {
      const addSong = [...favorites, song];
      setFavorites(addSong);
    }
  };

  useEffect(() => {
    localStorage.setItem('LSfav', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        albuns,
        setAlbuns,
        favorites,
        setFavorites,
        handleFavorite,
      }}
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider
