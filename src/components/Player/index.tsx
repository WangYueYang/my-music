import React from 'react';
import { useRecoilValue } from 'recoil';
import { playSongUrl } from '@store/play';

const Player = (): JSX.Element => {
  const songUrl = useRecoilValue(playSongUrl);
  const url = songUrl[0]?.url || '';


  return (
    <div className="player">
      <audio src={url} autoPlay>
        哈哈哈播放不了气不气？
      </audio>
    </div>
  );
};

export default Player;
