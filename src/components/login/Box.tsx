import React, { ReactNode } from "react";

/**
 * @param {object} prop
 * @param {node} prop.children
 * @param {string} prop.className
 */
interface BoxProps {
  children: ReactNode;
  className?: string;
}
const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Box;
