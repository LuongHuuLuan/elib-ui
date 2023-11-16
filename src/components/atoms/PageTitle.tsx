import { LinkItem } from "@/types";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

type Props = {
  items?: LinkItem[];
};

const PAGE_TITLES = [
  { title: "Trang chủ", path: null },
  { title: "Elib", path: "elib" },
  { title: "Edict", path: "edict" },
];

export default function PageTitle({ items = PAGE_TITLES }: Props) {
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div className="ml-4">
      {items.find((item) => item.path === selectedLayout)?.title}
    </div>
  );
}
