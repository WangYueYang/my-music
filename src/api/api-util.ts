import axios from 'axios';

export type methodType = 'get' | 'post';

export type paramsType = unknown;

export interface Request {
  method: methodType;
  url: string;
  params?: paramsType;
}

const server = axios.create({
  timeout: 10000,
});

server.interceptors.request.use((options) => {
  return options;
});

server.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (err) => {
    console.log(err);
  }
);

const request = ({ method, url, params = {} }: Request): Promise<unknown> => {
  let data = {};
  // get请求使用params字段
  if (method == 'get') data = { params };
  // post请求使用data字段
  if (method == 'post') data = { data: params };
  return new Promise((resolve, reject) => {
    server({
      url,
      method,
      ...data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  });
};

export const get = (url: string, params?: paramsType) => {
  return request({ method: 'get', url, params });
};

export const post = (url: string, params?: paramsType) => {
  return request({ method: 'post', url, params });
  // return axios.post(url, params)
};
