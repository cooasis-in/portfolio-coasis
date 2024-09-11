import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const CommunityDesigner = () => {
  const [openIndexes, setOpenIndexes] = useState({
    firstSlider: -1,
    secondSlider: -1,
  });

  const toggleOpen = (index, sliderName) => {
    setOpenIndexes((prevState) => ({
      ...prevState,
      [sliderName]: prevState[sliderName] === index ? -1 : index,
    }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imagesFirstSlider = [
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
  ];

  const imagesSecondSlider = [
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
    "/images/akshayBuk.svg",
    "/images/akshayRaj.svg",
  ];

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="f-HelveticaNeue text-center text-[80px] leading-[90px] text-[#232323]">
        A community by <br /> designers for <br />{" "}
        <span className="f-BelgianoSerif">designers.</span>
      </h1>

      <div className="aboslute">
        <div className="relative top-[-8.7rem] left-[18rem]">
          <img src="images/rupeshArrow.svg" alt="" />
        </div>
        <div className="relative top-[-10.5rem] left-[19rem]">
          <img src="images/rupeshRec.svg" alt="" />
        </div>
      </div>

      {/* First Slider */}
      <div className="w-full px-4">
        <Slider {...settings}>
          {imagesFirstSlider.map((image, index) => (
            <div key={index} className="p-2">
              <div className="overflow-hidden relative group">
                <img
                  src={image}
                  alt="Designer"
                  className="w-full h-auto object-cover"
                />
                <div
                  className={`absolute bottom-4 left-0 right-0 p-4 flex items-center justify-between rounded-[15px] mx-3 ${openIndexes.firstSlider === index
                      ? "bg-[#FFFFFF57] backdrop-blur rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[15px] rounded-br-[15px]"
                      : "bg-[#FFFFFF57] backdrop-blur"
                    }`}
                >
                  <div>
                    <p className="f-HelveticaNeue text-[20px] text-[#EEE8E2] leading-[23px] mb-1">
                      Akshay Bukhrane
                    </p>
                    <p className="f-HelveticaNeue text-[15px] text-[#EEE8E2] leading-[16px] font-light">
                      Senior product designer at Swiggy
                    </p>
                  </div>
                  <div>
                    <img
                      src={
                        openIndexes.firstSlider === index
                          ? "/images/close.svg"
                          : "/images/open-plus.svg"
                      }
                      alt={openIndexes.firstSlider === index ? "close" : "open"}
                      className="bg-[#D9D9D94D] rounded-[6px] p-3 cursor-pointer"
                      onClick={() => toggleOpen(index, "firstSlider")}
                    />
                  </div>
                </div>

                {/* Conditionally render additional content */}
                {openIndexes.firstSlider === index && (
                  <div className="absolute bottom-[107px] left-0 right-0 bg-[#FFFFFF57] backdrop-blur p-3 rounded-tl-[15px] rounded-tr-[15px] mx-3">
                    <div className="border-b-[1px] border-b-[#FFFFFF36]">
                      <p className="f-HelveticaNeue text-[13px] text-[#080808] leading-[15px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <div className="flex items-start space-x-4 my-3 relative">
                        <div className="absolute bottom-[2px]">
                          <img src="/images/linkdin.svg" alt="" />
                        </div>
                        <div>
                          <img
                            src="/images/instagram.svg"
                            alt=""
                            className="ml-6"
                          />
                        </div>
                        <div>
                          <img src="/images/portfolio.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Second Slider */}
      <div className="w-full mt-2 px-4">
        <Slider {...settings}>
          {imagesSecondSlider.map((image, index) => (
            <div key={index} className="p-2">
              <div className="overflow-hidden relative group">
                <img
                  src={image}
                  alt="Designer"
                  className="w-full h-auto object-cover"
                />
                <div
                  className={`absolute bottom-4 left-0 right-0 p-4 flex items-center justify-between rounded-[15px] mx-3 ${openIndexes.secondSlider === index
                      ? "bg-[#FFFFFF57] backdrop-blur rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[15px] rounded-br-[15px]"
                      : "bg-[#FFFFFF57] backdrop-blur"
                    }`}
                >
                  <div>
                    <p className="f-HelveticaNeue text-[20px] text-[#EEE8E2] leading-[23px] mb-1">
                      Akshay Bukhrane
                    </p>
                    <p className="f-HelveticaNeue text-[15px] text-[#EEE8E2] leading-[16px] font-light">
                      Senior product designer at Swiggy
                    </p>
                  </div>
                  <div>
                    <img
                      src={
                        openIndexes.secondSlider === index
                          ? "/images/close.svg"
                          : "/images/open-plus.svg"
                      }
                      alt={
                        openIndexes.secondSlider === index ? "close" : "open"
                      }
                      className="bg-[#D9D9D94D] rounded-[6px] p-3 cursor-pointer"
                      onClick={() => toggleOpen(index, "secondSlider")}
                    />
                  </div>
                </div>

                {/* Conditionally render additional content */}
                {openIndexes.secondSlider === index && (
                  <div className="absolute bottom-[107px] left-0 right-0 bg-[#FFFFFF57] backdrop-blur p-3 rounded-tl-[15px] rounded-tr-[15px] mx-3">
                    <div className="border-b-[1px] border-b-[#FFFFFF36]">
                    <p className="f-HelveticaNeue text-[13px] text-[#080808] leading-[15px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <div className="flex items-start space-x-4 my-3 relative">
                        <div className="absolute bottom-[2px]">
                          <img src="/images/linkdin.svg" alt="" />
                        </div>
                        <div>
                          <img
                            src="/images/instagram.svg"
                            alt=""
                            className="ml-6"
                          />
                        </div>
                        <div>
                          <img src="/images/portfolio.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommunityDesigner;
