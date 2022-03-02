import React from 'react';
import classNames from 'classnames';
import PlayButton from '../PlayButton';
import { Link } from 'react-router-dom';

import './PlayItem.css';

type PlayItemProps = {
  name: string;
  picUrl?: string;
  copywriter?: string | null;
  className?: string;
};

const PlayItem = ({
  picUrl,
  name,
  copywriter,
  className,
}: PlayItemProps): JSX.Element => {
  return (
    <div className={classNames(className, 'play-item')}>
      <div className="item-img">
        <PlayButton />
        <img src={picUrl} alt="" />
        <img src={picUrl} alt="" className="bg" />
      </div>
      <p className="item-title">
        <Link to="/">{name}</Link>
      </p>

      <p className="item-describe">{copywriter}</p>
    </div>
  );
};

export default PlayItem;
