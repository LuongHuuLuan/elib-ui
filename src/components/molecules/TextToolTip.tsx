import React from "react";
import PoperWrapper from "../atoms/PoperWrapper";

type Props = {
  truncate?: boolean;
  toolTip?: JSX.Element;
  children: JSX.Element;
  className?: string;
};

export default function TextToolTip({ children, toolTip, className }: Props) {
  return (
    <div className={`relative group`}>
      {children}
      <PoperWrapper
        position="top"
        offset="center"
        className={`hidden text-black font-normal text-xs group-hover:block ${
          className ? className : ""
        }`}
      >
        {toolTip ? toolTip : children}
      </PoperWrapper>
    </div>
  );
}
