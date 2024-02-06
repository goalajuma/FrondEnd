import { Cookies } from "react-cookie";

const cookies = new Cookies();

interface CookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const setCookie = (
  name: string,
  value: string,
  option?: CookieOptions
) => {
  // const domain = ".user-app.krampoline.com";
  // const secureFlag = true;
  // console.log("hi");
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string, option?: CookieOptions) => {
  return cookies.remove(name, { ...option });
};
