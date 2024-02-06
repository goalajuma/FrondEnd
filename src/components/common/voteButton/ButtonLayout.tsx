import MainButton from "./MainButton";
import styled from "styled-components";

/**
 * @param {object} props
 * @param {function} props.changeVotes 투표시 실행. 참여 여부 변경
 * @param { array } props.options 옵션 리스트
 * @param { boolean } props.participate 참여여부
 * @param { boolean } props.isOwner 투표자인지의 여부
 * @param {string} props.active  투표 상태
 * @param {number} props.voteId 투표 id
 */

export interface buttonProps {
  changeVotes: (a: boolean, b: string) => void;
  options?: [];
  participate: boolean;
  isOwner: boolean;
  active: string;
  voteId: number;
}

interface optionTypes {
  optionName: string;
  optionRatio: number;
  optionCount: number;
  image: string;
  choice: boolean;
  id: number;
}

const ButtonLayout = ({
  changeVotes,
  options,
  participate,
  isOwner,
  active,
  voteId,
}: buttonProps) => {
  return (
    <>
      <Container>
        {options?.map((option: optionTypes, index) => {
          return (
            <MainButton
              changeVotes={changeVotes}
              key={index}
              name={option.optionName}
              value={option.optionRatio}
              number={option.optionCount}
              src={option.image}
              choiced={option.choice}
              participate={participate && participate}
              isOwner={isOwner}
              active={active}
              id={option.id}
              voteId={voteId}
            />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;
  text-align: center;
`;

export default ButtonLayout;
