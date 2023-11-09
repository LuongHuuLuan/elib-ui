import React from "react";

type Props = {
  placeholder: string;
  buttonName: string;
};

export default function InputSearch() {
  return (
    <div className="flex">
      <input type="text" className="grow border border-inherit box-border rounded-l-md px-2 focus:outline-0 focus:border focus:border-blue-700" placeholder="Tìm kiếm" />
      <button className="bg-blue-700 text-white py-[6px] px-4 rounded-r-md">Tìm kiếm</button>
    </div>
  );
}
