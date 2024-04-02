import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com/",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = (url, params) => {
  return instance.get(url, {
    params,
  });
};

export const post = (url, data) => {
  return instance.post(url, data);
};
