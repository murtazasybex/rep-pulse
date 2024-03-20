import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="w-full py-5 px-2">
        <nav className="container mx-auto flex justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex w-full md:max-w-[360px] justify-end items-center gap-14">
            <h1 className="text-[24px] md:block hidden font-medium cursor-pointer transition duration-300 group">
              Get In Touch!
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0F0F0F]"></span>
            </h1>
            <div className="dot rounded-full md:flex hidden"></div>
            {/* <img src={menu} className="invert w-full max-w-[40px]" alt="" /> */}
            <div class="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-white p-2 hover:bg-slate-200">
              <div class="space-y-2">
                <span class="block h-1 w-12 origin-center rounded-full bg-[#0F0F0F] transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                <span class="block h-1 w-10 origin-center rounded-full bg-[#0F0F0F] transition-transform ease-in-out group-hover:w-12 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
