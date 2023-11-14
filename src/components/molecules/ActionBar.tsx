"use client";
import { LinkItem } from "@/types";
import { usePathname } from "next/navigation";
import React from "react";
import ActionBarItem from "@/components/molecules/ActionBarItem";

interface IProps {
  items?: LinkItem[];
}

const TAB_BAR_ITEMS = [
  { title: "Tên sách", path: "/elib" },
  { title: "Tác giả", path: "/elib/author" },
  { title: "Nhà xuất bản", path: "/elib/publisher" },
];

export default function ActionBar({ items = TAB_BAR_ITEMS }: IProps) {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex gap-8">
        {items.map((item, index) => (
          <ActionBarItem
            key={index}
            item={item}
            active={pathname === item.path}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}
