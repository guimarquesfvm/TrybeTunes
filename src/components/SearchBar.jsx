import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import searchicon from '../img/search-13-64.png';
function SearchBar() {
  const { albuns, setAlbuns } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  return (
    <div className='searchbar-container'>
      <input
        type='text'
        onChange={ (e) => setInputText(e.target.value)}
        placeholder='Search'
      />
      <button onClick={ async () => setAlbuns( await searchAlbumsAPI(inputText))}>
        <img src={searchicon} alt='search'/>
      </button>
    </div>
  );
}

export default SearchBar;
