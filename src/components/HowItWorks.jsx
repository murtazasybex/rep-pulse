import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section className="bgHowitworks">
        <div className="mx-auto container p-10">
          <h1 className="text-[75px] font-extrabold text-white text-center">
            How It Works?
          </h1>
          <div className="flex md:justify-between justify-center md:space-y-0 space-y-10 py-20">
            <div className="w-full max-w-[300px] text-white text-center">
              {/* <div className="bg-[#00BDAD] rounded-lg"></div> */}
              <h1 className="text-[26px] font-medium pb-2">Discovery Call</h1>
              <p className="text-[18px]">
                We kickstart the process by understanding your candidate needs
                and crafting a personalized job description. This sets our
                vetting process in motion seamlessly.
              </p>
            </div>
            <div className="w-full max-w-[300px] text-white text-center">
              {/* <div className="bg-[#00BDAD] rounded-lg"></div> */}
              <h1 className="text-[26px] font-medium pb-2">
                Interview Process
              </h1>
              <p className="text-[18px]">
                Meet our carefully selected candidates, pre-vetted to match your
                requirements with an impressive approval rate of over 90%.
              </p>
            </div>
            <div className="w-full max-w-[300px] text-white text-center">
              {/* <div className="bg-[#00BDAD] rounded-lg"></div> */}
              <h1 className="text-[26px] font-medium pb-2">On-Boarding</h1>
              <p className="text-[18px]">
                Experience our top-notch onboarding procedure, where we
                introduce you to your dedicated customer support representative.
              </p>
            </div>
            <div className="w-full max-w-[300px] text-white text-center">
              {/* <div className="bg-[#00BDAD] rounded-lg"></div> */}
              <h1 className="text-[26px] font-medium pb-2">
                Step Back & Expand
              </h1>
              <p className="text-[18px]">
                As your Agency Future Leader achieves the milestones we've set,
                it's your signal to scale your team and embrace growth!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
