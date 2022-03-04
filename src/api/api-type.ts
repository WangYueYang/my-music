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