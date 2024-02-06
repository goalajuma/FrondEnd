import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

/**
 * @param {object} props
 * @param {string} type
 * @param {string} value
 * @param { string } className
 * @param { func } onChange
 * @param { func } onKeyDown
 * @param { string } placeholder
 * @param {string} id
 * @param {boolean} valid
 */

interface InputProps {
  type: string;
  value: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  valid?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  className,
  onChange,
  onKeyDown,
  placeholder,
  id,
  valid,
}) => {
  return (
    <StyledInput
      id={id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      valid={valid}
    />
  );
};

export default Input;

const StyledInput = styled.input<{ valid?: boolean }>`
  width: 240px;
  padding: 15px;
  font-size: 13px;
  border: none;
  border-bottom: 2px solid #9eb0ea;
  position: relative;
`;
