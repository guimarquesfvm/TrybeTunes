import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Search() {
  const { username, albuns } = useContext(AppContext);

  return (
    <div className='search-results-container'>
      <Header />
      <SearchBar />
      <p>{`${albuns.length} results found`}</p>
      <div className='albuns-map-container'>
        {albuns?.map((element, index) => (
          <div key={ index } className='album-card-container'>
            <Link
              data-testid={ `link-to-album-${element.collectionId}` }
              to={ `/album/${element.collectionId}` }
            >
              <img src={ element.artworkUrl100 } alt="foto-album" />
              <p>
                {element.collectionName}
                {' '}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
