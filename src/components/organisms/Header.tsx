"use client";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import {
  faArrowRightToBracket,
  faBars,
  faBook,
  faChalkboardUser,
  faGear,
  faLanguage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import profileAvatar from "@/assets/images/profile.jpg";
import Menu from "@/components/molecules/Menu";
import PoperWrapper from "@/components/atoms/PoperWrapper";
import { faZhihu } from "@fortawesome/free-brands-svg-icons";

type Props = {};

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Thông tin",
    to: "/profile",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Cài đặt",
    children: [
      {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "Ngôn ngữ",
        children: [
          {
            title: "Tiếng Việt",
            code: "vi",
            action: true,
          },
          {
            title: "Tiếng Anh",
            code: "en",
            action: true,
          },
          {
            title: "Tiếng Trung",
            code: "zh",
            action: true,
          },
        ],
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faChalkboardUser} />,
    title: "Quản lý",
    children: [
      {
        icon: <FontAwesomeIcon icon={faBook} />,
        title: "Quản lý sách",
        to: "/elib/admin",
      },
      {
        icon: <FontAwesomeIcon icon={faZhihu} />,
        title: "Quản lý từ",
        to: "/edict/admin",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
    title: "Đăng xuất",
    to: "/logout",
  },
];

export default function Header({}: Props) {
  const [show, setShow] = useState(false);

  const menuPoper = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!show) return;
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (menuPoper.current && !menuPoper.current.contains(target)) {
        setShow(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [menuPoper.current]);

  const toggleMenu = (): void => setShow(!show);
  return (
    <div className="h-[70px] border flex justify-between">
      <div className="w-[70px] flex justify-center items-center border-r-2">
        <FontAwesomeIcon
          icon={faBars}
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div className="flex mr-2">
        <div className="w-[70px] h-full flex justify-center items-center border-r-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <div className="w-[70px] h-full flex justify-center items-center border-r-2">
          <FontAwesomeIcon
            icon={faBell}
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <div
          className="w-[70px] relative h-full flex justify-center items-center border-r-2 cursor-pointer"
          ref={menuPoper}
          onClick={toggleMenu}
        >
          <img
            src='/images/profile.jpg'
            alt="logo"
            className="m-auto rounded-full"
            width={35}
          />
          <PoperWrapper show={show} setShow={setShow} position="bottom" offset="start">
            <Menu
              items={MENU_ITEMS}
              title="Vịt Anh"
              onChange={(e, item) => {
                switch (item.code) {
                  case "vi":
                    console.log("Tiếng Việt", item);
                    break;
                  case "en":
                    console.log("Tiếng Anh", item);
                    break;
                  case "zh":
                    console.log("Tiếng Trung", item);
                    break;
                  default:
                    break;
                }
              }}
            />
          </PoperWrapper>
        </div>
      </div>
    </div>
  );
}
