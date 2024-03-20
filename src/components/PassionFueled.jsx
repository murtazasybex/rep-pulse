import React from "react";
import passionfuel from "../assets/passionfuel.png";

const PassionFueled = () => {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto flex md:justify-between justify-center lg:space-y-0 space-y-20 flex-wrap lg:flex-nowrap items-center">
          <div className="flex flex-col space-y-5 w-full max-w-[700px] justify-start text-start text-[#F8F8F8] text-[18px] md:pl-10 px-2 pt-8">
            <h1 className="font-extrabold md:text-[70px] text-[50px] leading-tight">
              Passion-Fueled Professionals
            </h1>
            <p className="">
              Optimize Your Agency's Talent Pool By Securing Top-Notch
              Professionals And Save Up To 60% On Payroll.
            </p>
            {/* <a className="w-2/5 py-4 text-white border-2 border-white text-center transition-colors hover:bg-white hover:text-black cursor-pointer">
              Get Started
            </a> */}
            <button class="group w-2/5 relative text-white hover:text-black border-2 border-white h-14 overflow-hidden ">
              <div class="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative hover:text-black">Get Started</span>
            </button>
          </div>
          <img src={passionfuel} className="w-full max-w-[700px]" alt="" />
        </div>
      </section>
    </>
  );
};

export default PassionFueled;
