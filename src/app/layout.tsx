import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/organisms/Sidebar";
import { SideNavItem } from "@/types";
import Header from "@/components/organisms/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";

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

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <div className="w-1/5  border-r h-screen">
            <Sidebar items={SIDENAV_ITEMS} />
          </div>
          <div className="w-4/5 h-auto">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
