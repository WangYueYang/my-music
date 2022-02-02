export interface Response{
  code: number;
  category?: number;
  hasTaste?: boolean;
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
  result: Personalized[]
}

