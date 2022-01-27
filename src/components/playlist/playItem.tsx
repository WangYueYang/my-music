import React from 'react';
import { Link } from 'react-router-dom';
import { ByAppleMusic } from '@mock/home';

import './playItem.css';

type PlayItemProps = {
 id: number;
 name: string;
 picUrl?: string 
}

const PlayItem = ({picUrl, name, id}: PlayItemProps) => {
  return (
    <div className="play-item">
      <div className="item-img">
        <img
          src={picUrl}
          alt=""
        />
      </div>
      <p className="item-title">
        <Link to="/">{name}</Link>
      </p>

      <p className="item-describe">
        <Link to="/">by Apple Music</Link>
      </p>
    </div>
  );
};

export default PlayItem;
