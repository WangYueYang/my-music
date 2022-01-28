import React from 'react';
import { Play } from '@assets/img/icons';
import './index.css';

type PlayButtonProps = {
  className?: string;
};

const PlayButton = (): JSX.Element => {
  console.log(Play ,'play')
  return (
    <div>
      playbtn
      {/* <Play /> */}
    </div>
  );
};

export default PlayButton;
