export interface Response {
  code: number;
  category?: number;
  hasTaste?: boolean;
  message?: string;
}

export interface Personalized {
  id: number;
  type: number;
  name: string;
  copywriter: null | string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export interface PersonalizedType extends Response {
  result: Personalized[];
}

/* 
  /login/qr/key
*/
export interface LoginQRCodeKeyType extends Response {
  data: {
    code: number;
    unikey: string;
  };
}

/* 
    apiCheckQRCodeLogin: /api/login/qr/check
 */
export interface CheckQRCodeLoginType extends Response {
  cookie: string;
}

export interface Account {
  id: number;
  userName: string;
  type: number;
  status: number;
  createTime: number;
  vipType: number;
}

// apiGetUserAccount
export interface Profile {
  userId: number;
  userType: number;
  nickname: string;
  avatarImgId: number;
  avatarUrl: string;
  backgroundImgId: number;
  backgroundUrl: string;
  signature: string;
  createTime: number;
  userName: string;
  birthday: number;
  lastLoginTime: number;
}

export interface UserAccountType extends Response {
  account: Account;
  profile: Profile;
}

// apiGetTopArtists
export interface TopArtist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
}

export interface TopArtistType extends Response {
  artists: TopArtist[];
}

// apiGetAlbumNew
export enum AlbumNewArea {
  ALL = 'ALL',
  ZH = 'ZH',
  EA = 'EA',
  KR = 'KR',
  JP = 'JP',
}

export interface AlbumArtist {
  img1v1Id: number;
  alias: any[];
  picId: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  name: string;
  id: number;
  picId_str?: string;
  img1v1Id_str: string;
}

export interface AlbumNew {
  blurPicUrl: string;
  pic: number;
  artists: AlbumArtist[];
  picId: number;
  artist: AlbumArtist;
  publishTime: number;
  company: string;
  picUrl: string;
  tags: string;
  description: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}

export interface AlubumNewType extends Response {
  total: number;
  albums: AlbumNew[];
}

// apiGetTopList
export interface ArtistToplist {
  coverUrl: string;
  name: string;
  postition: number;
  updateFrequency: string;
}

export interface ToplistItem {
  updateFrequency: string;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  userId: number;
  updateTime: number;
  coverImgId: number;
  trackUpdateTime: number;
  trackCount: number;
  coverImgUrl: string;
  commentThreadId: string;
  ordered: boolean;
  tags: any[];
  description: string;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}

export interface ToplistType extends Response {
  list: ToplistItem[];
  artistToplist: ArtistToplist;
}
