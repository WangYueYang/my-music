import { post, get, paramsType } from './api-util';

// /artist/list
export const apiArtistList = (): Promise<unknown> => {
  return get('/api/artist/list')
};
