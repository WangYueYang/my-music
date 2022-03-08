import { post, get } from './api-util';
import {
  PersonalizedType,
  LoginQRCodeKeyType,
  CheckQRCodeLoginType,
  UserAccountType,
  TopArtistType,
  AlbumNewArea,
  AlubumNewType,
  ToplistType
} from './api-type';

export * from './api-type';

/**
 * 首页-获取推荐歌单
 */
export const apiGetPersonalized = (params: { limit: number }) => {
  return get<PersonalizedType>('/personalized', params);
};
/* 
  二维码key生成接口
*/
export const apiLoginQRCodeKey = () => {
  const params = {
    timestamp: new Date().getTime(),
  };
  return get<LoginQRCodeKeyType>('/login/qr/key', params);
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
  return get<CheckQRCodeLoginType>('/login/qr/check', params);
};

/**
 * 获取账号详情
 * 说明 : 登录后调用此接口 ,可获取用户账号信息
 */
export const apiGetUserAccount = () => {
  const params = {
    timestamp: new Date().getTime(),
  };

  return get<UserAccountType>('/user/account', params);
};

/* 
  热门歌手
  说明 : 调用此接口 , 可获取热门歌手数据
*/
export const apiGetTopArtists = (params: {
  limit: number;
  offset?: number;
}) => {
  return get<TopArtistType>('/top/artists', params);
};

/* 
  全部新碟
  说明 : 登录后调用此接口 ,可获取全部新碟
*/
export const apiGetAlbumNew = (params: {
  limit: number;
  offset?: number;
  area?: AlbumNewArea;
}) => {
  return get<AlubumNewType>('/album/new', params);
};

/* 
  所有榜单
  说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
*/
export const apiGetTopList = () => {
  return get<ToplistType>('/toplist');
};
