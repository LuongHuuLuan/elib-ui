import React, { useState } from "react";
import { MenuItem } from "@/types";
import { useRouter } from "next/navigation";
import GroupText from "@/components/atoms/GroupText";
import RectangleIcon from "@/components/atoms/RectangleIcon";

type Props = {
  title?: string;
  items: MenuItem[];
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: MenuItem
  ) => void;
};

export default function Menu({ title, items, onChange = () => null }: Props) {
  const router = useRouter();
  const [history, setHistory] = useState<MenuItem[][]>([items]);
  const current = history[history.length - 1];

  return (
    <div className="w-40 text-blue-700">
      {title && (
        <div className="border-b border-b-zinc-300 p-2 text-center font-bold">
          {title}
        </div>
      )}
      {history.length > 1 && (
        <GroupText
          className="pb-2 hover:bg-blue-50 border-b border-b-zinc-300 "
          leftIcon={<RectangleIcon size="large" direction="left" />}
          onClick={(event) => {
            event.stopPropagation();
            setHistory(history.splice(0, history.length - 1));
          }}
        >
          Quay lại
        </GroupText>
      )}
      <div className="flex flex-col pb-2">
        {current.map((item, index) => {
          return (
            <GroupText
              key={index}
              className="pb-2 hover:bg-blue-50"
              leftIcon={item.icon}
              rightIcon={
                item.children && (
                  <RectangleIcon size="large" direction="right" />
                )
              }
              onClick={(event) => {
                event.stopPropagation();
                if (item.to) {
                  router.push(item.to);
                }
                if (!!item.children) {
                  setHistory((pre) =>
                    item.children ? [...pre, item.children] : history
                  );
                }
                if (item.action) {
                  onChange(event, item);
                }
              }}
            >
              {item.title}
            </GroupText>
          );
        })}
      </div>
    </div>
  );
}
