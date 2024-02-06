import React, { ChangeEvent, KeyboardEvent } from "react";
import Box from "./Box";
import Label from "./Label";
import Input from "./Input";

/**
 * @param {object} props
 * @param {string} id
 * @param {string} type
 * @param { func } onChange
 * @param { func } onKeyDown
 * @param { string } value
 * @param { string } className
 * @param {string} placeholder
 * @param {string} label
 * @param {boolean} valid
 */
interface InputGroupProps {
  id?: string; //React에서는 htmlFor를 설정할 때 undefined를 허용하지 않음
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  label: string;
  valid?: boolean;
}
const InputGroup: React.FC<InputGroupProps> = ({
  id = "",
  type,
  value,
  onChange,
  onKeyDown,
  className,
  placeholder,
  label,
  valid,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        valid={valid}
      />
    </Box>
  );
};

export default InputGroup;
