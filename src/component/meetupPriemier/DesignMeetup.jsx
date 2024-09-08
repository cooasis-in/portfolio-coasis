import React from 'react'

const DesignMeetup = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col justify-center items-center !relative">
          <div className="mx-auto text-center">
            <h1 className="f-HelveticaNeue text-[110px] text-[#232323] leading-[110px] max-w-[900px]">
              Join India's <span className="text-[#2229FF]">Premier</span> Design Meetup
            </h1>
            <p className="f-HelveticaNeue text-[40px] text-[#232323] leading-[40px] max-w-[650px] pt-10 mx-auto">
              Connect with likeminded people offline or online
            </p>
          </div>

          <div>
            <img
              src="/images/offline-people-1.svg"
              alt=""
              className="absolute w-[120px] top-[-30px] right-[180px]"
            />
            <img
              src="/images/offline-people-2.svg"
              alt=""
              className="absolute w-[220px] bottom-[103px] left-[215px]"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default DesignMeetup;