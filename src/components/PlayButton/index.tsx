import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Play } from '@assets/img/icons';
import classNames from 'classnames';
import SvgIcon from '@components/SvgIcon';

import { playMusicId, getPlaylistDetail, playlists, playSongsUrl, playSongsDetail } from '@store/index';
import { apiGetSongUrl, apiGetSongDetail} from '@api/index';

import './index.css';

type PlayButtonProps = {
  className?: string;
  id: number;
};

const PlayButton = ({ className, id }: PlayButtonProps): JSX.Element => {
  const getPlaylist = useRecoilValue(getPlaylistDetail(id));
  const setPlayMusicId = useSetRecoilState(playMusicId);
  const setPlaylists = useSetRecoilState(playlists);
  const setPlaySongsUrl = useSetRecoilState(playSongsUrl);
  const setPlaySongsDetail = useSetRecoilState(playSongsDetail);
  const playClick = () => {
    getPlaylist().then((res) => {
      const { tracks } = res;
      const playId = tracks[0].id;
      setPlaylists(tracks);
      setPlayMusicId(playId);

      apiGetSongDetail({ids: playId }).then((res) => {
        console.log(res);
        const {songs} = res;
        setPlaySongsDetail(songs);
      });

      apiGetSongUrl({ id: playId }).then((res) => {
        const {data} = res;
        setPlaySongsUrl(data);
      });
    });
  };

  return (
    <div className={classNames('play-button', className)} onClick={playClick}>
      <SvgIcon icon={Play} className="play-icon" />
    </div>
  );
};

export default PlayButton;
