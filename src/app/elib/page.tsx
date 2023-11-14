import CardBook from "@/components/molecules/CardBook";
import InputSearch from "@/components/molecules/InputSearch";
import ActionBar from "@/components/molecules/ActionBar";
import { Book } from "@/types";
import React from "react";

async function getListBooks(searchParams: string | undefined) {
  let res = null;
  if (searchParams) {
    res = await fetch(
      `${process.env.API_ENDPOINT}/books?search=${searchParams}`
    );
  } else {
    res = await fetch(`${process.env.API_ENDPOINT}/books`);
  }
  const json = await res.json();
  return json.results.sort((book1: Book, book2: Book) => book1.id - book2.id);
}

export default async function Elib({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const books: Book[] = await getListBooks(search);

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
