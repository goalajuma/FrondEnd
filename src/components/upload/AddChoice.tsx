import ChoiceOption from "./ChoiceOption";
import { useRecoilState } from "recoil";
import { optionState, OptionTypes } from "@/utils/UploadAtom";
import styled from "styled-components";
import PlusBtn from "./PlusBtn";
export interface valueTypes {
  hasValue: number | null;
}

const AddChoice = () => {
  const [option, setOption] = useRecoilState<OptionTypes[]>(optionState);
  const AddOption = () => {
    // 선택지 추가 버튼
    setOption((prop: OptionTypes[]) => {
      if (prop.length < 6) {
        return [...prop, { name: "", image: null }];
      } else {
        return prop;
      }
    });
  };
  //선택지 삭제 버튼
  const deleteOption = (e: any) => {
    setOption((prop: OptionTypes[]) => {
      let list = [...prop];
      return list.filter((_, index: number) => {
        return index != e.target.parentElement.id;
      });
    });
  };
  //선택지 인풋 값 바꾸기
  const inputOption = (e: any) => {
    const id = e.target.id;
    setOption((prop: OptionTypes[]) => {
      return prop.map((choice: OptionTypes, index: number) => {
        if (id == index) {
          return { ...choice, name: e.target.value };
        } else {
          return choice;
        }
      });
    });
  };

  return (
    <Container hasValue={option.length}>
      <div className="labelBtn">
        <label>선택지 추가 (최소 2개이상) *</label>
      </div>

      <OptionContainer>
        {option.map((choice: OptionTypes, index: number) => {
          return (
            <ChoiceOption
              key={index}
              id={index}
              data={choice}
              inputOption={inputOption}
              deleteOption={deleteOption}
              src={choice.image}
            ></ChoiceOption>
          );
        })}
      </OptionContainer>
      <PlusBtn onClick={AddOption}></PlusBtn>
    </Container>
  );
};

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Container = styled.div<valueTypes>`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  right: ${(prop) => (prop.hasValue ? "0" : "5.1rem")};
  .labelBtn {
    margin: 0 0 5px 0;
    display: flex;
    justify-content: space-between;
  }
  .labelBtn > label {
    font-size: 14px;
    color: #999999;
    margin: 0 0 5px 13px;
  }

  .reset {
    position: relative;
    left: 180px;
    background-color: #d6deed;
    border: none;
    border-radius: 1rem;
    font-size: 12px;
    color: #797979;
  }
  .reset:hover {
    background-color: #c8d1e1;
  }
`;

export default AddChoice;

//선택지 추가 컨테이너
//라벨
//선택지 박스(인풋 + 사진 압축해서 업로드)
//선택지 추가 버튼(클릭 시 선택지 박스 추가,6 개까지만 가능. 6개 되면 사라짐)
//선택지 삭제 가능. 버튼 클릭시 li container 삭제 후 리스트에서도 삭제.
