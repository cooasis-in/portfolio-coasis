import React from 'react'

const ContactUs = () => {
  return (
    <>
     <section className="pt-20 pb-16">
        <div className="container mx-auto bg-[#2229FF] rounded-[20px]">
          <div className="max-w-[800px] mx-auto pt-10">
            <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] text-[#EEE8E2] leading-[50px] sm:leading-[70px] lg:leading-[90px] text-center">
            Want to speak at co.labb events?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 py-10">
            <div className="flex items-center">
              <p className="text-[16px] sm:text-[20px] text-[#EEE8E2] ml-2 text-center max-w-[650px]">We are always looking for speakers with inspiring backgrounds and incredible technical skills to speak at our events. We accept student applications too. If you are looking to learn more about what to expect from co.labb events head over to our <u>speaker guide</u></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center pb-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="text-[20px] sm:text-[25px] text-[#2229FF] leading-[28px] bg-[#EEE8E2] rounded-full px-6 py-3 text-center font-normal">
            Contact us
            </button>
            <img src="/images/right-arrow.svg" alt="" className="cursor-pointer !ml-0" />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs;
