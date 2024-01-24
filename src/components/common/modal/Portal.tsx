import React, { useMemo, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  elementId: string;
}

function Portal({ children, elementId }: PortalProps) {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId]
  );

  return rootElement ? createPortal(children, rootElement) : null;
}

export default Portal;
