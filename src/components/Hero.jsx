import React from "react";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <>
      <section className="mx-auto container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-10 w-full max-w-[500px] justify-start text-start">
            <h1 className="font-extrabold text-[50px] leading-tight">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </h1>
            <p className="text-[20px] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos beatae provident reprehenderit quibusdam
            </p>
            <a className="w-2/5 py-4 text-white text-center bg-black transition-colors hover:bg-[#00BDAD] hover:text-white cursor-pointer">
              Talk To Us
            </a>
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
