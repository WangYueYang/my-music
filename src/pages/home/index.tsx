import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CoverRow, PlayItem, DailyPush, FMCard } from '@components/index';
import { listState } from '@store/index';
import './index.css';

import { apiGetPersonalized } from '@api/index';
import { Personalized } from '@api/api-type';

const Home = () => {
  const [playlist, setPlaylist] = useState<Personalized[]>([]);
  const [limit, setLimit] = useState<number>(10);
  useEffect(() => {
    apiGetPersonalized({ limit }).then(({ data }) => {
      setPlaylist(data.result);
    });
  }, []);
  const list = useRecoilValue(listState);
  console.log('list', list );
  return (
    <>
      <div className="main-page">
        {list}
        <CoverRow title="推荐歌单" type="playlist">
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
        <CoverRow title="For You" type="for-you">
          <>
            <DailyPush />
            <FMCard />
          </>
        </CoverRow>
        <CoverRow title="推荐艺人" type="actor-list">
          <>
            {playlist.map((item, i) => {
              if (i > 5) {
                return null;
              }
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
