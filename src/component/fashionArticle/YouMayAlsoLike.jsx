import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const YouMayAlsoLike = () => {
  const [selected, setSelected] = useState("All");

  const filters = [
    "All",
    "Branding",
    "Product",
    "Packaging",
    "Fashion",
    "Tech",
  ];
  return (
    <>
    <section className="pt-8">
      <div className="container">
        <div>
          <h1 className="f-HelveticaNeue text-[80px] leading-[90px] text-[#232323] text-center mx-auto">You may also like</h1>
        </div>
        <div className="cards">
      {/* cards */}
      <div className="flex justify-center">
        <div className="max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-[2.5rem] ">
          {[1, 2, 3].map((card, index) => (
            <div key={index} className="bg-[#232323] rounded-2xl p-4 shadow-md">
              <div className="relative f-HelveticaNeue">
                {/* Image with a Featured Label */}
                <img
                  src="images/smallCard.svg"
                  className="rounded-lg w-full object-cover"
                  alt=""
                />
                <span className="absolute text-[12px] top-4 right-4 bg-[#2229FF] text-[#EEE8E2] cursor-pointer py-1 px-3 rounded-full">
                  featured
                </span>
              </div>
              {/* Title and Description */}
              <div className="text-white mt-4 ">
                <h3 className="text-[26px] text-[#EEE8E2] f-HelveticaNeue leading-[30px] mb-2">
                  The designer's spin on the table tennis
                </h3>
                <p className="text-[18px] f-HelveticaNeue text-[#EEE8E2] leading-[22px] font-light">
                  Shubhangi's nimbus matched tradition with technology
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default YouMayAlsoLike
