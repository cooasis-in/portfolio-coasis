import React, { useEffect, useState, useRef } from 'react';

const Events = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableDivRef = useRef(null);

  // Function to handle scroll event
  const handleScroll = () => {
    if (scrollableDivRef.current) {
      const currentScrollPosition = scrollableDivRef.current.scrollLeft;
      setScrollPosition(currentScrollPosition);

      // Here you can add any functionality you'd like to trigger on scroll.
      console.log("User is scrolling, current scroll position: ", currentScrollPosition);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;

    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row  justify-between bg-[#EEE8E2] mb-0">
      {/* Left Section */}
      <div className=" md:w-1/2 pr-6 w-[475px] h-[71px] mt-12 mb-0  ">
        <h2 className="text-3xl font-Helvetica Neue mb-2 text-[#232323] ml-12 mt-12">
          These events are coming soon to the community!
        </h2>
        <p className="text-gray-600 text-lg w-[355px] h-[115px] ml-12">
          Weekly online and offline sessions, delivered by pros, are the place to upgrade your knowledge. 
          Check out our automation explainers, design deep dives, hackathons, AI, and starter hours.
        </p>
      </div>

      {/* Right Section - Event Cards */}
      <div
        className="w-full overflow-x-auto mt-0 no-scrollbar"
        ref={scrollableDivRef} // Ref for tracking scroll position
      >
        <div className="flex space-x-4 w-[1560px] h-[698px]">
          {/* Event Card 1 */}
          <div className=" rounded-3xl p-6 w-[300px] h-[400px]">
            <img src="/images/slider1.svg" alt="Event 2" className="rounded-md mb-1 mr-2" />
            <div className="justify-between">
              <button className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full">
                Meet-Up
              </button>
            </div>
            <p className="text-sm text-[#000000] mt-1 ml-2">Date & Time: TBA</p>
            <h2 className="text-gray-600 mt-1 text-[#232323] ml-2">A Nex-gen experience lab for designers</h2>
            <button className="bg-blue-600 text-[#EEE8E2] py-2 px-4 rounded-full hover:bg-blue-700 mt-1 ml-1">
              Know more →
            </button>
          </div>

          {/* Event Card 2 */}
          <div className=" rounded-3xl p-6 w-[300px] h-[400px]">
            <img src="/images/slider2.svg" alt="Event 2" className="rounded-md mb-1 mr-2" />
            <div className="justify-between">
              <button className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full">
                Meet-Up
              </button>
            </div>
            <p className="text-sm text-[#000000] mt-1 ml-2">Date & Time: TBA</p>
            <h2 className="text-gray-600 mt-1 text-[#232323] ml-2">A Nex-gen experience lab for designers</h2>
            <button className="bg-blue-600 text-[#EEE8E2] py-2 px-4 rounded-full hover:bg-blue-700 mt-1 ml-1">
              Know more →
            </button>
          </div>

          {/* Event Card 3 */}
          <div className=" rounded-3xl p-6 w-[300px] h-[400px]">
            <img src="/images/slider2.svg" alt="Event 2" className="rounded-md mb-1 mr-2" />
            <div className="justify-between">
              <button className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full">
                Meet-Up
              </button>
            </div>
            <p className="text-sm text-[#000000] mt-1 ml-2">Date & Time: TBA</p>
            <h2 className="text-gray-600 mt-1 text-[#232323] ml-2">A Nex-gen experience lab for designers</h2>
            <button className="bg-blue-600 text-[#EEE8E2] py-2 px-4 rounded-full hover:bg-blue-700 mt-1 ml-1">
              Know more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
