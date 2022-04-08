import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Play } from '@assets/img/icons';
import classNames from 'classnames';
import SvgIcon from '@components/SvgIcon';

import { playMusicId, getPlaylistDetail, playlists } from '@store/index';

import './index.css';

type PlayButtonProps = {
  className?: string;
  id: number;
};

const PlayButton = ({ className, id }: PlayButtonProps): JSX.Element => {
  const getPlaylist = useRecoilValue(getPlaylistDetail(id));
  const setPlayMusicId = useSetRecoilState(playMusicId);
  const setPlaylists = useSetRecoilState(playlists);
  const playClick = () => {
    getPlaylist().then((res) => {
      const { tracks } = res;
      setPlaylists(tracks);
      setPlayMusicId(tracks[0].id);
    });
  };

  return (
    <div className={classNames('play-button', className)} onClick={playClick}>
      <SvgIcon icon={Play} className="play-icon" />
    </div>
  );
};

export default PlayButton;
