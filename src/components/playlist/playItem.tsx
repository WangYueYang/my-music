import React from 'react';
import { Link } from 'react-router-dom';

import './playItem.css';

type PlayItemProps = {
 name: string;
 picUrl?: string;
 copywriter?: string | null;
}

const PlayItem = ({picUrl, name, copywriter}: PlayItemProps) => {
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
        {copywriter && <p>{copywriter}</p>}
      </p>
    </div>
  );
};

export default PlayItem;
