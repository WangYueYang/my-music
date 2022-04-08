import { selector, selectorFamily, atomFamily, atom } from 'recoil';

import { apiGetPlaylistDetail, apiGetSongDetail } from '@api/index';
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

export const getSongDetail = selectorFamily({
  key: 'getSongDetail',
  get:
    (ids: number) =>
    async ({ getCallback }) => {
      const cb = getCallback(() => async () => {
        const { data } = await apiGetSongDetail({ ids });
        return data;
      });
      return cb;
    },
});
