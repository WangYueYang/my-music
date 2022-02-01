import React from 'react';
import { Play, Next, ThumbsDown, Fm } from '@assets/img/icons';
import SvgIcon from '@components/SvgIcon';
import FMCardImg from '@assets/img/fm-card-img.jpeg'

import './index.css';

const FMCard = (): JSX.Element => {
  const imgUrl = FMCardImg as string;

  return (
    <div className="fm-card">
      <img src={imgUrl} alt="" className="fm-img" />
      <div className="fm-right">
        <div className="info">
          <p className="title">歌曲title</p>
          <p className="author">author</p>
        </div>
        <div className="controls">
          <div className="buttons">
            <button>
              <SvgIcon icon={ThumbsDown} />
            </button>
            <button>
              <SvgIcon icon={Play} />
            </button>
            <button>
              <SvgIcon icon={Next} />
            </button>
          </div>
          <div className="card-name">
            <SvgIcon icon={Fm} />
            私人FM
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMCard;
