import React from 'react';
import './index.css';

const DailyPush = (): JSX.Element => {
  const coverImg = `https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg?param=1024y1024`;
  return (
    <div className="daily-push">
      <img src={coverImg} alt="" />
      <div className="content">
        <div className="text-box">
          <p className="text">每日推荐</p>
        </div>
        <button>play</button>
      </div>
    </div>
  );
};

export default DailyPush;
