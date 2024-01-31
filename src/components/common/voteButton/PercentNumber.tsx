import { PercentNnumberSt } from "@/styles/VotingBtnStyle";

/**
 * @param {object} props
 * @param {boolean} props.choiced
 * @param {number} props.value 버튼 안에 퍼센트
 * @param {number} props.number 투표 참여자 수
 */
interface PercentNumberProps {
  value: number;
  number: number;
  choice?: boolean;
  id?: number;
}
const PercentNumber = ({ value, number, choice }: PercentNumberProps) => {
  return (
    <PercentNnumberSt choice={choice}>
      <p>{value}%</p>
      <p>{number}명</p>
    </PercentNnumberSt>
  );
};

export default PercentNumber;
