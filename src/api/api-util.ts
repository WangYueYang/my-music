export type methodType = 'POST' | 'GET';

export type paramsType = unknown;

export interface Request {
  method: methodType;
  url: string;
  params?: paramsType;
}

const request = ({ method, url, params }: Request): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => {
        throw new Error(err);
      });
  });
};

export const get = (url: string, params?: paramsType) => {
  return request({ method: 'GET', url, params });
};

export const post = (url: string, params?: paramsType) => {
  return request({ method: 'GET', url, params });
};
