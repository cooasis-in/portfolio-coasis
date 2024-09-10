import React from 'react';

const FutureNetworkSection = () => {
  return (
    <div className="container mx-auto pt-10 pb-16">
      <div className="flex flex-col items-center justify-center bg-[#EEE8E2]">
      {/* Heading Section */}
      <h2 className="f-HelveticaNeue text-[80px] text-[#232323] leading-[90px] max-w-[800px] text-center">
      Your future <span className="f-BelgianoSerif">network</span> is some of the world's best
      </h2>

      {/* Logos Section */}
      <div className="mt-10">
        <img src="/images/logos.svg" alt="" />
      </div>
    </div>
    </div>
  );
};

export default FutureNetworkSection;
