import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export type paramsType = unknown;


axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (options: AxiosRequestConfig) => {
    return options;
  },
  (err: AxiosError) => {
    // 4XX 请求错误拦截
    console.log(err, 'hahaha');
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    console.log('拦截啦啦啦啦', res);
    return res;
  },
  (err: AxiosError) => {
    // 响应错误拦截
    console.log(err);
  }
);


export const get = <T>(url: string, params?: paramsType) => {
  return axios.request<T>({ method: 'get', url, params });
};

export const post = <T>(url: string, params?: paramsType) => {
  return axios.request<T>({ method: 'post', url, params });
};
