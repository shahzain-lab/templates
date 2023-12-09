import Image from "next/image";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      title: "Risus sed vulputate odio ut enim blandit eiu tempor incididunt",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      publishedAt: "31 Dec, 2023",
      src: "/assets/home/news/christmas.png",
      tags: ["Business", "website"],
    },
    {
      title: "vulputate Risus sed odio ut enim blandit eiu tempor incididunt",
      desc: "consectetur Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      publishedAt: "31 Dec, 2023",
      src: "/assets/home/news/countertop.png",
      tags: ["website"],
    },
    {
      title: "odio vulputate Risus sed ut enim blandit eiu tempor incididunt",
      desc: "ipsum consectetur Lorem dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      publishedAt: "31 Dec, 2023",
      src: "/assets/home/news/halloween.png",
      tags: ["VC", "Tech", "startup"],
    },
  ];
  return (
    <div className="flex flex-col text-center my-10 py-20 items-center px-40">
      <div className="px-72 mb-16">
        <span className="text-light-depty font-semibold ">OUR NEWS</span>
        <h1 className="text-4xl font-bold pt-3">
          <span className="text-light-main">Latest</span> from Blog
        </h1>
        <p className="text-gray-400 pt-4">
          It will be as simple as occidental in fact, it will be Occidental. It
          will be as simple as occidental in fact, it will be Occidental.
        </p>
      </div>
      <div className="my-10 flex items-start text-start gap-20">
        {blogs.map((blog) => (
          <div key={blog.title} className="w-[300px]">
            <Image
              src={blog.src}
              alt={blog.title}
              width={20}
              height={20}
              className="w-full h-[200px] rounded-[10px]"
            />
            <div className="flex gap-3">
              {blog.tags.map((tg) => (
                <span
                  key={tg}
                  className="bg-gray-100 text-light-main rounded-[12px] my-2 px-3 text-sm font-medium"
                >
                  {tg}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold pb-1">{blog.title}</h2>
            <span className="text-sm text-gray-600 font-bold">
              {blog.publishedAt}
            </span>
            <p className="text-gray-500 text-sm pt-1">{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
