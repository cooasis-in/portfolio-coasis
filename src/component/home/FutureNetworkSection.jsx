import React from 'react';

const FutureNetworkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EEE8E2] mt-0 mb-0">
      {/* Heading Section */}
      <h2 className="text-4xl font-Helvetica Neue justify-centre text-[#232323] mt-0">
        Your future <span className="f">network</span> is
        <br />
        some of the world's  <br/>
        <span className="flex justify-center">best</span>
      </h2>

      {/* Logos Section */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-6  w-[1400px] h-[127px] justify-items-center h-auto mt-4 ">
        <img src="/images/BCG.svg" alt="BCG" className="w-[72px] h-[29px]" />
        <img src="/images/Logitech.svg" alt="Logitech" className=" w-[142px] h-[43px]" />
        <img src="/images/Cooasis.svg" alt="Oasis" className="w-[99px] h-[44px] " />
        <img src="/images/netflix.svg" alt="Netflix" className="w-[122px] h-[32px]" />
        <img src="/images/renult.svg" alt="Renault" className="w-[207px] h-[44px]" />
        <img src="/images/nifts.svg" alt="Nift" className="w-[63px] h-[62px] mr-8" />
        {/* arrange the accoding figma */}
        <img src="/images/ford.svg" alt="Ford" className="w-[120px] h-[45px] mt-4  " />
        <img src="/images/adobe.svg" alt="Adobe" className="w-[153px] h-[40px] mt-4 " />
        <img src="/images/asus.svg" alt="Asus" className="w-[137px] h-[27px] mt-4 " />
        <img src="/images/philips.svg" alt="Philips" className="w-[150px] h-[28px] mt-4 " />
      </div>
    </div>
  );
};

export default FutureNetworkSection;
