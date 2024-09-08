import React from 'react'

const WantToGetFeatured = () => {
  return (
    <>
     <section className="pt-20 pb-16">
        <div className="container mx-auto bg-[#2229FF] rounded-[20px]">
          <div className="max-w-[800px] mx-auto pt-16">
            <h2 className="f-HelveticaNeue text-[40px] sm:text-[60px] lg:text-[80px] text-[#EEE8E2] leading-[50px] sm:leading-[70px] lg:leading-[90px] text-center">
            Want to get featured ?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 pt-6 pb-12">
            <div className="flex items-center">
              <p className="f-HelveticaNeue text-[16px] sm:text-[20px] text-[#EEE8E2] ml-2 text-center max-w-[650px]">We love to see new design projects from Aspiring Designers, and we check every submission we get.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center pb-20 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="f-HelveticaNeue text-[20px] sm:text-[25px] text-[#2229FF] leading-[28px] bg-[#EEE8E2] rounded-full px-6 py-3 text-center font-normal">
            Submit your work
            </button>
            <img src="/images/right-arrow.svg" alt="" className="cursor-pointer !ml-0" />
          </div>
        </div>
      </section>
    </>
  )
}

export default WantToGetFeatured;