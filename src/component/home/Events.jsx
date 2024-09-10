import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './events.css';

const Events = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,        
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="container mx-auto pt-20 pb-16">
        <div className="grid grid-cols-12">
          <div className="col-span-4 right-shadow">
           <div className="mt-14">
           <h2 className="f-HelveticaNeue text-[45px] mb-2 text-[#232323] leading-[50px]">
              These events are coming soon to the community!
            </h2>
            <p className="f-HelveticaNeue text-[18px] text-[#232323] leading-[22px] pt-8 font-light max-w-[350px]">
              Weekly online and offline sessions, delivered by pros, are the place to upgrade your knowledge.
              Check out our automation explainers, design deep dives, hackathons, AI, and starter hours.
            </p>
           </div>
          </div>
          <div className="col-span-8">
            <div className="slider-container">
              <Slider {...settings}>
                {/* card 1 */}
                <div className="rounded-3xl w-[300px]">
                  <img src="/images/slide-1.svg" alt="Event 2" className="rounded-md mb-1" />
                  <div className="justify-between">
                    <button className="f-HelveticaNeue bg-[#C7C9FF] text-[15px] leading-[17px] text-[#2229FF] px-3 py-1 mt-1 mb-3 rounded-[8px]">
                      Meet-Up
                    </button>
                  </div>
                  <p className="f-HelveticaNeue text-[15px] text-[#000000] leading-[18px] font-light mb-5">Date & Time: TBA</p>
                  <h2 className="f-HelveticaNeue text-[25px] text-[#232323] leading-[29px]">A Nex-gen experience lab for designers</h2>
                 <div className="flex items-center mt-2">
                 <button className="f-HelveticaNeue bg-[#2229FF] py-3 px-5 rounded-full text-[20px] text-[#EEE8E2] leading-[23px]">
                    Know more
                  </button>
                  <img src="/images/right-arrow.svg" alt="" />
                 </div>
                </div>
                {/* card 2 */}
                <div className="rounded-3xl w-[300px]">
                  <div className="rounded-3xl bg-[#2229FF] h-[322px] mt-2 flex justify-center items-center">
                    <h4 className="f-HelveticaNeue text-[25px] text-[#EEE8E2] leading-[30px]">meetup</h4>
                  </div> 
                  <div className="justify-between">
                    <button className="f-HelveticaNeue bg-[#C7C9FF] text-[15px] leading-[17px] text-[#2229FF] px-3 py-1 my-3 rounded-[8px]">
                      Meet-Up
                    </button>
                  </div>
                  <p className="f-HelveticaNeue text-[15px] text-[#000000] leading-[18px] font-light mb-5">Date & Time: TBA</p>
                  <h2 className="f-HelveticaNeue text-[25px] text-[#232323] leading-[29px]">A Nex-gen experience lab for designers</h2>
                 <div className="flex items-center mt-2">
                 <button className="f-HelveticaNeue bg-[#2229FF] py-3 px-5 rounded-full text-[20px] text-[#EEE8E2] leading-[23px]">
                 Remind me
                  </button>
                  <img src="/images/right-arrow.svg" alt="" />
                 </div>
                </div>
                {/* card 3 */}
                <div className="rounded-3xl w-[300px]">
                  <div className="rounded-3xl bg-yellow-400 h-[322px] mt-2 flex justify-center items-center"></div> 
                  <div className="justify-between">
                    <button className="f-HelveticaNeue bg-[#C7C9FF] text-[15px] leading-[17px] text-[#2229FF] px-3 py-1 my-3 rounded-[8px]">
                      Meet-Up
                    </button>
                  </div>
                  <p className="f-HelveticaNeue text-[15px] text-[#000000] leading-[18px] font-light mb-5">Date & Time: TBA</p>
                  <h2 className="f-HelveticaNeue text-[25px] text-[#232323] leading-[29px]">A Nex-gen experience lab for designers</h2>
                 <div className="flex items-center mt-2">
                 <button className="f-HelveticaNeue bg-[#2229FF] py-3 px-5 rounded-full text-[20px] text-[#EEE8E2] leading-[23px]">
                 Know more
                  </button>
                  <img src="/images/right-arrow.svg" alt="" />
                 </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events;
