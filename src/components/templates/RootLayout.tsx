import { Inter } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/organisms/Sidebar";
import { SideNavItem, LinkItem } from "@/types";
import Header from "@/components/organisms/Header";

export default function RootLayoutTemplate({
  children,
  sideBar,
  pageTitles,
}: {
  children: React.ReactNode;
  sideBar: SideNavItem[];
  pageTitles?: LinkItem[];
}) {
  return (
    <main className="flex">
      <div className="w-1/5  border-r h-screen">
        <Sidebar items={sideBar} pageTitles={pageTitles} />
      </div>
      <div className="w-4/5 h-auto">
        <Header />
        {children}
      </div>
    </main>
  );
}
