import React from "react";
import { AnimatedTooltipPreview } from "../common/AnimatedTooltipPreview";
import "./wrokShowcase.css";

const WorkShowcase = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 pt-6 pb-28">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="f-HelveticaNeue text-4xl md:text-[80px] text-[#232323] leading-[80px]">
          Where <span className="f-BelgianoSerif">people</span> connect,
          <br />
          <span>collaborate and create</span>
          <br />
          <span>
            t{" "}
            <span className="relative mt-8 inline-block align-middle">
              <AnimatedTooltipPreview />
            </span>{" "}
            gether
          </span>
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-[#3E45FF] text-[#EEE8E2] p-8 rounded-[20px] max-w-[400px]">
          <h2 className="f-HelveticaNeue text-[26px] text-[#EEE8E2] leading-[30px]">Curated Design Work</h2>
          <p className="f-HelveticaNeue mt-8 text-[20px] text-[#EEE8E2] leading-[25px] font-light">
            Work and interact with the top 1% of design talent across the <br />
            country
          </p>
          <div className="flex items-center mt-10">
            <button className="f-HelveticaNeue px-6 py-4 bg-[#2229FF] text-[#EEE8E2] rounded-full text-[20px] leading-[23px]">
            Work Showcase
            </button>
            <img src="/images/right-arrow.svg" alt="" />
          </div>
        </div>

        <div className="bg-[#3E45FF] text-[#EEE8E2] p-8 rounded-[20px] max-w-[400px]">
          <h2 className="f-HelveticaNeue text-[26px] text-[#EEE8E2] leading-[30px]">Career Advice</h2>
          <p className="f-HelveticaNeue mt-8 text-[20px] text-[#EEE8E2] leading-[25px] font-light">
          First hand actionable advice from professionals, professors and fellow students
          </p>
          <div className="flex items-center mt-10">
            <button className="f-HelveticaNeue px-6 py-4 bg-[#2229FF] text-[#EEE8E2] rounded-full text-[20px] leading-[23px]">
            Read Publication
            </button>
            <img src="/images/right-arrow.svg" alt="" />
          </div>
        </div>

        <div className="bg-[#3E45FF] text-[#EEE8E2] p-8 rounded-[20px] max-w-[400px]">
          <h2 className="f-HelveticaNeue text-[26px] text-[#EEE8E2] leading-[30px]">Design Events</h2>
          <p className="f-HelveticaNeue mt-8 text-[20px] text-[#EEE8E2] leading-[25px] font-light">
          Exposure to world class designers and exciting conversations every month
          </p>
          <div className="flex items-center mt-10">
            <button className="f-HelveticaNeue px-6 py-4 bg-[#2229FF] text-[#EEE8E2] rounded-full text-[20px] leading-[23px]">
            Upcoming Events
            </button>
            <img src="/images/right-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
