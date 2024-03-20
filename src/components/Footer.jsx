import React from "react";
import badgeone from "../assets/foot-badge-one.png";
import badgetwo from "../assets/foot-badge-two.png";
import badgethree from "../assets/foot-badge-three.png";
import badgefour from "../assets/foot-badge-four.png";
import badgefive from "../assets/foot-badge-five.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#0F0F0F] w-full py-10 px-2">
        <div className="mx-auto container">
          <div className="flex xl:justify-around justify-start xl:flex-nowrap flex-wrap pt-10">
            <div className="text-[#F8F8F8] w-full max-w-[420px] space-y-10">
              <h1 className="md:text-[65px] text-[45px] font-bold leading-tight">
                How Can We Help You?
              </h1>
              <div className="flex">
                <a
                  href="#"
                  className="md:text-[50px] transform hover:scale-125 text-[40px] italic hover:no-underline underline font-semibold transition duration-300 group"
                >
                  Get In Touch!
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#00BDAD]"></span>
                </a>
                {/* <img src="" alt="" /> */}
              </div>
            </div>
            <span className="border-r border-[#707070] xl:block hidden"></span>
            <div className="flex flex-col">
              <div className="flex w-full xl:flex-nowrap flex-wrap max-w-[900px] lg:space-x-20 space-x-5 py-10">
                <img
                  src={badgethree}
                  className="w-full max-w-[120px] h-[120px] transform transition hover:scale-150"
                  alt=""
                />
                <img
                  src={badgefour}
                  className="w-full max-w-[120px] h-[120px] transform transition hover:scale-150"
                  alt=""
                />
                <img
                  src={badgeone}
                  className="w-full max-w-[150px] h-[120px] transform transition hover:scale-150"
                  alt=""
                />

                <div className="lg:space-y-8 space-y-5 lg:pt-2 pt-8">
                  <img
                    src={badgetwo}
                    className="w-full transform transition hover:scale-150"
                    alt=""
                  />
                  <img
                    src={badgefive}
                    className="w-full  transform transition hover:scale-150"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="md:text-[30px] text-[20px] text-[#F8F8F8]">
                  Follow Us On
                </h1>

                <div className="flex"></div>
              </div>
            </div>
          </div>
          <hr className="mt-14 text-[#707070]" />
          <div className="flex justify-between flex-wrap pt-10">
            <div className="flex lg:space-x-14 space-x-0 lg:flex-nowrap flex-wrap w-full max-w-[700px]">
              <img src={logo} alt="" />
              <p className="text-[16px] text-[#F8F8F8] lg:pt-0 pt-3">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt.
              </p>
            </div>
            <div className="flex text-[#F8F8F8] lg:pt-0 pt-8 items-center space-x-5">
              <a href="#" className="transition duration-300 group">
                Terms And Agreement
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
              <div className="dot rounded-full invert"></div>
              <a href="#" className="transition duration-300 group">
                Privacy Policy
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
