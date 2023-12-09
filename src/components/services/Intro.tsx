import React from "react";
import ButtonWithIcon from "@/shared/ButtonWithIcon";
import { FaArrowRightLong } from "react-icons/fa6";

const Intro = () => {
  return (
    <div>
      <div>
        <span>SERVICES</span>
        <h1>
          <span className="text-light-main">Services</span> We Offer!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          soluta veniam quisquam aspernatur possimus corrupti ratione. Sequi
          aliquam nulla magni odit vero assumenda est, et quis odio inventore
          mollitia officiis!
        </p>
        <ButtonWithIcon Icon={<FaArrowRightLong />}>
          VIEW SERVICES
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default Intro;
