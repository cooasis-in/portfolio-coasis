import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto pt-14">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div>
                <h1 className="text-[40px] md:text-[60px] lg:text-[80px] text-[#232323] leading-[50px] md:leading-[70px] lg:leading-[90px] font-normal max-w-[550px]">
                  Subscribe to the newsletter
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#232323] leading-[22px] font-light max-w-[400px] py-5">
                  And stay up to date on new sessions, events and other cool stuff!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-x-4 sm:space-y-0 py-12">
                <div className="flex flex-col">
                  <label className="relative text-[14px] sm:text-[17px] text-[#EEE8E2] bg-[#2229FF] rounded-[6px] mb-2 px-2 py-1 max-w-[100px] flex items-center">
                    <span>
                      <img src="/images/border.svg" alt="" className="w-[19px] h-[19px]" />
                      <img src="/images/T.svg" alt="" className="absolute top-[12.5px] left-[13px]" />
                    </span> &nbsp;
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-[#2229FF] py-3 sm:py-5 px-3 max-w-[235px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="relative text-[14px] sm:text-[17px] text-[#EEE8E2] bg-[#2229FF] rounded-[6px] mb-2 px-2 py-1 max-w-[100px] flex items-center">
                    <span>
                      <img src="/images/border.svg" alt="" className="w-[19px] h-[19px]" />
                      <img src="/images/@.svg" alt="" className="absolute top-[11.5px] left-[12px] w-[10px]" />
                    </span> &nbsp;
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-[#2229FF] py-3 sm:py-5 px-3 max-w-[235px]"
                  />
                </div>
                <div className="pb-[8px] cursor-pointer">
                  <img src="/images/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center justify-center md:justify-end">
                <img src="/images/right-cont.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="sub-footer relative">
            <div>
              <div className="w-[6px] h-[6px] bg-[#2229FF] absolute top-[-3px]"></div>
              <div className="border-[1px] border-[#2229FF] w-full"></div>
              <div className="w-[6px] h-[6px] bg-[#2229FF] absolute top-[-3px] right-0"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between py-6">
              <div className="text-center sm:text-left">
                <p className="text-[16px] md:text-[20px] text-[#2229FF] leading-[24px] md:leading-[34px]">Copyright 2024,</p>
                <p className="text-[16px] md:text-[20px] text-[#2229FF] leading-[22px]">All Rights and all wrongs reserved,</p>
              </div>
              <div className="flex justify-center sm:justify-start space-x-4 mt-[5px]">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="text-[16px] md:text-[20px] text-[#2229FF] leading-[22px]">Instagram</a>
                  </li>
                  <li className="text-[#2229FF]">|</li>
                  <li>
                    <a href="#" className="text-[16px] md:text-[20px] text-[#2229FF] leading-[22px]">Linkedin</a>
                  </li>
                  <li className="text-[#2229FF]">|</li>
                  <li>
                    <a href="#" className="text-[16px] md:text-[20px] text-[#2229FF] leading-[22px]">Medium</a>
                  </li>
                  <li className="text-[#2229FF]">|</li>
                  <li>
                    <a href="#" className="text-[16px] md:text-[20px] text-[#2229FF] leading-[22px]">Behance</a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-[16px] md:text-[20px] text-[#2229FF] leading-[34px] flex items-center justify-center sm:justify-end">
                  Made with <span className="ml-1"><img src="/images/drink.svg" alt="" /></span> in India
                </p>
                <p className="text-[16px] md:text-[20px] text-[#2229FF] leading-[22px]">All Rights and all wrongs reserved,</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;