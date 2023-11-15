import React from "react";

type Props = {
  size: "small" | "medium" | "large";
  direction: "left" | "right" | "up" | "down";
  className?: string;
};
export default function RectangleIcon({
  size,
  direction,
  className,
}: Props) {
  const getdirectionClass = () => {
    switch (direction) {
      case "left":
        return "rotate-90";
      case "right":
        return "-rotate-90";
      case "up":
        return "rotate-180";
      case "down":
        return;
    }
  };
  const getsizeClass = () => {
    switch (size) {
      case "small":
        return " border-t-4 border-x-4";
      case "medium":
        return " border-t-[6px] border-x-[6px]";
      case "large":
        return " border-t-8 border-x-8";
    }
  };
  const getClassName = () =>
    `inline-block border-white border-b-0 border-x-transparent border-zinc-300 ${getdirectionClass()} ${getsizeClass()} ${
      className ? className : ""
    }`;
  return <div className={getClassName()}></div>;
}
