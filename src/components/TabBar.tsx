"use client"
import React, { useState } from "react";

type Props = {
  placeholder: string;
  buttonName: string;
};

export default function TabBar() {
  const [active, setActive] = useState(0);
  

  return (
    <div>
      <div className="flex gap-8">
        <div className={`text-center cursor-pointer ${active===0&&"text-blue-700 "}`} onClick={()=>setActive(0)}>
          <p className="p-4">Tên sách</p>
          {active === 0 &&<div className="h-[3px] w-100 bg-blue-700"></div>}
        </div>
        <div className={`text-center cursor-pointer ${active===1&&"text-blue-700 "}`} onClick={()=>setActive(1)}>
          <p className="p-4">Tác giả</p>
          {active === 1 &&<div className="h-[3px] w-100 bg-blue-700"></div>}
        </div>
        <div className={`text-center cursor-pointer ${active===2&&"text-blue-700 "}`} onClick={()=>setActive(2)}>
          <p className="p-4">Nhà xuất bản</p>
          {active === 2 &&<div className="h-[3px] w-100 bg-blue-700"></div>}
        </div>
      </div>
      <hr />
    </div>
  );
}
