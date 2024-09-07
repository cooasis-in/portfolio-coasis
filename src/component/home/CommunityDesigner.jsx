import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommunityDesigner = () => {
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

  // Array of images for the two sliders
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
    <div className="flex flex-col items-center bg-[#F4F4F4] py-10">
      <h1 className="text-center text-8xl text-[#232323]">
        A community by <br /> designers for <br /> designers.
      </h1>

      {/* First Slider */}
      <div className="w-full mt-10 px-4">
        <Slider {...settings}>
          {imagesFirstSlider.map((image, index) => (
            <div key={index} className="p-2">
              <div className="bg-[#F4F4F4] rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={image}
                  alt="Designer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold">Akshay Bukhrane</p>
                  <p className="text-sm">Senior product designer at Akshay</p>
                </div>
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
              <div className="bg-[#F4F4F4] rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={image}
                  alt="Designer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold">Akshay Bukhrane</p>
                  <p className="text-sm">Senior product designer at Akshay</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommunityDesigner;
