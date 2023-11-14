"use client";
import React from "react";

type Props = {
  children: JSX.Element;
  show: boolean;
  setShow: (b: boolean) => void;
};

export default function PoperWrapper({ children, show }: Props) {

  return (
    show && (
      <div
        className="absolute border border-zinc-300 rounded-sm bg-white shadow top-[95%] right-0 before:content-[''] before:absolute before:border-white before:border-b-zinc-300 before:border-b-8 before:border-x-transparent before:border-x-8 before:border-t-0 before:-top-[8px] before:right-6    after:content-[''] after:absolute after:border-blue after:border-b-white after:border-b-[6px] after:border-x-transparent after:border-x-[6px] after:border-t-0 after:-top-[6px] after:right-[1.6rem]"
      >
        {children}
      </div>
    )
  );
}
