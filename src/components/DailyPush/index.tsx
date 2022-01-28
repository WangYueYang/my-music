import React from 'react';
import PlayButton from '@components/PlayButton'; 
import './index.css';
import { PlayItem } from '@components/playlist';

const DailyPush = (): JSX.Element => {
  const coverImg = `https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg?param=1024y1024`;
  return (
    <div className="daily-push">
      <img src={coverImg} alt="" />
      <div className="content">
        <div className="text-box">
          <p className="text">每日推荐</p>
        </div>
        <PlayButton />
      </div>
    </div>
  );
};

export default DailyPush;
