import React, { ReactNode } from "react";
import styled from "styled-components";

/**
 * @param {object} props
 * @param {node} children
 * @param {string} htmlFor
 */

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #333;
`;
