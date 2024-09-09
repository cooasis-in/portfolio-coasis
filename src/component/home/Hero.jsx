import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatedTooltipPreview } from "../common/AnimatedTooltipPreview";

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
          <p className="px-[2rem] f-HelveticaNeue text-[14px] text-[#232323] w-[315px] relative font-semibold top-[2rem] text-start">
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
      <div className="p-[4rem] flex flex-col lg:flex-row justify-between items-center mt-[2rem]">
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
        {/* 2 */}
        <div className="w-full lg:w-[50%] px-4 md:px-8 lg:px-[4rem] flex flex-col justify-around mt-8 lg:mt-0">
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
          <div className="flex flex-col md:flex-row pl-3">
            <p className="f-HelveticaNeue mb-4 md:mb-0">
              The largest and most vibrant Indian designer community for
              entrepreneurs, creative minds, and digital wizards.
            </p>
            <p className="">
              Online and offline sessions organized by pros are the place to
              upgrade your knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd */}

      <div className="bg-[#2229FF] mt-[5rem] rounded-t-[2.5rem] text-white py-12  ">
        <div className="px-[10rem]">
          <h2 className="text-center text-[50px] my-[4rem]">
            Explore our vibrant community
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-[#00FB873D] rounded-3xl p-6 pl-[1rem] pr-[5rem] text-start md:w-1/3">
              <h3 className="text-[27px] text-[#EEE8E2] mb-[3rem]">
                12,000+ Designers from all over the 🌍
              </h3>
              <p className="text-[16px] f-HelveticaNeuelight text-[#EEE8E2]/80">
                All in one place to supercharge your career. Since 2020,
                creatives have found refuge in our community where organic
                discussions, work sessions and resources are shared
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#00FB873D] p-6 pl-[1rem] pr-[5rem]  rounded-3xl text-start md:w-1/3">
              <h3 className="text-[27px] text-[#EEE8E2] mb-[3rem]">
                1000+ Professional Design Resources 📚
              </h3>
              <p className="text-[16px] f-HelveticaNeuelight text-[#EEE8E2]/80">
                Spanning across all design fields, find tons of resources for
                design tools, inspiration, design talks, cheat sheets, articles,
                tutorials, and more, all updated daily, backed by the community.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#00FB873D] p-6 pl-[1rem] pr-[5rem] rounded-3xl text-start md:w-1/3">
              <h3 className="text-[27px] text-[#EEE8E2] mb-[3rem]">
                Work sharing and portfolio feedback 👩‍💻
              </h3>
              <p className="text-[16px] f-HelveticaNeuelight text-[#EEE8E2]/80">
                All in one place to supercharge your career. Since 2020,
                creatives have found refuge in our community where organic
                discussions, work sessions and resources are shared
              </p>
            </div>
          </div>
        </div>
        {/* animation */}

        <div className="relative  mt-[7rem]">
          {/* Text moving from left to right */}
          <div className="px-[10rem]">
            <div className="relative  overflow-x-hidden w-screen h-[6rem] ml-[2rem] mt-[5rem] flex justify-center items-center">
              {/* Subtle blue shadow gradient on the left */}
              <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-[#2229FF] z-40 via-[#2229FF]/30 to-transparent pointer-events-none"></div>

              <div className="whitespace-nowrap animate-move-right text-lg font-medium text-fade-right">
                <span className="inline-block text-[85px] f-PPNeueBit">
                  VISUAL DESIGNER PRODUCT DESIGNER UX DESIGNER
                </span>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="z-50 absolute top-[-1.5rem] left-[11.5rem] w-screen">
            <img src="images/Rectangleleft.svg" alt="" />
          </div>
          {/* right line */}
          <div className="absolute w-screen top-[9.8rem]">
            <img src="images/RectangleRight.svg" alt="" />
          </div>

          <div className="absolute top-[-1.7rem] left-[11.4rem]">
            <img src="images/square.svg" alt="" />
          </div>
          <div className="absolute left-[11.4rem] top-[6.7rem]">
            <img src="images/square.svg" alt="" />
          </div>

          {/* Square svg 2nd*/}
          <div className="absolute top-[9.7rem] z-50 right-[11.2rem]">
            <img src="images/square.svg" alt="" />
          </div>
          <div className="absolute top-[17.99rem] right-[11.1rem]">
            <img src="images/square.svg" alt="" />
          </div>

          {/* community 1st and 2nd */}
          <div className="relative">
            <div className="absolute top-[-9.3rem] left-[11.5rem]">
              <div className="px-[3.4rem] bg-white py-[0.7rem] rounded-md"></div>
            </div>
            <div className="absolute  top-[-8.95rem] left-[12rem]">
              <img src="images/hash.svg" className="w-[0.7rem]" alt="" />
            </div>
            <div className="absolute top-[-9.47rem] left-[13rem]">
              <span className="text-[#2229FF] text-[11.5px] font-[500] f-HelveticaNeue">
                The community
              </span>
            </div>
          </div>
          <div className="relative right-[-66.3rem] top-[11.4rem]">
            <div className="absolute top-[-9.3rem] left-[11.5rem]">
              <div className="px-[3.4rem] bg-white py-[0.7rem] rounded-md"></div>
            </div>
            <div className="absolute  top-[-8.95rem] left-[12rem]">
              <img src="images/hash.svg" className="w-[0.7rem]" alt="" />
            </div>
            <div className="absolute top-[-9.47rem] left-[13rem]">
              <span className="text-[#2229FF] text-[11.5px] font-[500] f-HelveticaNeue">
                The community
              </span>
            </div>
          </div>

          {/* Text moving from right to left */}
          <div className="pr-[13rem] mt-[2rem]">
            <div className="w-full overflow-hidden">
              {" "}
              {/* Ensure container hides overflow */}
              <div className="relative w-full h-[6rem] mt-[3.5rem] flex justify-center items-center">
                {/* Moving text */}
                <div className="whitespace-nowrap animate-move-left text-lg font-medium text-fade-left">
                  <span className="inline-block text-[85px] f-PPNeueBit">
                    VISUAL DESIGNER PRODUCT DESIGNER UX DESIGNER
                  </span>
                </div>

                {/* Right side blue shadow gradient */}
                <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-[#2229FF] z-40 via-[#2229FF]/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
