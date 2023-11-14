import CardBook from "@/components/CardBook";
import InputSearch from "@/components/molecules/InputSearch";
import TabBar from "@/components/molecules/ActionBar";
import React from "react";

type Props = {};

const TAB_BAR_ITEMS = [
  {title: "Tên sách", path: "/elib"},
  {title: "Tác giả", path: "/elib/author"},
  {title: "Nhà xuất bản", path: "/elib/publisher"}
]

export default function AuthorSearch({}: Props) {
  return (
    <div className="bg-slate-100 min-h-screen pt-8 h-auto pb-8">
      <div className="h-[150px] rounded-md p-8 bg-white m-8">
        <InputSearch placeholder="Tìm kiếm" buttonName="Tìm kiếm" />
        <TabBar items={TAB_BAR_ITEMS}/>
      </div>
      <div className="m-8 mt-2 grid grid-cols-4 grid-flow-row gap-8">
      </div>
    </div>
  );
}
