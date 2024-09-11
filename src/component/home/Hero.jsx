import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatedTooltipPreview } from "../common/AnimatedTooltipPreview";
import OurCommunity from "./OurCommunity";
import { section } from "framer-motion/m";
import './hero.css';

function Hero() {
  return (
    <>
      <section className="hero-sec">
        <div className="container mx-auto">
          <main className="w-full flex flex-col justify-center items-center">
            <div className="relative flex flex-col text-center">
              <p className="text-[#232323] leading-[7rem] f-PPNeueBit text-[200px]">
                connect <br />
                <span className="text-[#2229FF] leading-[14rem] f-HelveticaNeue text-[148px]">colabborate</span>
              </p>
              {/* Blue Line */}
              <div className="absolute top-[9rem] right-[-2.5rem]">
                <img src="images/blueSquare.svg" alt="" className="max-w-[850px]" />
              </div>
              {/* blue arrow(rupesh) */}
              <div className="absolute left-[-6rem] bottom-[-2.9rem] z-20">
                <img src="images/arrow.svg" alt="" />
              </div>
              {/* blue Dot */}
              {/* left */}
              <div className="absolute left-[-1.8rem] top-[8.7rem]">
                <img src="images/blueDot.svg" alt="" />
              </div>
              <div className="absolute left-[-1.75rem] bottom-[-3px]">
                <img src="images/blueDot.svg" alt="" />
              </div>

              {/* right */}
              <div className="absolute right-[-2.9rem] top-[8.7rem]">
                <img src="images/blueDot.svg" alt="" />
              </div>
              <div className="absolute right-[-2.9rem] bottom-[-3px]">
                <img src="images/blueDot.svg" alt="" />
              </div>
              {/* Blue dot end */}
              {/* arrow 2(akshay) */}
              <div className="absolute right-[3.8rem] top-[3.6rem]">
                <img src="images/arrow2.svg" alt="" className="w-[80%]" />
              </div>
            </div>
            <div className="mt-[-1rem] md:mt-[-2rem] lg:mt-[-5rem] xl:mt-[-5rem] flex gap-4 justify-center items-center text-center lg:ml-[4rem]">
              <span className="mt-[1rem] f-BelgianoSerif text-[170px]">create</span>
              <p className="px-[2rem] f-HelveticaNeue leading-[20px] text-[16px] text-[#232323] max-w-[350px] relative top-[2rem] text-start">
                The largest and most vibrant Indian community for entrepreneurs,
                creative minds, and digital wizards who want to design and develop
                something amazing. Here we help each other and make magic together.
              </p>
            </div>
            <div className="flex justify-center items-center mt-[-1rem]">
              <button className="bg-[#2229FF] cursor-pointer p-2 px-3 rounded-full text-[#EEE8E2]">
                Join the community
              </button>
              <p className="p-3 bg-[#C7C9FF] text-[#2229FF] rounded-full cursor-pointer">
                <FaArrowRightLong />
              </p>
            </div>
          </main>
        </div>
      </section>

      {/* Second Section*/}
      <div className="container p-2 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 pt-9 px-10  leading-[50px] text-center lg:text-start">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] f-HelveticaNeue">
            Together we unleash the design revolution around the globe
          </h1>
          <div className="relative mb-10">
            <div className="absolute flex top-0 md:top-[-2rem] lg:top-[-3rem] left-1/2 lg:left-[14rem]">
              <AnimatedTooltipPreview />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col px-[3rem] justify-around mt-8 lg:mt-0">
          <div className="flex items-center justify-between">
            <span className="f-PPNeueBit text-[40px] sm:text-[60px] md:text-[80px] lg:text-[150px] text-[#2229FF] font-bold">
              1100
            </span>
            <img src="images/plus.svg" alt="Plus" />
            <span className="f-PPNeueBit text-[90px] sm:text-[60px] md:text-[80px] lg:text-[150px] text-[#2229FF] font-bold">
              40
            </span>
            <img src="images/plus.svg" alt="Plus" />
          </div>
          <div className="flex leading-6 flex-col md:flex-row gap-x-[3rem] text-[18px]">
            <p className="f-HelveticaNeuelight">
              The largest and most vibrant Indian designer community for entrepreneurs, creative minds, and digital wizards.
            </p>
            <div>
              <p className="f-HelveticaNeuelight">
                Online and offline sessions organized by pros are the place to upgrade your knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* 3rd */}

      <OurCommunity />
    </>
  );
}

export default Hero;