import React from "react";

const TalentPoolDesign = () => {
  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EEE8E2]">
          Talent pool united <br /> by design
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="grid grid-cols-4 gap-4">
          <button className="px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Branding
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Product
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Packaging
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
            Fashion
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2]">
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
            className="bg-[#EEE8E2] w-[350px] h-[400px] rounded-3xl shadow-lg overflow-hidden relative"
          >
            <div className="relative">
              <img
                src="/images/talentPool.svg"
                alt="Card image"
                className="w-full h-[220px] object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#2229FF] text-[#EEE8E2] text-xs px-3 py-1 rounded-full">
                Featured
              </div>
            </div>
            <div className="absolute bottom-0 w-full p-6">
              <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-md">
                <h3 className="text-xl font-semibold text-[#232323] mb-2">
                  The designer's spin on the table tennis
                </h3>
                <p className="text-[#232323] text-sm">
                  Shubhangi's nimbus matched tradition with technology.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="flex justify-center">
        <button className="px-6 py-3 rounded-full bg-[#1A1A1A] text-[#403F3E] hover:text-[#EEE8E2] transition-all duration-300">
          Show more →
        </button>
      </div>
    </div>
  );
};

export default TalentPoolDesign;
