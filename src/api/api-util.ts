import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export type ParamsType = unknown;


axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (options: AxiosRequestConfig) => {
    return options;
  },
  (err: AxiosError) => {
    // 4XX 请求错误拦截
    console.log(err, '请求错误❌');
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: AxiosError) => {
    // 响应错误拦截
    console.log(err, '响应错误❌');
  }
);


export const get = <T>(url: string, params?: ParamsType) => {
  return axios.request<T>({ method: 'get', url, params });
};

export const post = <T>(url: string, params?: ParamsType) => {
  return axios.request<T>({ method: 'post', url, params });
};
