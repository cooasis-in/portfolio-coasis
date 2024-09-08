import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <div className="bg-[#EEE8E2] f-HelveticaNeue">
      {/* BODY */}
      <div className="flex flex-col justify-center mt-[8rem]">
        {/* Main Text */}
        <div className="text-[70px]  text-black text-center">
          Talent p
          <span className="relative inline-block">
            {/* Adding avatar images inside text */}o
            <span className="absolute flex top-[-25px] left-[10px] space-x-[-10px]">
              {/* Avatar images */}
              <img
                src="images/person-avatar1.svg"
                alt="Avatar 1"
                className="w-8 h-8"
              />
              <img
                src="images/person-avatar2.svg"
                alt="Avatar 2"
                className="w-8 h-8"
              />
              <img
                src="images/person-avatar3.svg"
                alt="Avatar 3"
                className="w-8 h-8"
              />
            </span>
          </span>
          l united
        </div>
        {/* Subheading */}
        <div className="text-[70px] font-light text-black mt-4 text-center">
          by design
        </div>
      </div>

      <div className="flex gap-4 p-4 justify-center mt-[4rem]">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`px-4 py-2 rounded-full  ${
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
          <h2 className="text-[30px] text-[#EEE8E2] mb-2">
            Forget Animal Print, Microbe is the New Chic
          </h2>
          <p className="text-sm leading-relaxed w-[55%]">
            We are always looking for speakers with inspiring backgrounds and
            incredible technical skills to speak at our events.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className="flex justify-center">
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

      <div className="flex justify-center items-center mt-[3rem]">
        <button className="bg-[#2229FF] cursor-pointer p-2 px-5 rounded-full text-[#EEE8E2]">
          Show more
        </button>
        <p className="p-3 bg-[#C7C9FF] text-[#2229FF] rounded-full cursor-pointer">
          <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
}

export default Card;
