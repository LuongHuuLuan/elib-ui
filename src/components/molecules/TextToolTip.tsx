import React from "react";
import PoperWrapper from "../atoms/PoperWrapper";

type Props = {
  truncate?: boolean;
  toolTip?: JSX.Element;
  children: JSX.Element;
  className?: string;
};

// const getTruncate = (str: string, n: number, useWordBoundary: boolean) => {
//   if (str.length <= n) {
//     return {
//       text: str,
//       isTruncate: false,
//     };
//   }
//   const subString = str.slice(0, n - 1);
//   return {
//     text:
//       (useWordBoundary
//         ? subString.slice(0, subString.lastIndexOf(" "))
//         : subString) + "&hellip;",
//     isTruncate: str.length <= n,
//   };
// };

export default function TextToolTip({ children, toolTip, className }: Props) {
  return (
    <div className={`relative group`}>
      {/* <p className={`inline-block ${truncate ? "truncate" : ""}`}>{text}</p> */}
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
