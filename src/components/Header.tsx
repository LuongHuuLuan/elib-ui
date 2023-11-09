import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import profileAvatar from "../assets/images/profile.jpg";

type Props = {};

export default function Header({}: Props) {
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
        <div className="w-[70px] h-full flex justify-center items-center border-r-2">
          <Image
            src={profileAvatar}
            alt="logo"
            className="m-auto rounded-full"
            width={35}
          />
        </div>
      </div>
    </div>
  );
}
