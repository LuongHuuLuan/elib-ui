import React from "react";

type Props = {
    className?: string
};

export default function BottomLine({className}: Props) {
  return <div className={`h-[3px] w-100 bg-blue-700 ${className}`}></div>;
}
