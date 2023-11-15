"use client";
import React from "react";

type Props = {
  children: JSX.Element;
  show?: boolean;
  setShow?: (b: boolean) => void;
  className?: string;
  position?: "left" | "right" | "top" | "bottom";
  offset?: "start" | "center" | "end";
};

// "top-full right-0 before:-top-[8px] before:right-6 after:-top-[6px] after:right-[1.6rem]",

const getOffsetClass = (position: string, offset: string): string => {
  switch (position) {
    case "left": {
      const className =
        "before:rotate-90 after:rotate-90 right-[calc(100%_+_8px)] before:-right-[13px] after:-right-[9px] ";
      switch (offset) {
        case "start":
          return className + "bottom-0 before:bottom-2 after:bottom-[9px]";

        case "center":
          return (
            className +
            "top-1/2 -translate-y-1/2 before:top-[calc(50%_-_4px)] after:top-[calc(50%_-_3px)]"
          );

        case "end":
          return className + "top-0 before:top-2 after:top-[9px]";
      }
    }
    case "right": {
      const className =
        "before:-rotate-90 after:-rotate-90 left-[calc(100%_+_8px)] before:-left-[13px] after:-left-[9px] ";
      switch (offset) {
        case "start":
          return className + "bottom-0 before:bottom-2 after:bottom-[9px]";

        case "center":
          return (
            className +
            "top-1/2 -translate-y-1/2 before:top-[calc(50%_-_4px)] after:top-[calc(50%_-_3px)]"
          );
        case "end":
          return className + "top-0 before:top-2 after:top-[9px]";
      }
    }
    case "top": {
      const className =
        "before:rotate-180 after:rotate-180 bottom-full before:-bottom-[8px] after:-bottom-[6px] ";
      switch (offset) {
        case "start":
          return className + "before:right-6 after:right-[1.6rem]";

        case "center":
          return (
            className +
            "before:left-[calc(50%_-_4px)] after:left-[calc(50%_-_2px)]"
          );

        case "end":
          return className + "before:left-6 after:left-[1.6rem]";
      }
    }
    case "bottom": {
      const className = "top-full before:-top-[8px] after:-top-[6px] ";
      switch (offset) {
        case "start":
          return className + "right-0 before:right-6 after:right-[1.6rem]";

        case "center":
          return (
            className +
            "after:-top-[6px] before:left-[calc(50%_-_4px)] after:left-[calc(50%_-_2px)]"
          );

        case "end":
          return className + "left-0 before:left-6 after:left-[1.6rem]";
      }
    }
  }
  return "";
};

export default function PoperWrapper({
  children,
  show = true,
  position = "bottom",
  offset = "center",
  className,
}: Props) {
  return (
    show && (
      <div
        className={`${getOffsetClass(
          position,
          offset
        )} absolute z-50 border border-zinc-300 rounded-sm bg-white shadow before:content-[''] before:absolute before:border-white before:border-b-zinc-300 before:border-b-8 before:border-x-transparent before:border-x-8 before:border-t-0 after:content-[''] after:absolute after:border-blue after:border-b-white after:border-b-[6px] after:border-x-transparent after:border-x-[6px] ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    )
  );
}
