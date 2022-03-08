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