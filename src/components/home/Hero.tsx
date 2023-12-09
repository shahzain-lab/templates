import ButtonWithIcon from "@/shared/ButtonWithIcon";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="p-20">
        <h1 className="text-6xl font-extrabold leading-[65px]">
          Build Professional Websites with{" "}
          <span className="text-light-main">Rizel</span>
        </h1>
        <div className="flex items-center gap-2 my-4">
          <span className="flex items-center text-sm py-1 px-4 text-light-main rounded-[20px] gap-2 bg-gray-100">
            Best Selling <LuExternalLink />
          </span>
          <span className="flex items-center text-sm py-1 px-4  rounded-[20px] gap-2 bg-gray-100">
            Testmonials <LuExternalLink />
          </span>
        </div>
        <p>
          Elevate your web design game with Molti, the popular Divi child theme,
          Impress your clients with Molti’s versatility, ease of use, and
          powerful features.
        </p>
        <div className="flex items-center gap-3 my-10">
          <ButtonWithIcon Icon={<FaArrowRightLong />}>Services</ButtonWithIcon>
          <ButtonWithIcon
            Icon={<FaArrowRightLong />}
            className="border border-light-main text-light-main"
            variant="outline"
          >
            About Us
          </ButtonWithIcon>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Featured In</h3>
          <div className="my-3 flex items-center gap-4">
            <Image
              src={"/assets/home/icons/forbes.png"}
              alt=""
              width={50}
              height={70}
              className="rounded-full "
            />
            <Image
              src={"/assets/home/icons/yorkTime.png"}
              alt=""
              width={40}
              height={40}
              className="rounded-full "
            />
            <Image
              src={"/assets/home/icons/forbes.png"}
              alt=""
              width={50}
              height={70}
              className="rounded-full "
            />
            <Image
              src={"/assets/home/icons/yorkTime.png"}
              alt=""
              width={40}
              height={40}
              className="rounded-full "
            />
          </div>
        </div>
      </div>
      <div className="relative px-40">
        <Image
          src={"/assets/home/m_hero_man.png"}
          alt="hero man"
          width={100}
          height={100}
          className="h-[80vh] z-50 w-auto"
        />
        <Image
          src={"/assets/home/m_hero_line.png"}
          alt="hero man"
          width={100}
          height={100}
          className="h-[100vh] w-auto absolute -top-28 -right-12"
        />
      </div>
    </div>
  );
};

export default Hero;
