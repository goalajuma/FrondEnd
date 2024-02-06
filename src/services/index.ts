import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { refreshTokenInquire, removeToken } from "./login";
import { useSetRecoilState } from "recoil";
import { isLoginInState } from "@/utils/AuthAtom";
import { getCookie } from "./Cookie";

// localStorage에서 토큰을 가져옴
const token = localStorage.getItem("token");

// 기본 axios 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_DOMAIN as string,
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
});

// 로그인 전용 axios 인스턴스 생성
export const loginInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_DOMAIN as string,
  timeout: 1000 * 3,
  headers: {
    "Content-Type": "application/json",
  },
});

// 로그인 전용 axios 인스턴스에 요청 전 인터셉터 추가
loginInstance.interceptors.request.use((config) => {
  const refreshToken = getCookie("refreshToken");
  if (refreshToken) {
    config.headers["Cookie"] = `Bearer ${refreshToken}`;
  }
  return config;
});

// 기본 axios 인스턴스에 요청 전 인터셉터 추가
instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const expiredTime = new Date(
    parseInt(localStorage.getItem("expiredTime") as string)
  ); // accessToken 만료 시간
  const refreshExpiredTime = new Date(
    parseInt(localStorage.getItem("refreshExpiredTime") as string)
  );

  const currentTime = new Date();

  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  if (expiredTime < currentTime && refreshExpiredTime > currentTime) {
    try {
      const refreshedConfig = await refreshTokenInquire();
      return refreshedConfig || config;
    } catch (e) {
      removeToken();
      return Promise.reject(e);
    }
  }
  return config;
});

// 기본 axios 인스턴스에 응답 처리 인터셉터 추가
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status) {
      const { status } = error.response;
      if (status === 403) {
        await refreshTokenInquire();
      }
      if (status === 401) {
        const setisLoginIn = useSetRecoilState(isLoginInState);
        setisLoginIn(false);
        removeToken();
        alert("로그인이 만료되었습니다! 다시 로그인 해주세요.");
        return Promise.resolve(error.response.data?.error?.message);
      }
    } else {
      // error.response가 없거나 status가 없는 경우에 대한 처리
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
