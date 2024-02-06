import { AxiosResponse } from "axios";
import { instance } from "./index";
export const mainInquire = (
  categoryData: { sort: string; content: string },
  pageParam: number
) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?&sort=${sort}&category=${content}&page=${pageParam}`
  );
};

export const hotInquire = (pageParam: number) => {
  return instance.get(`/votes/hot?page=${pageParam}`);
};

export const completeInquire = (
  categoryData: { sort: string; content: string },
  pageParam: number
) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes?active=complete&sort=${sort}&category=${content}&page=${pageParam}`
  );
};

export const commentCountInquire = (id: number) => {
  return instance.get(`/votes/${id}/comments/count`);
};

export const detailInquire = (id: string): Promise<AxiosResponse> => {
  return instance.get(`/votes/${id}`);
};

export const ChatInquire = (id: number) => {
  return instance.get(`/votes/${id}/comments`);
};

export const closeInquire = (id: number) => {
  return instance.patch(`/votes/${id}/close`);
};
