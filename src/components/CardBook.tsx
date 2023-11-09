import Image from "next/image";
import Link from "next/link";
import React from "react";
import bookImage from "../assets/images/bach-van-thi-tap.jpg";

type Props = {};

export default function CardBook() {
  return (
    <div className="bg-white hover:opacity-80">
      <div className="w-full flex flex-col">
        <Link href={"/elib/bach-van-thi-tap"} className="m-auto">
          <Image src={bookImage} alt="bookImage" />
        </Link>
      </div>
      <div className="px-4 py-2">
        <Link href={"/elib/bach-van-thi-tap"} className="font-bold text-blue-700 text-lg">Bạch vân thi tập</Link>
        <div className="text-sm text-gray-600 mt-2">
          <p>
            Thể loại:{" "}
            <Link href={"/"} className="hover:text-blue-700">
              Tác giả
            </Link>
            ,{" "}
            <Link href={"/"} className="hover:text-blue-700">
              Tác phẩm
            </Link>
          </p>
          <p>
            Tác giả:{" "}
            <Link href={"/"} className="hover:text-blue-700">
              Nguyễn Bỉnh Khiêm
            </Link>
          </p>
          <p>Xuất bản: 1814</p>
        </div>
      </div>
    </div>
  );
}
