import React from 'react';
import PlayButton from '@components/PlayButton'; 
import CoverImg from '@assets/img/daily-push-bg.jpeg'
import './index.css';

const DailyPush = (): JSX.Element => {
  return (
    <div className="daily-push">
      <img src={CoverImg.src} alt="" />
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
