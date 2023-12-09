import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center my-10 px-40">
      <div className="flex items-center gap-4 mb-10 font-semibold">
        <span className="flex items-center gap-2 border-2 border-light-main text-light-main bg-white shadow-lg rounded-[12px] p-5">
          <IoBookOutline />
          Our Vision
        </span>
        <span className="flex items-center gap-2 bg-white shadow-lg rounded-[12px] p-5">
          <BsFlag />
          Our Mission
        </span>
        <span className="flex items-center gap-2 bg-white shadow-lg rounded-[12px] p-5">
          <GoGoal />
          Our Goal
        </span>
      </div>
      <div className="grid grid-cols-2 my-16">
        <Image
          src={"/assets/home/m_about.jpg"}
          alt="vision"
          width={10}
          height={10}
          className="w-[300px] h-full rounded-[12px]"
        />
        <div className="flex flex-col gap-5">
          <IoBookOutline className="text-4xl text-light-main" />
          <h2 className="text-4xl font-bold">
            Creating a Legacy <br /> of Groundbreaking <br /> Achievements
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            libero repudiandae saepe! Odit autem accusamus unde illum et officia
            ipsam soluta beatae atque sit reprehenderit quis voluptatem
            doloribus dolores, aspernatur dolorem iste neque fugiat assumenda
            incidunt? Ea soluta non, in impedit, nostrum nulla velit cupiditate
            aliquam omnis minima enim hic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
