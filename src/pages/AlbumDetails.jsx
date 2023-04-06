import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMusics, getInfo } from '../services/getMusics';
import SongCard from '../components/SongCard';
import Header from '../components/Header';

function AlbumDetails() {
  const { albumID } = useParams();
  const [ songs, setSongs] = useState([]);
  const [ info, setInfo] = useState({});

  useEffect(() => {
    const handleSongsAndInfo = async () => {
    setSongs(await getMusics(albumID));
    setInfo(await getInfo(albumID));
  }
  handleSongsAndInfo()
  }, []);

  return (
  <>
  <Header />
  {
    info && (
      <div className='infos-container'>
        <img src={ info.artworkUrl100 } alt="capa álbum" />
        <div>
          <h2>{info.collectionName}</h2>
          <h3>{info.artistName}</h3>
        </div>
      </div>
    )
  }
    <ul className='songs-container'>
      {
        songs.length > 0 && songs.map((song, index) => <SongCard song={song} key={index}/>)
      }
    </ul>
  </>
  );
}

export default AlbumDetails;
