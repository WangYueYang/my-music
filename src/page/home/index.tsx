import React, { useEffect, useState } from 'react';
import { Playlist } from '@components/playlist';
import './index.css';

import { byAppleMusic } from '@mock/home';
import { apiGetPersonalized } from '@api/index'
import { IPersonalized } from '@api/api-type';

const Home = () => {
  const [playlist, setPlaylist] = useState<IPersonalized[]>();
  useEffect(() => {
    apiGetPersonalized({limit: 10}).then(res => {
      console.log(res, 'res222')
      // setPlaylist(res.result)
    })
  }, [])

  return (
    <>
      <div className="main-page">
        <Playlist title="by Apple Music" list={byAppleMusic} />
        <Playlist title="推荐歌单" list={byAppleMusic} />
      </div>
    </>
  );
};

export default Home;
