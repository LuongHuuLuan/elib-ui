import CardBook from "@/components/CardBook";
import InputSearch from "@/components/InputSearch";
import TabBar from "@/components/TabBar";
import React from "react";

type Props = {};

export default function Elib({}: Props) {
  return (
    <div className="bg-slate-100 min-h-screen pt-8 h-auto pb-8">
      <div className="h-[150px] rounded-md p-8 bg-white m-8">
        <InputSearch />
        <TabBar/>
      </div>
      <div className="m-8 mt-2 grid grid-cols-4 grid-flow-row gap-8">
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
      </div>
    </div>
  );
}
