import { selector } from 'recoil';
import {
  apiGetAlbumNew,
  apiGetPersonalized,
  apiGetTopArtists,
  apiGetTopList,
  TopArtist,
  AlbumNew,
  Personalized,
  AlbumNewArea,
  ToplistItem,
} from '@api/index';

export const personalizedList = selector<Personalized[]>({
  key: 'personlizedList',
  get: async () => {
    const { result } = await apiGetPersonalized({ limit: 10 });
    return result;
  },
});

export const artistsList = selector<TopArtist[]>({
  key: 'artistsList',
  get: async () => {
    const { artists } = await apiGetTopArtists({ limit: 6 });
    return artists || [];
  },
});

export const albumNewList = selector<AlbumNew[]>({
  key: 'albumNewList',
  get: async () => {
    const { albums } = await apiGetAlbumNew({
      limit: 10,
      area: AlbumNewArea.ALL,
    });
    return albums || [];
  },
});

export const topList = selector<ToplistItem[]>({
  key: 'topList',
  get: async () => {
    const { list } = await apiGetTopList();
    return list || [];
  },
});
