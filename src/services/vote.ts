import { instance } from "./index";
//투표하기
export const vote = (id: number) => {
  return instance.post(`/votes/participate/options/${id}`);
};

//투표 옵션 수정
export const changeOption = (id: number) => {
  return instance.put(`/votes/participate/options/${id}`);
};
//글 업로드
export const uploadVote = (count: number) => {
  return instance.post(`/votes`, count);
};
//투표 취소
export const deleteVote = (id: number) => {
  return instance.delete(`/votes/participate/options/${id}`);
};
