import React, { useEffect } from 'react';
import { Playlist } from '@components/playlist';
import './index.css';

import { byAppleMusic } from '@mock/home';
import { apiArtistList } from '@api/index'

const Home = () => {

  useEffect(() => {
    apiArtistList();
    console.log('homme') 
  }, [])

  return (
    <>
      <div className="main-page">
        <Playlist title="by Apple Music" list={byAppleMusic} />
      </div>
    </>
  );
};

export default Home;
