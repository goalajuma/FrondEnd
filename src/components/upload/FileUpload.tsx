import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { GoFileMedia } from "react-icons/go";

/**
 *
 * @param {object} param
 * @param {func} param.func
 * @param {number} param.id
 * @returns
 */

const FileUpload = ({
  func,
  id,
}: {
  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}) => {
  return (
    <FileUploadContainer id={Number(id)}>
      <label htmlFor="file" className="fileLabel" id={id}>
        <Icon size="23px" color="#7d7d7d">
          <GoFileMedia />
        </Icon>
        <p>이미지 추가</p>
      </label>
      <input
        type="file"
        className="fileInput"
        id="file"
        accept="image/jpeg, image/png"
        onChange={(e) => {
          func(e);
        }}
      />
    </FileUploadContainer>
  );
};

const FileUploadContainer = styled.div<{ id: number }>`
  margin: 0;
  .fileInput {
    display: none;
  }
  .fileLabel {
    font-size: 14px;
    color: #7d7d7d;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px 5px 0 0;
  }
  .fileLabel p {
    margin: 0 0 7px 5px;
  }
`;

export default FileUpload;
