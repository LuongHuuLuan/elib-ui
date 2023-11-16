import type { Metadata } from "next";
import { SideNavItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import RootLayoutTemplate from "@/components/templates/RootLayout";

const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Ứng dụng",
    path: "/app",
    subMenu: true,
    icon: <FontAwesomeIcon icon={faBorderAll} width={20} height={20} />,
    subMenuItems: [
      { title: "Elib", path: "/elib" },
      { title: "Edict", path: "/edict" },
      { title: "ChatGPT", path: "/chat-gpt" },
    ],
  },
  {
    title: "Menu",
    path: "/menu",
    subMenu: true,
    icon: <FontAwesomeIcon icon={faBars} width={20} height={20} />,
    subMenuItems: [
      {
        title: "Tìm sách",
        path: "/elib",
        activePath: ["", "elib"],
      },
      { title: "Tra từ", path: "/edict", activePath: [""] },
      {
        title: "Tra tổng hợp",
        path: "/edict",
        activePath: ["edict"],
      },
      {
        title: "Tra theo bộ thủ",
        path: "/edict/radical",
        activePath: ["edict"],
      },
      {
        title: "Tra theo nét viết",
        path: "/edict/stroke",
        activePath: ["edict"],
      },
      {
        title: "Tra theo hình thái",
        path: "/edict/variant",
        activePath: ["edict"],
      },
      {
        title: "Quản lý từ",
        path: "/edict/admin",
        activePath: ["edict"],
      },
      {
        title: "Tác giả",
        path: "/elib/author",
        activePath: ["elib"],
      },
      {
        title: "Nhà xuất bản",
        path: "/elib/publisher",
        activePath: ["elib"],
      },
      {
        title: "Quản lý sách",
        path: "/elib/admin",
        activePath: ["elib"],
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Elib",
  description: "Tìm kiếm sách hay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutTemplate sideBar={SIDENAV_ITEMS}>{children}</RootLayoutTemplate>
  );
}
