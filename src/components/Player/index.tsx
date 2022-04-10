import React from 'react';
import { useRecoilValue } from 'recoil';
import { playSongsUrl, playSongsDetail } from '@store/play';

import './index.css';

const Player = (): JSX.Element => {
  const songUrl = useRecoilValue(playSongsUrl);
  const url = songUrl[0]?.url || '';
  const songsDetail = useRecoilValue(playSongsDetail);
  const name = songsDetail[0]?.name;
  const picUrl = songsDetail[0]?.al.picUrl;
  const author = songsDetail[0]?.ar[0].name;
  console.log('render', songsDetail);
  return (
    <div className="player">
      <div className="progress-bar"></div>
      <div className="controls">
        <div className="playing">
          <div className="avatar">
            <img src={`${picUrl}?param=100y100`} alt="" />
          </div>
          <div className="text">
            <div className="play-name">{name}</div>
            <div className="play-author">{author}</div>
          </div>
          <div className="like"></div>
        </div>
      </div>
      <audio controls src={url} autoPlay>
        哈哈哈播放不了气不气？
      </audio>
    </div>
  );
};

export default Player;
