import ButtonWithIcon from "@/shared/ButtonWithIcon";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GetQuote = () => {
  return (
    <div className="flex items-center justify-center px-40">
      <div className="bg-light-main rounded-[12px] text-white text-center py-4 px-56 shadow-md">
        <h1 className="text-4xl font-bold leading-[50px]">
          Ready to Rule the Web? Start <br /> Your Website Journey Today!
        </h1>
        <p className=" mt-4">
          Voluptate aute nisi enim esse id veniam anim. Cupidatat veniam dolor
          nulla fugiat proident esse. Ipsum aute laborum consequat laboris
          commodo sunt ut tempor nulla ipsum fugiat. Ullamco voluptate veniam
          aliquip.
        </p>
        <ButtonWithIcon
          Icon={<FaArrowRightLong />}
          className="bg-white text-light-main my-4"
        >
          Get a quote
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default GetQuote;
