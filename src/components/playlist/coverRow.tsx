import React, { ReactChild, ReactNode} from 'react';
import { Link } from 'react-router-dom';
import PlayItem from './playItem';

import './coverRow.css';

type ListArr = {
  id: number;
  type: number;
  name: string;
  copywriter: null | string;
  picUrl: string;
  highQuality: boolean;
  alg: string;
}

type PlaylistProps = {
  title: string;
  moreHref?: string;
  children?: JSX.Element
};

const CoverRow = ({ title, moreHref = '', children }: PlaylistProps): JSX.Element => {
  return (
    <div className="cover-row">
      <div className="title">
        <h3 className="title-text">{title}</h3>
        {moreHref && (
          <Link to={moreHref} className="see-more">
            查看全部
          </Link>
        )}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default CoverRow;
