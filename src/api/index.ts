import { post, get } from './api-util';

import { PersonalizedType, LoginQRCodeKeyType } from './api-type';
/**
 * 首页-获取推荐歌单
 */
export const apiGetPersonalized = (params: { limit: number }) => {
  return get<PersonalizedType>('/api/personalized', { ...params });
};
/* 
  二维码key生成接口
*/
export const apiLoginQRCodeKey = (params: { timestamp: number }) => {
  return get<LoginQRCodeKeyType>('/api/login/qr/key', { ...params });
};

/* 
  轮训检查二维码登录接口
  800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
*/
export const apiCheckQRCodeLogin = (params: {temstamp: number}) => {
  return get('/api/login/qr/check')
}