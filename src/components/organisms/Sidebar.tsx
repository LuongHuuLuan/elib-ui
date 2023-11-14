"use client"
import { SideNavItem } from "@/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import PageTitle from "@/components/atoms/PageTitle";
import SidebarItem from "@/components/molecules/SideBarItem";

interface Props {
  items: SideNavItem[];
}

export default function Sidebar({ items }: Props) {
  return (
    <div>
      <div className="h-[70px] border flex flex-col border-r-0">
        <Link href={"/"} className="m-auto">
          <Image src={logo} alt="logo" width={136} priority />
        </Link>
      </div>
      <PageTitle />
      {items.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </div>
  );
}
