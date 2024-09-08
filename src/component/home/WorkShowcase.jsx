import React from "react";
import { AnimatedTooltipPreview } from "../common/AnimatedTooltipPreview";
import "./wrokShowcase.css";

const WorkShowcase = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#232323] leading-tight f-HelveticaNeue">
          Where people connect,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-6xl">
        <div className="bg-[#3E45FF] text-[#EEE8E2] p-8 rounded-[20px] h-[240px] w-[300px]">
          <h2 className="text-xl font-semibold">Curated Design Work</h2>
          <p className="mt-8 text-[12px]">
            Work and interact with the top 1% of design talent across the
            country
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <button className="px-4 py-2 bg-[#2229FF] text-[#EEE8E2] rounded-full font-semibold">
              Work Showcase
            </button>
            <button className="p-2 bg-[#2229FF] text-[#EEE8E2] rounded-full flex items-center justify-center">
              <span>&#8594;</span>
            </button>
          </div>
        </div>

        <div className="bg-[#3E45FF] text-[#EEE8E2] p-6 rounded-[20px] h-[240px] w-[300px]">
          <h2 className="text-xl font-semibold">Career Advice</h2>
          <p className="mt-8 text-[12px]">
            First-hand actionable advice from professionals, professors, and
            fellow students
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <button className="px-4 py-2 bg-[#2229FF] text-[#EEE8E2] rounded-full font-semibold">
              Read Publication
            </button>
            <button className="p-2 bg-[#2229FF] text-[#EEE8E2] rounded-full flex items-center justify-center">
              <span>&#8594;</span>
            </button>
          </div>
        </div>

        <div className="bg-[#3E45FF] text-[#EEE8E2] p-6 rounded-[20px] h-[240px] w-[300px]">
          <h2 className="text-xl font-semibold">Design Events</h2>
          <p className="mt-8 text-[12px]">
            Exposure to world-class designers and exciting conversations every
            month
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <button className="px-4 py-2 bg-[#2229FF] text-[#EEE8E2] rounded-full font-semibold">
              Upcoming Events
            </button>
            <button className="p-2 bg-[#2229FF] text-[#EEE8E2] rounded-full flex items-center justify-center">
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
