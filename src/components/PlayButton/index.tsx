import React, { useCallback } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { Play } from '@assets/img/icons';
import classNames from 'classnames';
import SvgIcon from '@components/SvgIcon';

import { playMusicId, getPlaylistDetail } from '@store/index';

import './index.css';

type PlayButtonProps = {
  className?: string;
  id: number;
};

const PlayButton = ({ className, id }: PlayButtonProps): JSX.Element => {
  const getPlaylist = useRecoilValue(getPlaylistDetail(id));
  const setPlayMusicId = useSetRecoilState(playMusicId);
  const playClick = () => {
    getPlaylist().then(res => console.log(res));
    setPlayMusicId(id);
  };

  return (
    <div className={classNames('play-button', className)} onClick={playClick}>
      <SvgIcon icon={Play} className="play-icon" />
    </div>
  );
};

export default PlayButton;
