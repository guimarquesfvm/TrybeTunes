import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import whiteheart from '../img/Vector (3).png';
import redheart from '../img/Vector (2).png';

function Profile() {
  const { username, favorites, setFavorites, handleFavorite } = useContext(AppContext);
  useEffect(() => console.log(favorites), [favorites]);

  return (
  <>
    <Header />
    <div className='profile-container'>
      <div className='h3-and-clear-btn-container'>
        <h3>{`${username}'s Favorite Songs`}</h3>
        <button onClick={() => setFavorites([])} className='clear-btn'>
          Clear
        </button>
      </div>
      <ul className="favorites-container">
        {favorites.length === 0 ? (
          <h2>No favorites found...</h2>
        ) : (
          favorites.map((song, index) => (
            <>
              <p>{song.trackName}</p>
              <li key={index} className='fav-song-and-fav-btn'>
                <audio
                  data-testid="audio-component"
                  src={song.previewUrl}
                  controls
                >
                  <track kind="captions" />O seu navegador não suporta o elemento{" "}
                  <code>audio</code>
                </audio>

                <button
                  type="button"
                  name="favorite"
                  id="favorite"
                  onClick={() => handleFavorite(song)}
                >
                  <img
                    src={
                      favorites.some((el) => el.previewUrl === song.previewUrl)
                        ? redheart
                        : whiteheart
                    }
                    alt="favorite heart"
                    className='fav-heart-img'
                  />
                </button>
              </li>
            </>
          ))
        )}
      </ul>
    </div>
  </>
  );
}

export default Profile;
