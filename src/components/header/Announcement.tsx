import { useTheme } from "@/lib/context/ThemeContext";
import { cn } from "@/lib/utils";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const Announcement = () => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        `bg-${theme}-main w-full py-2`,
        `flex justify-between px-10`,
      )}
    >
      <div className="flex items-center gap-3">
        <span className={`text-white flex items-center gap-2`}>
          <FaPhoneAlt />
          +1 234 567 8
        </span>
        <span className={`text-white flex items-center gap-2`}>
          <MdEmail className="text-[20px]" />
          contact@molti.com
        </span>
      </div>
      <div
        className={`text-white flex items-center gap-3 font-bold text-[20px]`}
      >
        <Link href={"#"}>
          <FaFacebookF />
        </Link>
        <Link href={"#"}>
          <FaXTwitter />
        </Link>
        <Link href={"#"}>
          <FaInstagram />
        </Link>
        <Link href={"#"}>
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Announcement;
