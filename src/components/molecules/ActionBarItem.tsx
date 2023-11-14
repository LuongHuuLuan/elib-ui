import React from "react";
import Link from "next/link";
import { LinkItem } from "@/types";
import BottomLine from "@/components/atoms/BottomLine";

type Props = {
  item: LinkItem;
  active?: boolean;
};

export default function ActionBarItem({ item, active = false }: Props) {
  return (
    <Link href={item.path || ""}>
      <div
        className={`text-center cursor-pointer ${active && "text-blue-700"}`}
      >
        <p className="p-4">{item.title}</p>
        {active && <BottomLine />}
      </div>
    </Link>
  );
}
