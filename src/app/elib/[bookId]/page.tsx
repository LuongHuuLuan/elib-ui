import React from "react";
import Link from "next/link";
import { Book } from "@/types";

type Props = {
  params: {
    bookId: string;
  };
};

async function getBookDetails(bookCode: string) {
  const res = await fetch(`${process.env.API_ENDPOINT}/books/code/${bookCode}`);
  return res.json();
}

export default async function BookDetails({ params }: Props) {
  const book: Book = await getBookDetails(params.bookId);

  return (
    <div className="bg-slate-100 min-h-screen pt-8 h-auto pb-8">
      <div className="rounded-md p-8 bg-white m-8">
        <div className="flex mb-4">
          <div className="w-[300px] flex flex-col">
            <Link href={`/elib/${book.code}`} className="m-auto">
              <img
                src={`${process.env.API_ROOT}${book.image}`}
                alt={book.image}
              />
            </Link>
          </div>
          <div className="px-4 py-2 ml-16">
            <Link
              href={`/elib/${book.code}`}
              className="font-bold text-blue-700 text-3xl"
            >
              {book.title}
            </Link>
            <div className="text-text-lg text-gray-600 mt-2">
              <p className="text-sm text-gray-400 mb-2">
                {book.count_view} Lượt xem
              </p>
              <p className="mt-2">
                <span className="font-bold">Thể loại: </span>
                {book.categories.map((category, index) => (
                  <span key={index}>
                    <Link
                      href={`/category/${category.code}`}
                      className="hover:text-blue-700"
                    >
                      {category.name}
                    </Link>
                    {book !== undefined && index === book.categories.length - 1
                      ? ""
                      : ", "}
                  </span>
                ))}
              </p>
              <p className="mt-2">
                <span className="font-bold">Tác giả: </span>
                {book.authors?.length !== 0 ? (
                  book.authors?.map((author, index) => (
                    <span key={index}>
                      <Link
                        href={`/author/${author.code}`}
                        className="hover:text-blue-700"
                      >
                        {author.name}
                      </Link>
                      {index === book.authors.length - 1 ? "" : ", "}
                    </span>
                  ))
                ) : (
                  <span className="hover:text-blue-700">Chưa cập nhật</span>
                )}
              </p>
              <p className="mt-2">
                <span className="font-bold">Năm xuất bản: </span>: {book.year}
              </p>
              <p className="mt-2">
                <span className="font-bold">Số tập: </span>:{" "}
                {book.children_count} tập
              </p>
              {book.book_documents.length !== 0 && (
                <p className="mt-2">
                  <span className="font-bold">Định dạng: </span>:{" "}
                  {book.book_documents[0].file_type}
                </p>
              )}
              <p className="mt-2">
                <span className="font-bold">Kích thước: </span>: 1.04MB
              </p>
              <p className="mt-2">
                <span className="font-bold">Tạo lúc: </span>: Thứ 3, 08/11/2022
                15:40
              </p>
              <p className="mt-2">
                <span className="font-bold">Nguồn sách: </span>
                <Link
                  href={book.url_book_source}
                  className="hover:text-blue-700"
                >
                  {book.url_book_source}
                </Link>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-2 flex justify-end gap-2">
          <button className="bg-green-500 hover:opacity-80 text-white py-[6px] px-4 rounded-md">
            Đọc sách
          </button>
          <button className="bg-blue-700 hover:opacity-80 text-white py-[6px] px-4 rounded-md">
            Tải xuống
          </button>
        </div>
      </div>
    </div>
  );
}
