import {atom, selector} from "recoil";
// 메인페이지 
export const sortState = atom<string>({
  key: "sortState",
  default: "current",
});

export const sortNameState = atom<string>({
  key: "sortNameState",
  default: "최신순",
});

export const segmentState = atom<string>({
  key: "segmentState",
  default: "total",
});

export const segmentNameState = atom<string>({
  key: "segmentNameState",
  default: "골라조(전체)",
});

export const totalCategoryState = selector({
  key: "totalCategoryState",
  get: ({get}) => {
    return{
      sort : get(sortState),
      content : get(segmentState)
    };
  }
})

// 완료된 페이지
export const completeSortState = atom<string>({
  key: "completeSortState",
  default: "current",
});

export const completeSortNameState = atom<string>({
  key: "completeSortNameState",
  default: "최신순",
});

export const completeSegmentState = atom<string>({
  key: "completeSegmentState",
  default: "total",
});

export const completeSegmentNameState = atom<string>({
  key: "completeSegmentNameState",
  default: "골라조(전체)",
});

export const completeTotalCategoryState = selector({
  key: "completeTotalCategoryState",
  get: ({get}) => {
    return{
      sort : get(completeSortState),
      content : get(completeSegmentState)
    };
  }
})