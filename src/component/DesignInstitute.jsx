import React from 'react';

const DesignInstitute = () => {
  return (
    <>
      <section>
        <div className="container mx-auto bg-[#2229FF] rounded-[20px]">
          <div className="max-w-[800px] mx-auto pt-10">
            <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] text-[#EEE8E2] leading-[50px] sm:leading-[70px] lg:leading-[90px] text-center">
              backed by top design institute of india
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 py-10">
            <div className="flex items-center">
              <img src="/images/institute.svg" alt="" />
              <p className="text-[16px] sm:text-[18px] text-[#EEE8E2] ml-2">National Institute of Design</p>
            </div>
            <div className="flex items-center">
              <img src="/images/acadmy.svg" alt="" />
              <p className="text-[16px] sm:text-[18px] text-[#EEE8E2] ml-2">Pearl Academy</p>
            </div>
            <div className="flex items-center max-w-[250px]">
              <img src="/images/nift.svg" alt="" />
              <p className="text-[16px] sm:text-[18px] text-[#EEE8E2] ml-2">National Institute of Fashion Technology</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center pb-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="text-[20px] sm:text-[25px] text-[#2229FF] leading-[28px] bg-[#EEE8E2] rounded-full px-6 py-3 text-center font-normal">
              Join the community
            </button>
            <img src="/images/right-arrow.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignInstitute;