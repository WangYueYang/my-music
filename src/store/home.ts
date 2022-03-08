import { selector } from 'recoil';
import { Personalized } from '@api/api-type';
import {
  apiGetAlbumNew,
  apiGetPersonalized,
  apiGetTopArtists,
  TopArtist,
  AlbumNew
} from '@api/index';

export const personalizedList = selector<Personalized[]>({
  key: 'personlizedList',
  get: async () => {
    const { result } = await apiGetPersonalized({ limit: 10 });
    return result || [];
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
    const { albums } = await apiGetAlbumNew({ limit: 10 });
    return albums || [];
  },
});
