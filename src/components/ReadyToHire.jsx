import React from "react";
import ctaimg from "../assets/ctaimg.png";

const ReadyToHire = () => {
  return (
    <>
      <section className="bg-[#00BDAD] w-full">
        <div className="flex xl:justify-between justify-start xl:flex-nowrap flex-wrap xl:px-0 px-2 xl:py-0 py-5">
          <div className="w-full max-w-[850px] text-white pt-5 xl:pl-14 pl-0 space-y-3">
            <h1 className="md:text-[75px] text-[45px] font-bold leading-tight">
              Ready To Hire A Marketing Enthusiast?
            </h1>
            <p className="text-[20px] pb-8">
              Running A Digital Marketing Agency Can Be A Real Juggling Act,
              Handling So Many Tasks All At Once. But, Let's Face It, You Can't
              Do Everything By Yourself.
            </p>
          </div>
          <div className="flex justify-between w-full max-w-[500px] items-center gap-10">
            <button class="group w-2/5 relative text-white hover:text-black border-2 border-white h-14 overflow-hidden">
              <div class="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative hover:text-black">Get Started</span>
            </button>
            <img
              src={ctaimg}
              className="xl:flex hidden h-full"
              width={200}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadyToHire;
