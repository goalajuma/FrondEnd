import { AxiosResponse } from "axios";
import { instance } from "./index";

interface SignupData {
  name: string;
  email: string;
  password: string;
}
interface NicknameCheckData {
  nickname: string;
}

interface EmailCheckData {
  email: string;
}

export const signupInquire = (data: SignupData): Promise<AxiosResponse> => {
  const { name, email, password } = data;

  return instance.post(`/api/auth/signup`, {
    nickname: name,
    email: email,
    password: password,
  });
};

export const nicknameCheckInquire = (
  nickName: string
): Promise<AxiosResponse> => {
  const data: NicknameCheckData = { nickname: nickName };
  return instance.post("api/auth/nickname-check", data);
};
export const emailCheckInquire = (email: string): Promise<AxiosResponse> => {
  const data: EmailCheckData = { email: email };
  return instance.post(`/api/auth/email-check`, data);
};
