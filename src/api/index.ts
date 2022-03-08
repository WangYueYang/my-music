import { post, get } from './api-util';

import {
  PersonalizedType,
  LoginQRCodeKeyType,
  CheckQRCodeLoginType,
  UserAccountType
} from './api-type';

export * from './api-type';

/**
 * 首页-获取推荐歌单
 */
export const apiGetPersonalized = (params: { limit: number }) => {
  return get<PersonalizedType>('/api/personalized', params);
};
/* 
  二维码key生成接口
*/
export const apiLoginQRCodeKey = () => {
  const params = {
    timestamp: new Date().getTime(),
  };
  return get<LoginQRCodeKeyType>('/api/login/qr/key', params);
};

/* 
  轮训检查二维码登录接口
  800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
*/
export const apiCheckQRCodeLogin = (key: string) => {
  const params = {
    key,
    timestamp: new Date().getTime(),
  };
  return get<CheckQRCodeLoginType>('/api/login/qr/check', params);
};

/**
 * 获取账号详情
 * 说明 : 登录后调用此接口 ,可获取用户账号信息
 */
export const apiGetUserAccount = () => {
  const params = {
    timestamp: new Date().getTime(),
  };

  return get<UserAccountType>('/api/user/account', params);
};
