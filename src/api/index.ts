import { post, get } from './api-util';

import { IPersonalizedType } from './api-type';
/**
 * 首页-获取推荐歌单
 */
export const apiGetPersonalized = (params: {limit: number}) => {
  return get<IPersonalizedType>('/api/personalized', {...params})
}