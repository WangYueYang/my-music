import React from 'react';
import classNames from 'classnames';
import PlayButton from '../PlayButton';
import { Link } from 'react-router-dom';

import './PlayItem.css';

type PlayItemProps = {
  name: string;
  picUrl?: string;
  describe?: string | null;
  className?: string;
};

const PlayItem = ({
  picUrl,
  name,
  describe,
  className,
}: PlayItemProps): JSX.Element => {
  return (
    <div className={classNames(className, 'play-item')}>
      <div className="item-img">
        <PlayButton />
        <img src={`${picUrl}?param=320y320`} alt="" />
        <img src={`${picUrl}?param=320y320`} alt="" className="bg" />
      </div>
      <p className="item-title">
        <Link to="/">{name}</Link>
      </p>

      <p className="item-describe">{describe}</p>
    </div>
  );
};

export default PlayItem;
