import { post, get } from './api-util';
import {
  PersonalizedType,
  LoginQRCodeKeyType,
  CheckQRCodeLoginType,
  UserAccountType,
  TopArtistType,
  AlbumNewArea,
  AlubumNewType,
  ToplistType,
  PlaylistDetail,
  ISongUrl,
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

/* 
  获取歌单详情
  说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情
*/
export const apiGetPlaylistDetail = (params: { id: number; s?: number }) => {
  return get<PlaylistDetail>('/playlist/detail', params);
};

/* 
  获取歌曲详情
  说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情
*/
export const apiGetSongDetail = (params: { ids: number }) => {
  return get('/song/detail', params);
};

/* 
  获取音乐
  说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
  必选参数 : id : 音乐 id
  可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
*/
export const apiGetSongUrl = (params: { id: number; br?: number }) => {
  return get<ISongUrl>('/song/url', params);
};
