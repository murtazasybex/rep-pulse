import React from "react";
import ourroles from "../assets/ourroles.png";

const OurRoles = () => {
  return (
    <>
      <section>
        <div className="mx-auto container flex justify-start gap-5 lg:justify-between lg:flex-nowrap flex-wrap py-20 px-2">
          <div className="w-full max-w-[380px]">
            <h1 className="text-[70px] font-extrabold text-[#0F0F0F]">
              Our Roles!
            </h1>
            <h2 className="text-[32px] text-[#29296B] font-bold">
              Marketing Associate
            </h2>
            <ul className="space-y-3 pt-5 list-item">
              <li className="text-[#0F0F0F] text-[20px] font-bold">
                Certified in High Level
              </li>
              <li className="text-[#0F0F0F] text-[20px] font-bold">
                Launch Key Media Buying Campaigns
              </li>
              <div>
                <p className="text-[#0F0F0F] text-[20px]">Paid Ads</p>
                <p className="text-[#0F0F0F] text-[20px]">Email Outreach</p>
                <p className="text-[#0F0F0F] text-[20px]">Lead Generation</p>
              </div>
              <li className="text-[#0F0F0F] text-[20px] font-bold">
                CRM & Automations
              </li>
              <div>
                <p className="text-[#0F0F0F] text-[20px]">Workflows</p>
                <p className="text-[#0F0F0F] text-[20px]">
                  Landing Pages & Forms
                </p>
              </div>
              <li className="text-[#0F0F0F] text-[20px] font-bold">
                Social Media Management
              </li>
              <div>
                <p className="text-[#0F0F0F] text-[20px]">Content Creation</p>
                <p className="text-[#0F0F0F] text-[20px]">Content Management</p>
                <p className="text-[#0F0F0F] text-[20px]">
                  Social Media Outreach
                </p>
                <p className="text-[#0F0F0F] text-[20px]">Content Marketing</p>
              </div>
              <li className="text-[#0F0F0F] text-[20px] font-medium">
                Excellent Leadership Qualities
              </li>
              <li className="text-[#0F0F0F] text-[20px] font-medium">
                Launch And Manage Podcasts/Webinars
              </li>
              <li className="text-[#0F0F0F] text-[20px] font-medium">
                Experience Working With US Digital Marketing Agencie
              </li>
            </ul>
          </div>
          <img
            src={ourroles}
            className="w-full max-w-[1000px] h-full max-h-[1000px] lg:pt-0 pt-10"
            alt="our roles"
          />
        </div>
        <div className="mx-auto w-52">
          <p className="text-[20px] text-[#0F0F0F] font-semibold text-center cursor-pointer pb-14 transition duration-300 group">
            Hover To Know More!
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0F0F0F]"></span>
          </p>
        </div>
      </section>
    </>
  );
};

export default OurRoles;
