import { post, get } from './api-util';

import { PersonalizedType } from './api-type';
/**
 * 首页-获取推荐歌单
 */
export const apiGetPersonalized = (params: { limit: number }) => {
  return get<PersonalizedType>('/api/personalized', { ...params });
};
