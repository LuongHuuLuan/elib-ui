"use client";
import { LinkItem, SideNavItem } from "@/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/atoms/PageTitle";
import SidebarItem from "@/components/molecules/SideBarItem";

interface Props {
  items: SideNavItem[];
  pageTitles?: LinkItem[];
}

export default function Sidebar({ items, pageTitles }: Props) {
  return (
    <div>
      <div className="h-[70px] border flex flex-col border-r-0">
        <Link href={"/"} className="m-auto">
          <img src='/images/logo.png' alt="logo" width={136} />
        </Link>
      </div>
      <PageTitle items={pageTitles} />
      {items.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </div>
  );
}
