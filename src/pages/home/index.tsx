import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CoverRow, PlayItem, DailyPush, FMCard } from '@components/index';
import './index.css';

import { Personalized } from '@api/api-type';
import { userAccountState, personalizedList, artistsList } from '@store/index';
const Home = () => {
  const [playlist, setPlaylist] = useState<Personalized[]>([]);
  const personalized = useRecoilValue(personalizedList);
  const artists = useRecoilValue(artistsList);
  const user = useRecoilValue(userAccountState);

  return (
    <>
      <div className="main-page">
        <CoverRow title="推荐歌单" type="playlist">
          <>
            {personalized.map((item) => {
              return (
                <PlayItem
                  key={item.id}
                  name={item.name}
                  picUrl={item.picUrl}
                  copywriter={item.copywriter}
                />
              );
            })}
          </>
        </CoverRow>
        <CoverRow title="For You" type="for-you">
          <>
            <DailyPush />
            <FMCard />
          </>
        </CoverRow>
        <CoverRow title="推荐歌手" type="actor-list">
          <>
            {artists.map((item, i) => {
              return (
                <PlayItem
                  key={item.id}
                  name={item.name}
                  picUrl={item.picUrl}
                  className="actor-item"
                />
              );
            })}
          </>
        </CoverRow>
        <CoverRow title="新专速递" type="playlist">
          <>
            {playlist.map((item) => {
              return (
                <PlayItem
                  key={item.id}
                  name={item.name}
                  picUrl={item.picUrl}
                  copywriter={item.copywriter}
                />
              );
            })}
          </>
        </CoverRow>
        <CoverRow title="排行榜" type="playlist">
          <>
            {playlist.map((item) => {
              return (
                <PlayItem
                  key={item.id}
                  name={item.name}
                  picUrl={item.picUrl}
                  copywriter={item.copywriter}
                />
              );
            })}
          </>
        </CoverRow>
      </div>
    </>
  );
};

export default Home;
