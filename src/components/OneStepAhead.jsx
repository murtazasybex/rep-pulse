import React from "react";

const OneStepAhead = () => {
  return (
    <>
      <section className="w-full bg-[#29296B] py-20">
        <div className="mx-auto container text-center text-white space-y-5">
          <h1 className="md:text-[70px] text-[40px] font-bold">
            Stay One-Step Ahead With Rep Pulse!
          </h1>
          <p className="md:text-[20px] text-[16px]">
            Uncover The Secrets Of Hiring, Onboarding, And Training Your Virtual
            Assistant As We Share Tips, Tricks, And Success. Discover How To
            Unlock Massive Growth In Your Digital Marketing Agency By Hiring For
            These Three Key Roles:
          </p>
          <div className="flex justify-evenly items-center md:flex-row flex-col py-10 space-y-5 md:space-y-0">
            {/* <a className="w-1/5 py-4 text-white border-2 border-white text-center transition-colors hover:bg-white hover:text-black cursor-pointer font-medium">
              Marketing Associates
            </a> */}
            <button class="group px-12 py-3 relative text-white hover:text-black border-2 border-white h-14 overflow-hidden ">
              <div class="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative hover:text-black">
                Marketing Associates
              </span>
            </button>
            {/* <a className="w-1/5 py-4 text-white border-2 border-white text-center transition-colors hover:bg-white hover:text-black cursor-pointer font-medium">
              Sales Development
            </a> */}
            <button class="group px-14 py-3 relative text-white hover:text-black border-2 border-white h-14 overflow-hidden ">
              <div class="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative hover:text-black">Sales Development</span>
            </button>
            {/* <a className="w-1/5 py-4 text-white border-2 border-white text-center transition-colors hover:bg-white hover:text-black cursor-pointer font-medium">
              Account Managers
            </a> */}
            <button class="group px-14 py-3 relative text-white hover:text-black border-2 border-white h-14 overflow-hidden ">
              <div class="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative hover:text-black"> Account Managers</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OneStepAhead;
