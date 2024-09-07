import React from 'react';

const AnimalPrint = () => {
  return (
    <>
      <section className="pt-20 pb-16 max-w-[900px] flex flex-col justify-center items-center mx-auto">
        <div className="w-full max-w-[900px] text-center">
          <div>
            <p className="text-[#212121] text-[20px] leading-[22px] mx-auto font-medium">
              Articles • Fashion{' '}
              <span><a className="text-[#2229FF] cursor-pointer">4 August 2024</a></span>
            </p>
            <div className="mx-auto pt-6">
              <h1 className="text-[80px] text-[#232323] leading-[90px] max-w-[900px] mx-auto text-center">
                Forget Animal Print,
              </h1>
              <h2 className="text-[80px] text-[#232323] leading-[90px] max-w-[900px] mx-auto text-start">
                Microbe is the New Chic
              </h2>
              <p className="text-[25px] text-[#232323] leading-[31px] max-w-[800px] pt-6 text-start">
                How Mohamad Anas's 'Beasts of the Urban Jungle' is blurring the lines between lab and runway
              </p>
            </div>
          </div>

          {/* Outfit part */}
          <div className="pt-10">
            <div>
              <img src="/images/outfit-1.svg" alt="Outfit 1" />
            </div>
              <p className="text-[25px] text-[#232323] leading-[31px] pt-8 text-start">
              Emerging designer Mohamad Anas is disrupting the $185 billion streetwear market with his innovative "Beasts of the Urban Jungle" collection.
              <br />
              <br />
              <br />
              Anas's collection finds its muse in the resilient micro-organisms that thrive in extreme conditions. Diatoms, lichens, arctic moss, dinoflagellates, and radiolarians – these tiny life forms serve as the foundation for bold designs and innovative textures that characterize the collection.
              </p>
              <div className="grid grid-cols-12 pt-10">
                <div className="col-span-6">
                  <img src="/images/outfit-2.svg" alt="" className="w-[430px] h-[360px]" />
                </div>
                <div className="col-span-6">
                  <img src="/images/outfit-3.svg" alt="" className="w-[430px] h-[360px]" />
                </div>
              </div>
              <p className="text-[25px] text-[#232323] leading-[31px] pt-8 text-start">
              "Beasts of the Urban Jungle" feels deeper than just a clothing line. We recommend thinking of this as intellectual commentary on the adaptive spirit of urban environments. The young designer describes his collection as "a profound symbiosis between the microscopic wonders of nature and the relentless energy of cityscapes". Each piece in the collection showcases intricate patterns reminiscent of these micro-organisms, translated into a fierce, modern aesthetic that celebrates individuality.
              It's too early to say but this collection could be the harbinger of a new era in streetwear, where the lines between natural science, urban living, and fashion become beautifully blurred.
              </p>
          </div>
          <div className="border-b-[1px] border-[#232323] pt-14"></div>
          <div className="border-b-[1px] border-[#232323] py-8"></div>
        </div>
      </section>
    </>
  );
}

export default AnimalPrint;