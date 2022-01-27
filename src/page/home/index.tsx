import React, { useEffect, useState } from 'react';
import { CoverRow, PlayItem } from '@components/playlist';
import './index.css';

import { apiGetPersonalized } from '@api/index';
import { IPersonalized } from '@api/api-type';

const Home = () => {
  const [playlist, setPlaylist] = useState<IPersonalized[]>();
  const [limit, setLimit] = useState<number>(10);
  useEffect(() => {
    apiGetPersonalized({ limit }).then(({ data }) => {
      console.log(data.result, 'res222');
      // console.log(data)
      setPlaylist(data.result);
    });
  }, []);

  return (
    <>
      <div className="main-page">
        <CoverRow title="推荐歌单" type={'playlist'}>
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
      </div>
    </>
  );
};

export default Home;
