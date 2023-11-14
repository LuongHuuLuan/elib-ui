import React from "react";

type Props = {
  children: React.ReactNode;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  className?: string;
  textContentStyle?: string;
  clearSpace?: boolean;
  clearLeftSpace?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function GroupText({
  children,
  leftIcon,
  rightIcon,
  className,
  textContentStyle,
  clearLeftSpace = false,
  clearSpace = false,
  onClick,
}: Props) {
  return (
    <div className={`flex items-center p-2 ${className}`} onClick={onClick}>
      {leftIcon && leftIcon}
      <div
        className={`inline-block ${clearSpace ? "" : "grow"} ${
          clearLeftSpace ? "" : "ml-2"
        } ${textContentStyle}`}
      >
        {children}
      </div>
      {rightIcon && rightIcon}
    </div>
  );
}
