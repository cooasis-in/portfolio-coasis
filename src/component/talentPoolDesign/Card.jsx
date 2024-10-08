import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatedTooltipPreview } from "../common/AnimatedTooltipPreview";
import { Link } from "react-router-dom";

function Card() {
  const [selected, setSelected] = useState("All");

  const filters = [
    "All",
    "Branding",
    "Product",
    "Packaging",
    "Fashion",
    "Tech",
  ];

  return (
    <div className="container bg-[#EEE8E2] f-HelveticaNeue mb-20">
      {/* BODY */}
      <div className="flex flex-col justify-center mt-[2rem]">
        {/* Main Text */}
        <div className="text-[70px] text-black text-center">
          <span className="f-HelveticaNeue">
            <span>Talent </span>
            <span>p</span>
            <span className="relative inline-block align-middle mt-8">
              <AnimatedTooltipPreview />
            </span>{" "}
            <span>l united</span>
          </span>
        </div>

        {/* Subheading */}
        <div className="f-BelgianoSerif text-[70px] leading-10 font-light text-black text-center">
          <span className="f-HelveticaNeue">by design</span>
        </div>
      </div>

      <div className="flex gap-4 p-4 justify-center mt-[4rem]">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`px-4 py-2 rounded-full hover:bg-[#2229FF] hover:text-[#EEE8E2]  ${
              selected === filter
                ? "bg-[#2229FF] text-[#EEE8E2]"
                : "bg-[#DADADA] text-[#212121]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-[70rem] mt-[2rem] mx-auto bg-[#232323] rounded-2xl p-5 shadow-md">
        <div className="relative">
          {/* Image with a Featured Label */}
          <img
            src="images/manPerson.svg"
            alt="Featured"
            className="rounded-lg w-full h-auto object-cover"
          />
          <span className="absolute text-[12px] top-4 right-4 bg-[#2229FF] text-[#EEE8E2] cursor-pointer py-1 px-3 rounded-full">
            featured
          </span>
        </div>
        {/* Title and Description */}
        <div className="text-white mt-4 pr-[15rem]">
          <h2 className="text-[37px] f-HelveticaNeue text-[#EEE8E2] mb-2">
            Forget Animal Print, Microbe is the New Chic
          </h2>
          <p className="f-HelveticaNeue text-[20px] leading-relaxed w-[68%]">
            We are always looking for speakers with inspiring backgrounds and
            incredible technical skills to speak at our events.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className="f-HelveticaNeue flex justify-center">
        <div className="max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-[2.5rem] ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, index) => (
            <div key={index} className="bg-[#232323] rounded-2xl p-4 shadow-md">
              <div className="relative f-HelveticaNeue">
                {/* Image with a Featured Label */}
                <img
                  src="images/smallCard.svg"
                  className="rounded-lg w-full object-cover"
                  alt=""
                />
                <span className="absolute text-[12px] top-4 right-4 bg-[#2229FF] text-[#EEE8E2] cursor-pointer py-1 px-3 rounded-full">
                  featured
                </span>
              </div>
              {/* Title and Description */}
              <div className="text-white mt-4 ">
                <h3 className="text-[25px] text-[#EEE8E2] f-HelveticaNeue mb-2">
                  The designer's spin on the table tennis
                </h3>
                <p className="text-sm leading-relaxed f-HelveticaNeue text-[#EEE8E2]/60">
                  Shubhangi's nimbus matched tradition with technology
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/thirdPage">
        <div className="flex justify-center items-center mt-6">
          <button className="bg-[#2229FF] cursor-pointer f-HelveticaNeue p-2 px-5 rounded-full text-[#EEE8E2]">
            Show more
          </button>
          <p className="p-3 bg-[#C7C9FF] text-[#2229FF] rounded-full cursor-pointer">
            <FaArrowRightLong />
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
