import React from "react";
import ourroles from "../assets/ourroles.png";

const OurRoles = () => {
  return (
    <>
      <section className="mx-auto container flex justify-between py-20">
        <div className="w-full max-w-[360px]">
          <h1 className="text-[70px] font-extrabold text-[#0F0F0F]">
            Our Roles!
          </h1>
          <h2 className="text-[32px] text-[#29296B] font-bold">
            Marketing Associate
          </h2>
          <ul className="space-y-2 pt-5">
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
            <li className="text-[#0F0F0F] text-[20px] font-bold">
              Excellent Leadership Qualities
            </li>
            <li className="text-[#0F0F0F] text-[20px] font-bold">
              Launch And Manage Podcasts/Webinars
            </li>
            <li className="text-[#0F0F0F] text-[20px] font-bold">
              Experience Working With US Digital Marketing Agencie
            </li>
          </ul>
        </div>
        <img
          src={ourroles}
          className="w-full max-w-[900px] h-full max-h-[1000px]"
          alt=""
        />
      </section>
      <p className="text-[20px] text-[#0F0F0F] font-semibold text-center hover:text-[#00BDAD] transition-colors cursor-pointer pb-5">
        Hover To Know More!
      </p>
    </>
  );
};

export default OurRoles;
