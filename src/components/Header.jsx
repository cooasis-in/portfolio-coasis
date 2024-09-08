import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <div className="bg-[#EEE8E2]">
      <nav className="flex justify-between p-8 items-center z-40">
        <div></div>
        <img className="cursor-pointer" src="images/logo.svg" alt="Logo" />
        <p className="text-[#232323] text-[20px] cursor-pointer">Menu</p>
      </nav>

      <main className="w-full flex flex-col justify-center items-center">
        <div className="leading-[3rem] md:leading-[8rem] lg:leading-[12rem] xl:leading-[20rem] flex flex-col text-center">
          <p className="text-[#232323] text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px]">
            connect
          </p>
          <p className="text-[#2229FF] text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] mt-[-2rem] md:mt-[-3rem] lg:mt-[-5rem] xl:mt-[-7rem]">
            colabborate
          </p>
        </div>
        <div className="mt-[-1rem] md:mt-[-2rem] lg:mt-[-3rem] xl:mt-[-4rem] flex flex-col md:flex-row gap-8 justify-center items-center text-center">
          <span className="text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[250px]">
            create
          </span>
          <p className="w-full md:w-[315px] relative top-[1rem] md:top-[2rem] font-bold text-start px-4">
            The largest and most vibrant Indian community for entrepreneurs,
            creative minds, and digital wizards who want to design and develop
            something amazing. Here we help each other and make magic together.
          </p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="bg-[#2229FF] cursor-pointer p-2 px-3 rounded-full text-[#EEE8E2]">
            Join the community
          </button>
          <p className="p-3 bg-[#C7C9FF] text-[#2229FF] rounded-full cursor-pointer">
            <FaArrowRightLong />
          </p>
        </div>
      </main>

      {/* 2nd layout */}
      <div className="p-[4rem] flex flex-col lg:flex-row justify-between items-center mt-[3rem] md:mt-[6rem] lg:mt-[10rem]">
        {/* 1 */}
        <div className="w-full lg:w-[50%] pt-9 px-10 leading-snug text-center lg:text-start">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px]">
            Together we unleash the design revolution around the globe
          </h1>
          <div className="relative mt-4">
            <div className="absolute flex -space-x-4 top-[-1.5rem] md:top-[-2rem] lg:top-[-4.5rem] left-1/2 lg:left-[14rem] transform -translate-x-1/2 lg:transform-none">
              <img src="images/person-avatar1.svg" alt="Avatar 1" />
              <img src="images/person-avatar2.svg" alt="Avatar 2" />
              <img src="images/person-avatar3.svg" alt="Avatar 3" />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full lg:w-[50%] px-4 md:px-8 lg:px-[4rem] flex flex-col justify-around mt-8 lg:mt-0">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-[#2229FF] font-bold">
              1100
            </span>
            <img src="images/plus.svg" alt="Plus" />
            <span className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-[#2229FF] font-bold">
              40
            </span>
            <img src="images/plus.svg" alt="Plus" />
          </div>
          <div className="flex flex-col md:flex-row pl-3">
            <p className="mb-4 md:mb-0">
              The largest and most vibrant Indian designer community for
              entrepreneurs, creative minds, and digital wizards.
            </p>
            <p>
              Online and offline sessions organized by pros are the place to
              upgrade your knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd */}

      <div className="bg-[#2229FF] rounded-t-[2.5rem] text-white py-12 px-[15rem] ">
        <h2 className="text-center text-3xl font-semibold my-[4rem]">
          Explore our vibrant community
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-[#00FB873D] rounded-3xl p-6 pr-[6rem] text-start md:w-1/3">
            <h3 className="text-xl font-bold mb-2">
              12,000+ Designers from all over the 🌍
            </h3>
            <p className="text-sm">
              All in one place to supercharge your career. Since 2020, creatives
              have found refuge in our community where organic discussions, work
              sessions and resources are shared
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#00FB873D] p-6 pr-[6rem]  rounded-3xl text-start md:w-1/3">
            <h3 className="text-xl font-bold mb-2">
              1000+ Professional Design Resources 📚
            </h3>
            <p className="text-sm">
              Spanning across all design fields, find tons of resources for
              design tools, inspiration, design talks, cheat sheets, articles,
              tutorials, and more, all updated daily, backed by the community.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#00FB873D] p-6 pr-[6rem] rounded-3xl text-start md:w-1/3">
            <h3 className="text-xl font-bold mb-2">
              Work sharing and portfolio feedback 👩‍💻
            </h3>
            <p className="text-sm">
              All in one place to supercharge your career. Since 2020, creatives
              have found refuge in our community where organic discussions, work
              sessions and resources are shared
            </p>
          </div>
        </div>
        {/* animation */}

        <div>
          {/* Text moving from left to right */}
          <div className="relative overflow-x-hidden w-full h-[6rem] mt-[5rem] flex justify-center items-center">
            {/* Subtle blue shadow gradient on the left */}
            <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-[#2229FF] z-40 via-[#2229FF]/30 to-transparent pointer-events-none"></div>

            <div className="whitespace-nowrap animate-move-right text-lg font-medium text-fade-right">
              <span className="inline-block text-[65px]">
                VISUAL DESIGNER PRODUCT DESIGNER UX DESIGNER
              </span>
            </div>
          </div>

          {/* Text moving from right to left */}
          <div className="relative overflow-x-hidden w-full h-[6rem] mt-[1rem] flex justify-center items-center">
            {/* Moving text */}
            <div className="whitespace-nowrap animate-move-left text-lg font-medium text-fade-left">
              <span className="inline-block text-[65px]">
                VISUAL DESIGNER PRODUCT DESIGNER UX DESIGNER
              </span>
            </div>

            {/* Right side blue shadow gradient */}
            <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-[#2229FF] z-40 via-[#2229FF]/30 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
