import React from "react";
import keypositionsimg from "../assets/why-img.png";

const KeyPositions = () => {
  return (
    <>
      <section className="bg-[#0F0F0F] py-16 px-2">
        <div className="container mx-auto flex md:justify-between justify-center lg:space-y-0 space-y-20 lg:flex-nowrap flex-wrap items-center">
          <div className="flex flex-col space-y-5 w-full max-w-[700px] justify-start text-start text-[#F8F8F8] text-[18px] ">
            <h1 className="font-extrabold md:text-[70px] text-[40px] leading-tight">
              Why Opt For These Key Positions?
            </h1>
            <p className="">
              Well, Making The Wrong Hiring Choice Can Be Costly And Put A Brake
              On Your Progress. Why Not Boost Your Agency’s Growth Through Smart
              And Strategic Recruitment? When It Comes To Building Your Digital
              Marketing Dream Team, Finding The Right Fit Should Be Effortless.
              And We’re Here To Help You With That.
            </p>
            <p className="font-medium italic">
              As Per To The Statistical Data An Average Agency Spends Up To 50%
              Of Its Revenue On Running Payroll
            </p>
            <p>
              Let’s Connect And Discuss How You Can Save Up To 60% On Your
              Payroll Expenses While{" "}
              <span className="font-medium">
                Simultaneously Building A Mission-Driven Team
              </span>
            </p>

            <p>
              We Offer An Easy Way To Hire. You Can Get Skilled Professionals
              Who Are Ready To Help Your Business Succeed Without The Hassle Of
              Trial-And-Error Hiring. Start Building A Strong Team For Your
              Agency That Can Take It To The Next Level.
            </p>
            <p>
              <span className="font-medium">Learn How To Hire Smartly </span>
              <br />
              Check Out Our Free Book Called "Hiring Tips For Digital Marketing
              Agencies." It's Filled With Practical Advice Based On More Than 14
              Years Of Experience. This Guide Will Help You Avoid Common Hiring
              Mistakes And Set Your Agency Up For Success.
            </p>
          </div>
          <img src={keypositionsimg} className="w-full max-w-[700px]" alt="" />
        </div>
      </section>
    </>
  );
};

export default KeyPositions;
