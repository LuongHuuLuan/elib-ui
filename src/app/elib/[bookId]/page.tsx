import React from "react";
import Image from "next/image";
import Link from "next/link";
import bookImage from "@/assets/images/bach-van-thi-tap.jpg";

type Props = {
  params: {
    bookId: string;
  };
};

export default function BookDetails({ params }: Props) {
  return (
    <div className="bg-slate-100 min-h-screen pt-8 h-auto pb-8">
      <div className="rounded-md p-8 bg-white m-8">
        <div className="flex mb-4">
          <div className="w-[300px] flex flex-col">
            <Link href={"/elib/bach-van-thi-tap"} className="m-auto">
              <Image src={bookImage} alt="bookImage" />
            </Link>
          </div>
          <div className="px-4 py-2 ml-16">
            <Link
              href={"/elib/bach-van-thi-tap"}
              className="font-bold text-blue-700 text-3xl"
            >
              Bạch vân thi tập
            </Link>
            <div className="text-text-lg text-gray-600 mt-2">
              <p className="text-sm text-gray-400 mb-2">1,164 Lượt xem</p>
              <p className="mt-2">
                <span className="font-bold">Thể loại: </span>
                <Link href={"/"} className="hover:text-blue-700">
                  Tác giả
                </Link>
                ,{" "}
                <Link href={"/"} className="hover:text-blue-700">
                  Tác phẩm
                </Link>
              </p>
              <p className="mt-2">
                <span className="font-bold">Tác giả: </span>
                <Link href={"/"} className="hover:text-blue-700">
                  Nguyễn Bỉnh Khiêm
                </Link>
              </p>
              <p className="mt-2">
                <span className="font-bold">Năm xuất bản: </span>: 1814
              </p>
              <p className="mt-2">
                <span className="font-bold">Số tập: </span>: 100 tập
              </p>
              <p className="mt-2">
                <span className="font-bold">Định dạng: </span>: PDF
              </p>
              <p className="mt-2">
                <span className="font-bold">Kích thước: </span>: 1.04MB
              </p>
              <p className="mt-2">
                <span className="font-bold">Tạo lúc: </span>: Thứ 3, 08/11/2022
                15:40
              </p>
              <p className="mt-2">
                <span className="font-bold">Nguồn sách: </span>
                <Link href={"/"} className="hover:text-blue-700">
                  https://tusachtiengviet.com/
                </Link>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-2 flex justify-end gap-2">
          <button className="bg-green-500 hover:opacity-80 text-white py-[6px] px-4 rounded-md">Đọc sách</button>
          <button className="bg-blue-700 hover:opacity-80 text-white py-[6px] px-4 rounded-md">Tải xuống</button>
        </div>
      </div>
    </div>
  );
}
