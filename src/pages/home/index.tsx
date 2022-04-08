import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CoverRow, PlayItem, DailyPush, FMCard } from '@components/index';
import './index.css';

import { Personalized } from '@api/api-type';
import {
  userAccountState,
  personalizedList,
  artistsList,
  albumNewList,
  topList,
} from '@store/index';
const Home = () => {
  const personalized = useRecoilValue(personalizedList);
  const artists = useRecoilValue(artistsList);
  const user = useRecoilValue(userAccountState);
  const albumNew = useRecoilValue(albumNewList);
  const topLists = useRecoilValue(topList);

  return (
    <>
      <div className="main-page">
        <CoverRow title="推荐歌单" type="playlist">
          <>
            {personalized.map((item) => {
              return (
                <PlayItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  picUrl={item.picUrl}
                  describe={item.copywriter}
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
                  id={item.id}
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
            {albumNew.map((item) => {
              const describe = item.artist.name;
              return (
                <PlayItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  picUrl={item.picUrl}
                  describe={describe}
                />
              );
            })}
          </>
        </CoverRow>
        <CoverRow title="排行榜" type="playlist">
          <>
            {topLists.map((item, i) => {
              if (i > 4) {
                return;
              }
              const describe = item.updateFrequency;
              return (
                <PlayItem
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  picUrl={item.coverImgUrl}
                  describe={describe}
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
