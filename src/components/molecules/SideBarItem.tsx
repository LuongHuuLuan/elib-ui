"use client"
import { SideNavItem } from "@/types";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RectangleIcon from "@/components/atoms/RectangleIcon";
import GroupText from "@/components/atoms/GroupText";

export default function SidebarItem({ item }: { item: SideNavItem }) {
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
          <GroupText
            leftIcon={item.icon}
            rightIcon={
              subMenuOpen ? (
                <RectangleIcon size="large" direction="down" />
              ) : (
                <RectangleIcon size="large" direction="right" />
              )
            }
            className="cursor-pointer mx-2 mt-2 bg-blue-50 font-semibold text-blue-700"
            textContentStyle="ml-4"
            clearLeftSpace
            onClick={toggleSubMenu}
          >
            {item.title}
          </GroupText>
          {subMenuOpen && (
            <ul className="flex flex-col ms-8 transition ease-in-out delay-150 duration-700">
              {item.subMenuItems
                ?.filter((item) => {
                  return item.activePath === undefined
                    ? true
                    : item.activePath.includes(selectedLayout || "");
                })
                ?.map((item, index) => (
                  <li key={index}>
                    <GroupText
                      leftIcon={
                        <RectangleIcon size="small" direction="right" />
                      }
                      className="cursor-pointer p-[4px] mt-2"
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
                    </GroupText>
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
}
