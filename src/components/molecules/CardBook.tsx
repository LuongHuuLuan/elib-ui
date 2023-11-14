import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Book } from "@/types";

type IProps = {
  item: Book;
};

export default function CardBook({ item }: IProps) {
  return (
    <div className="bg-white hover:opacity-80 shadow-sm">
      <div className="w-full flex flex-col">
        <Link href={`/elib/${item.code}`} className="m-auto">
          {item?.image && (
            <Image
              src={`${process.env.API_ROOT}${item.image}`}
              alt={item.image}
              width={230}
              height={333}
              className="object-cover w-[230px] h-[333px]"
            />
          )}
        </Link>
      </div>
      <div className="px-4 py-2">
        <Link
          href={`/elib/${item.code}`}
          className="font-bold text-blue-700 text-lg"
        >
          {item.title}
        </Link>
        <div className="text-sm text-gray-600 mt-2">
          <div>
            Thể loại:{" "}
            {item.categories?.map((category, index) => (
              <span key={index}>
                <Link
                  href={`/category/${category.code}`}
                  className="hover:text-blue-700"
                >
                  {category.name}
                </Link>
                {index === item.categories.length - 1 ? "" : ", "}
              </span>
            ))}
          </div>
          <div>
            Tác giả:{" "}
            {item.authors?.length !== 0 ? (
              item.authors?.map((author, index) => (
                <span key={index}>
                  <Link
                    href={`/author/${author.code}`}
                    className="hover:text-blue-700"
                  >
                    {author.name}
                  </Link>
                  {index === item.authors.length - 1 ? "" : ", "}
                </span>
              ))
            ) : (
              <span className="hover:text-blue-700">Chưa cập nhật</span>
            )}
          </div>
          <p>Xuất bản: {item.year}</p>
        </div>
      </div>
    </div>
  );
}
