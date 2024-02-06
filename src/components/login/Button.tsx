import React, { ReactNode, MouseEventHandler } from "react";
import styled from "styled-components";

/**
 * @param {object} props
 * @param {node} children
 * @param {string} color background color
 * @param { func } onClick 버튼 클릭 이벤트
 * @param { boolean } disabled 버튼 활성화 여부
 * @param { string } className
 */

interface ButtonProps {
  children: ReactNode;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  disabled,
  className,
}) => {
  return (
    <StyledButton
      color={color}
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

interface StyledButtonProps {
  color?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 280px;
  height: 50px;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  border-radius: 50px;
  border: 1px solid transparent;
  font-size: 15px;
  background-color: ${(props) => (props.disabled ? "#ccc" : props.color)};
  padding: 0.6em 1.2em;
  font-weight: 600;
  color: #fff;
  .kakao {
    color: #333;
  }
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#8C9CCF")};
  }
`;
