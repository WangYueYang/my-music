import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosPromise,
  AxiosInterceptorManager,
} from 'axios';

export type ParamsType = unknown;

const instance = axios.create({
  baseURL: '/api',
});

instance.defaults.timeout = 10000;

instance.interceptors.request.use(
  (options: AxiosRequestConfig) => {
    return options;
  },
  (err: AxiosError) => {
    // 4XX 请求错误拦截
    console.log(err, '请求错误❌');
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (err: AxiosError) => {
    // 响应错误拦截
    console.log(err, '响应错误❌');
  }
);

export const get = async <T>(url: string, params?: ParamsType) => {
  const data = await instance.request<T>({ method: 'get', url, params });
  return data;
};

export const post = <T>(url: string, params?: ParamsType) => {
  return axios.request<T>({ method: 'post', url, params });
};
