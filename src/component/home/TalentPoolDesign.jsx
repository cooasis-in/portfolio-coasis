import React from "react";
import { Link } from "react-router-dom";

const TalentPoolDesign = () => {
  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center py-10 rounded-tl-[50px] rounded-tr-[50px]">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="f-HelveticaNeue text-4xl text-[80px] text-[#EEE8E2] leading-[90px] pb-6">
          Talent pool united <br /> by <span className="f-BelgianoSerif">design</span>
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="grid grid-cols-4 gap-4">
          <button className="f-HelveticaNeue px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            All
          </button>
          <button className="f-HelveticaNeue px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Branding
          </button>
          <button className="f-HelveticaNeue px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Product
          </button>
          <button className="f-HelveticaNeue px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Packaging
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-5">
        <button className="f-HelveticaNeue px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Fashion
          </button>
          <button className="f-HelveticaNeue px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Tech
          </button> 
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12 mb-12">
        {/* Example Card */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-[#EEE8E2] w-[350px] rounded-3xl shadow-lg overflow-hidden relative"
          >
            <div className="relative">
              <img
                src="/images/talentPool.svg"
                alt="Card image"
                className="w-full h-full object-cover"
              />
              <div className="f-HelveticaNeue absolute top-3 right-3 bg-[#2229FF] text-[#EEE8E2] text-xs px-3 py-2 rounded-full">
                Featured
              </div>
            </div>
            <div className="absolute bottom-0 w-full p-6">
              <div className="bg-opacity-30 p-4 rounded-xl backdrop-blur-md bg-transparent">
                <h3 className="f-HelveticaNeue text-[25px] leading-[28px] text-[#232323] mb-2">
                  The designer's spin on the table tennis
                </h3>
                <p className="f-HelveticaNeue text-[#232323] text-[15px] leading-17px font-light">
                  Shubhangi's nimbus matched tradition with technology.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <Link to="/secondPage">
      <div className="flex justify-center">
     
        <button className="f-HelveticaNeue px-6 py-3 text-[20px] leading-[23px] rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
          Show more 
        </button>
        <img src="/images/black-arrow.svg" alt="" />
      </div>
      </Link>
    </div>
  );
};

export default TalentPoolDesign;
