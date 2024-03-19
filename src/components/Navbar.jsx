import React from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <>
      <header className="w-full py-5">
        <nav className="container mx-auto flex justify-between">
          <img src={logo} className="w-full max-w-[200px]" alt="" />
          <div className="flex w-full max-w-[350px] items-center gap-14">
            <h1 className="text-[24px] font-medium hover:underline delay-500 cursor-pointer">
              Get In Touch!
            </h1>
            <div className="dot rounded-full"></div>
            <img src={menu} className="invert w-full max-w-[40px]" alt="" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
