"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface IProps {
  placeholder?: string;
  buttonName: string;
}

export default function InputSearch(props: IProps) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(value ? `/elib?search=${value}` : `/elib`);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="grow border border-inherit box-border rounded-l-md px-2 focus:outline-0 focus:border focus:border-blue-700"
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-700 text-white py-[6px] px-4 rounded-r-md hover:opacity-80"
        onClick={handleSearch}
      >
        {props.buttonName}
      </button>
    </div>
  );
}
