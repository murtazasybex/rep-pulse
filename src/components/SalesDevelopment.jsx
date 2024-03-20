import React from "react";
import salesdevelopment from "../assets/sales-2.mp4";

const SalesDevelopment = () => {
  return (
    <>
      <div className="flex md:justify-around justify-center flex-wrap lg:flex-nowrap lg:pt-32 pt-10 pb-5 px-2 gap-3">
        <div className="space-y-4 w-full max-w-[700px] lg:text-start text-center">
          <h1 className="text-[#29296B] text-[32px] font-bold">
            Sales Development
          </h1>
          <p className="text-[#0F0F0F] text-[20px] font-medium pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr. et justo duo dolores et ea rebum. Stet clita kasd
            gubergren,
          </p>

          <button className="text-[24px] text-[#0F0F0F] underline hover:no-underline italic font-bold transition duration-300 group">
            Hire A Sales Development
            <span class="block max-w-0 group-hover:max-w-[300px] transition-all duration-500 h-1 bg-[#00BDAD]"></span>
          </button>
        </div>
        <video
          width={500}
          height={500}
          loop
          autoplay
          className="rounded-full my-5 lg:my-14 xl:my-4"
        >
          <source src={salesdevelopment} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default SalesDevelopment;
