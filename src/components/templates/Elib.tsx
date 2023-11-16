import CardBook from "@/components/molecules/CardBook";
import InputSearch from "@/components/molecules/InputSearch";
import ActionBar from "@/components/molecules/ActionBar";
import { Book } from "@/types";
import React from "react";

export default async function ElibTemplate({ books }: { books: Book[] }) {
  return (
    <div className="bg-slate-100 min-h-screen pt-8 h-auto pb-8">
      <div className="h-[150px] rounded-md p-8 bg-white m-8">
        <InputSearch placeholder="Tìm kiếm" buttonName="Tìm kiếm" />
        <ActionBar />
      </div>
      <div className="m-8 mt-2 grid grid-cols-4 grid-flow-row gap-8">
        {books.map((book) => (
          <CardBook key={book.id} item={book} />
        ))}
      </div>
    </div>
  );
}
