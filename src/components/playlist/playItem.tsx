import React from 'react';
import { Link } from 'react-router-dom';
import { ByAppleMusic } from '@mock/home';

import './playItem.css';



const PlayItem = ({coverImgUrl, name, id}: ByAppleMusic) => {
  return (
    <div className="play-item">
      <div className="item-img">
        <img
          src={coverImgUrl}
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
