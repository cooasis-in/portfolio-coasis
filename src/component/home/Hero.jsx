import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatedTooltipPreview } from "../common/AnimatedTooltipPreview";
import OurCommunity from "./OurCommunity";

function Hero() {
  return (
    <div className="bg-[#EEE8E2] f-HelveticaNeue">
      <main className="w-full flex flex-col justify-center items-center">
        {/* Blue Line */}
        <div className="absolute top-[18rem] w-[1000px]">
          <img src="images/blueSquare.svg" alt="" />
        </div>
        {/* blue arrow(rupesh) */}
        <div className="absolute left-[12.2rem] top-[31.8rem]">
          <img src="images/arrow.svg" alt="" />
        </div>
        {/* blue Dot */}
        {/* left */}
        <div className="absolute left-[16.5rem] top-[17.7rem]">
          <img src="images/blueDot.svg" alt="" />
        </div>
        <div className="absolute left-[16.5rem] top-[31.5rem]">
          <img src="images/blueDot.svg" alt="" />
        </div>

        {/* right */}
        <div className="absolute right-[16.5rem] top-[31.5rem]">
          <img src="images/blueDot.svg" alt="" />
        </div>
        <div className="absolute right-[16.5rem] top-[17.7rem]">
          <img src="images/blueDot.svg" alt="" />
        </div>
        {/* Blue dot end */}
        <div className="relative flex flex-col text-center">
          <p className="text-[#232323] leading-[13rem] f-PPNeueBit text-[280px]">
            connect
          </p>
          {/* arrow 2(akshay) */}
          <div className="absolute right-[3rem] top-[7rem]">
            <img src="images/arrow2.svg" alt="" />
          </div>
          <p className="text-[#2229FF] leading-[14rem] f-HelveticaNeue text-[178px]">
            colabborate
          </p>
        </div>
        <div className="mt-[-1rem] md:mt-[-2rem] lg:mt-[-3rem] xl:mt-[-4rem] flex flex-col md:flex-row gap-8 justify-center items-center text-center">
          <span className="mt-[1rem] f-BelgianoSerif text-[190px]">create</span>
          <p className="px-[2rem] f-HelveticaNeue text-[14px] text-[#232323] w-[315px] relative font-[600] top-[2rem] text-start">
            The largest and most vibrant Indian community for entrepreneurs,
            creative minds, and digital wizards who want to design and develop
            something amazing. Here we help each other and make magic together.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#2229FF] cursor-pointer p-2 px-3 rounded-full text-[#EEE8E2]">
            Join the community
          </button>
          <p className="p-3 bg-[#C7C9FF] text-[#2229FF] rounded-full cursor-pointer">
            <FaArrowRightLong />
          </p>
        </div>
      </main>

      {/* 2nd layout */}
      <div className="p-[4rem] px-[5rem] flex flex-col lg:flex-row justify-between items-center mt-[2rem]">
        {/* 1 */}
        <div className="w-full lg:w-[50%] pt-9 px-10 leading-snug text-center lg:text-start">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] f-HelveticaNeue">
            Together we unleash the design revolution around the globe
          </h1>
          <div className="relative mt-4">
            <div className="absolute flex -space-x-4 top-[-1.5rem] md:top-[-2rem] lg:top-[-4.5rem] left-1/2 lg:left-[14rem] transform -translate-x-1/2 lg:transform-none">
              <AnimatedTooltipPreview />
            </div>
          </div>
        </div>
        {/* px-[4rem] */}
        {/* 2 */}
        <div className="w-full lg:w-[50%]  flex flex-col px-[3rem] justify-around mt-8 lg:mt-0">
          <div className="flex items-center justify-between mb-4">
            <span className="f-PPNeueBit text-[40px] sm:text-[60px] md:text-[80px] lg:text-[150px] text-[#2229FF] font-bold">
              1100
            </span>
            <img src="images/plus.svg" alt="Plus" />
            <span className="f-PPNeueBit text-[90px] sm:text-[60px] md:text-[80px] lg:text-[150px] text-[#2229FF] font-bold">
              40
            </span>
            <img src="images/plus.svg" alt="Plus" />
          </div>
          <div className="flex flex-col md:flex-row gap-x-[6rem] text-[20px]">
            <p className="f-HelveticaNeuelight">
              The largest and most vibrant Indian designer community for
              entrepreneurs, creative minds, and digital wizards.
            </p>
            <p className="f-HelveticaNeuelight">
              Online and offline sessions organized by pros are the place to
              upgrade your knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd */}

      {/* <OurCommunity /> */}
    </div>
  );
}

export default Hero;
