import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div className={`text-white flex items-center gap-3 font-bold text-[20px]`}>
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
  );
};

export default Social;
