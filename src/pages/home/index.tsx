import React, { useEffect, useState } from 'react';
import { CoverRow, PlayItem, DailyPush, FMCard } from '@components/index';
import './index.css';

import { apiGetPersonalized } from '@api/index';
import { Personalized } from '@api/api-type';

const Home = () => {
  const [playlist, setPlaylist] = useState<Personalized[]>();
  const [limit, setLimit] = useState<number>(10);
  useEffect(() => {
    apiGetPersonalized({ limit }).then(({ data }) => {
      setPlaylist(data.result);
    });
  }, []);
console.log('xxxxx');
  return (
    <>
      <div className="main-page">
        <CoverRow title="推荐歌单" type="playlist">
          <>
            {playlist?.map((item) => {
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
      </div>
    </>
  );
};

export default Home;
