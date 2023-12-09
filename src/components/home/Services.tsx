import ButtonWithIcon from "@/shared/ButtonWithIcon";
import React from "react";
import { FaArrowRightLong, FaCode } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: <AiOutlineAntDesign />,
      title: "Web Design",
      desc: "Nisi fugiat excepteur do amet eiusmod et laborum veniam sint eu tempor. Aliquip magna mollit elit.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Nisi fugiat excepteur do amet eiusmod et laborum veniam sint eu tempor. Aliquip magna mollit elit.",
    },
    {
      icon: <GiArtificialIntelligence />,
      title: "AI Services",
      desc: "Nisi fugiat excepteur do amet eiusmod et laborum veniam sint eu tempor. Aliquip magna mollit elit.",
    },
    {
      icon: <SiHiveBlockchain />,
      title: "Blockchain",
      desc: "Nisi fugiat excepteur do amet eiusmod et laborum veniam sint eu tempor. Aliquip magna mollit elit.",
    },
  ];
  return (
    <div className="px-36 flex ">
      <div className="px-16 flex flex-col gap-4">
        <span className={`text-light-depty text-sm font-semibold`}>
          Services
        </span>
        <h3 className="text-4xl font-bold">
          Our Diverse Range of Digital Services
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. consequuntur
          facilis tempora minus sapiente voluptas.
        </p>
        <ButtonWithIcon Icon={<FaArrowRightLong />}>Contact Us</ButtonWithIcon>
      </div>
      <div className="grid grid-cols-2 gap-10 w-[70%]">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white flex flex-col gap-3 shadow-lg rounded-[15px] p-10"
          >
            <span className="text-3xl text-light-main">{service.icon}</span>
            <span className="font-bold text-xl">{service.title}</span>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
