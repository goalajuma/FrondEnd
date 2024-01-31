import styled from "styled-components";
import { useState } from "react";
import { anonymousState } from "@/utils/UploadAtom";
import { useRecoilState } from "recoil";
const Anonymous = () => {
  const [checked, setChecked] = useRecoilState<boolean>(anonymousState);

  const checkHandler = () => {
    setChecked(!checked);
  };

  return (
    <AnonymousStyle>
      <div className="check_wrap">
        <input
          type="checkbox"
          id="check_btn"
          checked={checked}
          onClick={() => checkHandler()}
        />
        <label htmlFor="check_btn">
          <span> 익명으로 등록하기</span>
        </label>
      </div>
    </AnonymousStyle>
  );
};

const AnonymousStyle = styled.div`
  width: 100%;
  height: 54px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 15px;

  .check_wrap {
    margin-left: 20px;
  }

  input#check_btn {
    display: none;
  }

  input#check_btn + label {
    cursor: pointer;
  }

  input#check_btn + label > span {
    vertical-align: middle;
    padding-left: 5px;
  }

  /* label:before에 체크하기 전 상태 CSS */
  input#check_btn + label:before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 2px solid #a8a8a8;
    border-radius: 4px;
    vertical-align: middle;
  }

  /* label:before에 체크 된 상태 CSS */
  input#check_btn:checked + label:before {
    content: "";
    background-color: #a8a8a8;
    border-color: #a8a8a8;
    background-image: url("./public/image/check.png");
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
export default Anonymous;
