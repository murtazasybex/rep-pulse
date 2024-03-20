import React from "react";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <>
      <section className="mx-auto container px-2 py-5">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex flex-col space-y-10 w-full max-w-[500px] justify-start text-start">
            <h1 className="font-extrabold md:text-[50px] text-[36px] leading-tight">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </h1>
            <p className="md:text-[20px] text-[16px] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos beatae provident reprehenderit quibusdam
            </p>
            {/* <a className="w-2/5  py-4 text-white text-center bg-black transition-colors hover:bg-[#00BDAD] hover:text-white cursor-pointer">
              Talk To Us
            </a> */}
            {/* <a
              href="#_"
              class="relative w-2/5 inline-flex items-center px-12 py-3 overflow-hidden text-lg text-white bg-black border-2 hover:text-white group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-[#00BDAD] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative">Talk To Us</span>
            </a> */}
            <button class="group w-2/5 relative h-14 overflow-hidden bg-black shadow">
              <div class="absolute inset-0 w-0 bg-[#00BDAD] transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <span class="relative text-white ">Talk To Us</span>
            </button>
          </div>
          <img src={heroimg} className="w-full max-w-[750px]" alt="" />
          {/* <video
            src={bgHeader}
            type="video/mp4"
            poster="BG-Header_PosterImage.png"
            width="1920"
            height="1080"
            loop
            autoplay
          ></video> */}
          {/* <video width="1920" height="1080" loop autoplay className="absolute">
            <source src={herovideo} type="video/mp4" />
          </video> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
