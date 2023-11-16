import { Book } from "@/types";
import React from "react";
import ElibTemplate from "@/components/templates/Elib";
import { Metadata } from "next";

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

export default async function ElibPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const books: Book[] = await getListBooks(search);

  return <ElibTemplate books={books} />;
}
