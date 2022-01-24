import React from 'react';
import { Link } from 'react-router-dom';
import { ByAppleMusic } from '@mock/home';
import PlayItem from './playItem';

import './playlist.css';

type PlaylistProps = {
  title: string;
  moreHref?: string;
  list: ByAppleMusic[];
};

const Playlist = ({ title, moreHref = '', list }: PlaylistProps) => {
  return (
    <div className="playlist">
      <div className="title">
        <h3 className="title-text">{title}</h3>
        {moreHref && (
          <Link to={moreHref} className="see-more">
            查看全部
          </Link>
        )}
      </div>
      <div className="list">
        {list.map((item) => {
          return <PlayItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Playlist;
