export interface IResponse{
  code: number;
  category?: number;
  hasTaste?: boolean;
}

export interface IPersonalized {
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

export interface IPersonalizedType extends IResponse {
  result: IPersonalized[]
}

