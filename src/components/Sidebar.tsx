"use client";
import { SideNavItem } from "@/types";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";

interface Props {
  items: SideNavItem[];
}
export default function Sidebar({ items }: Props) {
  return (
    <div>
      <div className="h-[70px] border flex flex-col border-r-0">
        <Link href={"/"} className="m-auto">
          <Image src={logo} alt="logo" width={136} />
        </Link>
      </div>
      <p className="ml-2">Trang chủ</p>
      {items.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </div>
  );
}

const SidebarItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const selectedLayout = useSelectedLayoutSegment();
  const [subMenuOpen, setSubMenuOpen] = useState(pathname !== "/");
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  useEffect(() => {
    if (pathname === "/") setSubMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      {item.subMenu ? (
        <div>
          <div
            className="cursor-pointer mx-2 mt-2 flex items-center p-2 bg-blue-50 font-semibold text-blue-700"
            onClick={toggleSubMenu}
          >
            {item.icon}
            <span className="ml-4 grow">{item.title}</span>
            {subMenuOpen ? (
              <span className="self-end">v</span>
            ) : (
              <span className="self-end">&#62;</span>
            )}
          </div>
          {subMenuOpen && (
            <ul className="flex flex-col ms-8 transition ease-in-out delay-150 duration-700">
              {item.subMenuItems
                ?.filter((item) => {
                  return item.activePath === undefined
                    ? true
                    : item.activePath.includes(selectedLayout || "");
                })
                ?.map((item, index) => (
                  <li
                    key={index}
                    className="p-[4px] mt-2  before:content-['>'] before:text-[10px] before:mr-2"
                  >
                    <Link
                      href={item.path}
                      className={
                        item.activePath === undefined
                          ? item.path === "/" + selectedLayout
                            ? "text-blue-700"
                            : ""
                          : item.path === pathname
                          ? "text-blue-700"
                          : ""
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      ) : (
        <Link href={item.path}>{item.title}</Link>
      )}
    </div>
  );
};
