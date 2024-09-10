import React from "react";

function OurCommunity() {
  return (
    <div className="bg-[#2229FF] mt-[5rem] overflow-x-hidden rounded-t-[2.5rem] text-white py-12  ">
      <div className="px-[12rem]">
        <h2 className="text-center text-[50px] my-[4rem]">
          Explore our vibrant community
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-[#00FB873D] rounded-3xl p-6 pl-[1rem] pr-[5rem] text-start md:w-1/3">
            <h3 className="text-[27px] text-[#EEE8E2] mb-[3rem]">
              12,000+ Designers from all over the🌍
            </h3>
            <p className="text-[17px] f-HelveticaNeuelight text-[#EEE8E2]/80">
              All in one place to supercharge your career. Since 2020, creatives
              have found refuge in our community where organic discussions, work
              sessions and resources are shared
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#00FB873D] p-6 pl-[1rem] pr-[5rem]  rounded-3xl text-start md:w-1/3">
            <h3 className="text-[27px] text-[#EEE8E2] mb-[3rem]">
              1000+ Professional Design Resources📚
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
              Work sharing and portfolio feedback👩‍💻
            </h3>
            <p className="text-[16px] f-HelveticaNeuelight text-[#EEE8E2]/80">
              All in one place to supercharge your career. Since 2020, creatives
              have found refuge in our community where organic discussions, work
              sessions and resources are shared
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
  );
}

export default OurCommunity;
