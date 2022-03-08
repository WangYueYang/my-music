import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosPromise,
  AxiosInterceptorManager,
} from 'axios';

export interface AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: string, config?: AxiosRequestConfig): AxiosPromise;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

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
