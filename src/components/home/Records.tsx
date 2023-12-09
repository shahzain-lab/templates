import React from "react";
import { IoRocket } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FaAward } from "react-icons/fa6";

const Records = () => {
  return (
    <div className="bg-light-depty flex items-center flex-col text-gray-200 text-center px-40 py-20 justify-center">
      <h1 className="text-5xl font-bold">
        Best Solutions for your{" "}
        <span className="text-light-main">Business</span>
      </h1>
      <p className="w-[70%] text-sm py-5">
        Mushrooms stuffed with a mixture of cream cheese, garlic, herbs, and
        breadcrumbs. Cherry tomatoes, fresh mozzarella, and basil leaves on
        toothpicks, drizzled with balsamic glaze.
      </p>
      <div className="flex items-start my-10 gap-32">
        <div className="flex flex-col text-center items-center p-4 gap-2">
          <IoRocket className="text-[80px]" />
          <h1 className="text-4xl font-semibold pt-2 ">2381</h1>
          <p className="text-gray-400 font-bold">Projects</p>
        </div>
        <div className="flex flex-col text-center items-center p-4 gap-2">
          <FaUserPlus className="text-[80px]" />
          <h1 className="text-4xl font-semibold pt-2 ">330</h1>
          <p className="text-gray-400 font-bold">No. of Clients</p>
        </div>
        <div className="flex flex-col text-center items-center p-4 gap-2">
          <MdMeetingRoom className="text-[80px]" />
          <h1 className="text-4xl font-semibold pt-2 ">1430</h1>
          <p className="text-gray-400 font-bold">Meetings</p>
        </div>
        <div className="flex flex-col text-center items-center p-4 gap-2">
          <FaAward className="text-[80px]" />
          <h1 className="text-4xl font-semibold pt-2 ">40</h1>
          <p className="text-gray-400 font-bold">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Records;
