import React from "react";
import ButtonWithIcon from "@/shared/ButtonWithIcon";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Intro = () => {
  return (
    <div
      className="grid grid-cols-2 pb-36 px-20 relative"
      style={{
        backgroundImage: "url(/assets/bg/m_hero.png)",
        backgroundPosition: "left bottom 0px",
        backgroundSize: "initial",
      }}
    >
      <div className=" flex flex-col justify-center pr-24 items-start gap-3">
        <span className="text-[12px] text-light-depty font-bold">SERVICES</span>
        <h1 className="text-6xl font-extrabold">
          <span className="text-light-main">Services</span> We Offer!
        </h1>
        <p className="text-gray-500 pb-5 leading-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          soluta veniam quisquam aspernatur possimus corrupti ratione. Sequi
          aliquam nulla magni odit vero assumenda est, et quis odio inventore
          mollitia officiis!
        </p>
        <ButtonWithIcon Icon={<FaArrowRightLong />}>
          VIEW SERVICES
        </ButtonWithIcon>
      </div>

      <div className="w-full">
        <Image
          src={"/assets/services/m_service.png"}
          alt=""
          width={20}
          height={20}
          className="w-full h-auto"
        />
      </div>

      <div>
        <svg
          className="absolute bottom-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
        >
          <g fill="#ffffff">
            <path
              d="M1280 0l-266 91.52a72.59 72.59 0 0 1-30.76 3.71L0 0v140h1280z"
              fillOpacity=".5"
            />
            <path d="M1280 0l-262.1 116.26a73.29 73.29 0 0 1-39.09 6L0 0v140h1280z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
