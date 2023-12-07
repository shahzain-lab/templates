import Social from "@/shared/Social";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const services = [
    { name: "Web Design", path: "" },
    { name: "Logo Design", path: "" },
    { name: "Web Hosting", path: "" },
    { name: "White Labeling", path: "" },
    { name: "Web Development", path: "" },
  ];
  const links = [
    { name: "Services", path: "" },
    { name: "About Us", path: "" },
    { name: "Happy Customers", path: "" },
    { name: "Portfolio", path: "" },
    { name: "Help Center", path: "" },
  ];
  const news = [
    {
      title: "sit amet consectetur adipisicing elit. Rerum, rem.",
      path: "#",
      media: "/assets/png/news/christmas.png",
      publishedAt: "Nov 19, 2023",
    },
    {
      title: "Non nulla maiores est explicabo perspiciatis ipsam?",
      path: "#",
      media: "/assets/png/news/countertop.png",
      publishedAt: "Jan 01, 2024",
    },
    {
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      path: "#",
      media: "/assets/png/news/halloween.png",
      publishedAt: "Dec 21, 2023",
    },
  ];
  return (
    <div className={`grid grid-cols-3 gap-4 bg-light-depty p-12 text-white`}>
      <div className="flex items-center justify-center">
        <div
          className={`w-[80%] text-center shadow-lg p-3 flex flex-col items-center h-full bg-light-main rounded-[20px]`}
        >
          <Image
            src={"https://flowbite.com/images/logo.svg"}
            alt=""
            width={70}
            height={70}
            className=""
          />
          <span className="py-3 font-bold text-3xl">Rizel</span>
          <p className="pb-4">
            Molti is a Professionally Designed Multipurpose Child Theme for
            Divi. And you can use it to create almost any kind of Website with
            Divi.
          </p>
          <Social />
        </div>
      </div>
      <div className={`flex items-start gap-10`}>
        <div>
          <span className={`text-xl font-extrabold`}>Our Services</span>
          <ul className={`mt-3 flex flex-col gap-5`}>
            {services.map((service, i) => (
              <li className="text-sm" key={i}>
                <Link href={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className={`text-xl font-extrabold`}>Other Links</span>
          <ul className={`mt-3 flex flex-col gap-5`}>
            {links.map((link, i) => (
              <li className="text-sm" key={i}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <span className={`text-xl font-extrabold `}>Latest News</span>
        <div className={`flex flex-col gap-3 mt-3`}>
          {news.map((item, i) => (
            <Link
              href={item?.path}
              key={i}
              className={`flex items-start gap-2`}
            >
              <Image
                src={item.media}
                alt={item.title}
                width={100}
                height={100}
                className={`rounded-[12px]`}
              />
              <div className={`flex flex-col gap-2`}>
                <span className={`font-bold`}>{item?.title}</span>
                <span className={`text-sm font-semibold text-gray-400`}>
                  {item?.publishedAt}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
