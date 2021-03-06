import { selector, selectorFamily, atomFamily, atom } from 'recoil';

import { apiGetPlaylistDetail, ISongsUrlDetail, ISongsPlayDetail } from '@api/index';
import { TrackType } from '@api/index';

export const getPlaylistDetail = selectorFamily({
  key: 'getPlaylistDetail',
  get:
    (id: number) =>
    async ({ getCallback }) => {
      const cb = getCallback(() => async () => {
        const { playlist } = await apiGetPlaylistDetail({ id });
        return playlist;
      });
      return cb;
    },
});

export const playMusicId = atom<number>({
  key: 'playMusicId',
  default: 0,
});

export const playlists = atom<TrackType[]>({
  key: 'playlists',
  default: [],
});

export const playSongsUrl = atom<ISongsUrlDetail[]>({
  key: 'playSongsUrl',
  default: [],
});

export const playSongsDetail = atom<ISongsPlayDetail[]>({
  key: 'playSongsDetail',
  default: [],
});
