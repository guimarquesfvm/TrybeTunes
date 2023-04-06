import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext';
import whiteheart from '../img/Vector (3).png';
import redheart from '../img/Vector (2).png';

function SongCard({ song }) {
  const { favorites, handleFavorite } = useContext(AppContext);

  return (
    <li className='song-card'>
      <p>
        {song.trackName}
      </p>
      <div className='song-and-favorite-btn'>
        <audio data-testid="audio-component" src={song.previewUrl} controls>
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
              favorites.some((el) => el.previewUrl === song.previewUrl) ? redheart :whiteheart
            }
            alt="favorite heart" />
        </button>
      </div>
    </li>
  );
}

export default SongCard;
