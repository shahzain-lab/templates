import React from "react";
import ButtonWithIcon from "@/shared/ButtonWithIcon";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 px-20">
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
    </div>
  );
};

export default Intro;
