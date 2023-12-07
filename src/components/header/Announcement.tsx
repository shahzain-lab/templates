import { useTheme } from "@/lib/context/ThemeContext";
import { cn } from "@/lib/utils";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Social from "@/shared/Social";

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
      <Social />
    </div>
  );
};

export default Announcement;
