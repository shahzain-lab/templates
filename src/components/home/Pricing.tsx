import ButtonWithIcon from "@/shared/ButtonWithIcon";
import React from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";

const Pricing = () => {
  const plans = [
    {
      name: "ECONOMY",
      desc: "Great for Personal Websites!",
      monthlyPrice: "$99",
      yearlyPrice: "$299",
      tags: [
        "1 Page Website",
        "Modern",
        "SEO Friendly for Google",
        "Social Media Integration",
        "1 Year Free Hosting",
        "Free SSL Security",
      ],
    },
    {
      name: "PREMIUM",
      desc: "Great for Team/Bigger Websites!",
      monthlyPrice: "$199",
      yearlyPrice: "$499",
      tags: [
        "3 Page Website",
        "AI Powered Content",
        "SEO Friendly for Google",
        "Social Media Integration",
        "1 Year Free Hosting",
        "Free SSL Security",
      ],
    },
    {
      name: "ECONOMY",
      desc: "Great for Agency/Corporate Websites!",
      monthlyPrice: "$299",
      yearlyPrice: "$799",
      tags: [
        "7+ Page Website",
        "Chrome Extension",
        "SEO Friendly for Google",
        "Social Media Integration",
        "1 Year Free Hosting",
        "Free SSL Security",
      ],
    },
  ];
  return (
    <div className="flex flex-col text-center my-14 items-center px-56">
      <div className="px-72 mb-16">
        <span className="text-light-depty font-semibold ">
          TRANSPARENT PRICING
        </span>
        <h1 className="text-4xl font-bold pt-3">
          Simple Payment <span className="text-light-main">Plans</span>
        </h1>
        <p className="text-gray-400 pt-4">
          Tempor nulla aute culpa et consectetur qui et irure sint magna
          voluptate aliquip tempor ex in. Id et amet est enim excepteur amet ea
          sit.
        </p>
      </div>
      <div className="flex w-full justify-around">
        {plans.map((plan, i) => (
          <div
            className={`w-[330px] ${
              i === 1
                ? "bg-[#1b172e] text-white shadow-lg -mb-3"
                : "border border-gray-300"
            }  px-5 py-6 rounded-[12px] text-start`}
            key={plan.name}
          >
            <span className="font-bold text-lg tracking-widest">
              {plan.name}
            </span>
            <p className="text-[12px] text-gray-500 py-3">{plan.desc}</p>
            <h1 className="text-6xl font-bold">
              {plan.monthlyPrice} <span className="text-2xl">/ month</span>
            </h1>
            <ul className="flex flex-col gap-4 my-10">
              {plan.tags.map((tg) => (
                <li key={tg} className="flex items-center text-base">
                  <TiTick className="text-light-main text-2xl" />
                  {tg}
                </li>
              ))}
            </ul>
            <div className="flex justify-center my-4">
              <ButtonWithIcon
                size="lg"
                Icon={<FaArrowRightLong />}
                className="mx-auto"
              >
                Get started Now
              </ButtonWithIcon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
