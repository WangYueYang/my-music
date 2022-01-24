import { post, get, paramsType } from './api-util';

/**
 * 首页-获取推荐歌单
 */
export const apiGetPersonalized = <T>(params: T): Promise<unknown> => {
  return get('/api/personalized', {params})
}