import axios from "axios";
import { baseUrl, LOCAL_STORAGE_KEY } from "../Config.js";

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.response.status);
    if (error.response.status === 401) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      window.location.reload();
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
