import React from 'react';
import { Play } from '@assets/img/icons';
import classNames from 'classnames';
import SvgIcon from '@components/SvgIcon';

import './index.css';

type PlayButtonProps = {
  className?: string;
};

const PlayButton = ({ className }: PlayButtonProps): JSX.Element => {
  return (
    <div className={classNames('play-button', className)}>
      <SvgIcon icon={Play} className="play-icon" />
    </div>
  );
};

export default PlayButton;
