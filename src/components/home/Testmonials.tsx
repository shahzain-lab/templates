"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testmonials = () => {
  const slides = [
    {
      src: "/assets/home/review/m_review1.jpg",
      feed: "I recently had the opportunity to explore the web services offered by [Your Company Name], and I must say, the experience was nothing short of exceptional. As a discerning user with a keen eye for seamless solutions, I was thoroughly impressed by the range of services and the level of quality delivered.",
      review_count: 5,
      name: "Olivia Davis",
      status: "BrightWave Solutions",
    },
    {
      src: "/assets/home/review/m_review2.jpg",
      feed: "I recently had the opportunity to explore the web services offered by [Your Company Name], and I must say, the experience was nothing short of exceptional. As a discerning user with a keen eye for seamless solutions, I was thoroughly impressed by the range of services and the level of quality delivered.",
      review_count: 5,
      name: "Ethan Rodriguez",
      status: "Peak Performance Solutions",
    },
    {
      src: "/assets/home/review/m_review3.jpg",
      feed: "I recently had the opportunity to explore the web services offered by [Your Company Name], and I must say, the experience was nothing short of exceptional. As a discerning user with a keen eye for seamless solutions, I was thoroughly impressed by the range of services and the level of quality delivered.",
      review_count: 5,
      name: "Ethan Williams",
      status: "Apex Enterprises",
    },
    {
      src: "/assets/home/review/m_review4.jpg",
      feed: "I recently had the opportunity to explore the web services offered by [Your Company Name], and I must say, the experience was nothing short of exceptional. As a discerning user with a keen eye for seamless solutions, I was thoroughly impressed by the range of services and the level of quality delivered.",
      review_count: 5,
      name: "Lucas Kim",
      status: "Quantum Leap Technologies",
    },
  ];
  return (
    <div className="flex flex-col text-center my-10 py-20 bg-light-alpha items-center px-40">
      <div className="px-72 mb-16">
        <span className="text-light-depty font-semibold ">TESTIMONIALS</span>
        <h1 className="text-4xl font-bold pt-3">
          <span className="text-light-main">Outstanding</span> Customer Feedback
        </h1>
        <p className="text-gray-400 pt-4">
          Tempor nulla aute culpa et consectetur qui et irure sint magna
          voluptate aliquip tempor ex in. Id et amet est enim excepteur amet ea
          sit.
        </p>
      </div>
      <Carousel>
        {slides.map((slide) => (
          <div
            key={slide.src}
            className="min-h-[50vh] rounded-[20px] flex bg-white p-10 items-start gap-5"
          >
            <div className="w-[40%]">
              <Image
                src={slide.src}
                alt={slide.name}
                width={100}
                height={100}
                className="h-[400px] w-[300px] object-cover rounded-[20px] shadow-lg"
              />
            </div>
            <div className="text-start flex justify-center pt-10 w-[60%]">
              <div className="w-[70%]">
                <p className="flex w-[80%] text-base text-gray-600 leading-10">
                  <FaQuoteLeft className="text-[120px] -mt-14 mr-3" />
                  {slide.feed}
                </p>
                <div className="flex gap-2 mt-3 px-8">
                  {Array(slide.review_count)
                    .fill(undefined)
                    .map((r, i) => (
                      <span key={i} className={``}>
                        <FaStar className="text-[#ff8057]" />
                        {r}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testmonials;
