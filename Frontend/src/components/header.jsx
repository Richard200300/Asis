import React from "react";
import light from "../assets/light.svg";
import globe from "../assets/globe.svg";
import down from "../assets/down.svg";
import flag from "../assets/flag.svg";

const Header = () => {
  return (
    <div className=" pt-[10px] uppercase">
      <section className="flex py-[10px] justify-end ">
        <div className="flex gap-6">
          <div className="border-[1.5px] border-[#0B0B0B] py-[5px] px-[8px] flex items-center gap-3 font-[500] cursor-pointer text-[#0B0B0B] w-[139px] ">
            <img src={globe} alt="globe" />
            <p className="text-[12px]">language</p>
            <img src={down} alt="down" />
          </div>
          <div className="border-[1.5px] border-[#0B0B0B] px-[8px] py-[12px]  flex justify-center item-center w-[99px] h-[32px] font-[500] cursor-pointer text-[#0B0B0B]">
            <div className="flex items-center gap-2">
              <img src={flag} alt="globe" />
              <p className="text-[12px]">ngn</p>
              <img src={down} alt="down" />
            </div>
          </div>
        </div>
      </section>
      <div className="border-y-[1.5px] border-[#0B0B0B]  flex items-center justify-between ">
        <div className="flex">
          <div className="nav-box flex justify-center w-[174px]  max-lg:hidden">
            <p className="">shop</p>
          </div>
          <div className="nav-box border-[#0B0B0B] border-x-[1.5px] flex justify-center w-[174px]">
            <div className="flex gap-2 items-center">
              <p>explore</p>
              <img src={down} alt="down" />
            </div>
          </div>
        </div>
        <img src={light} alt="light" className="ml-5"/>
        <article className="flex">
          <div className="nav-box border-[#0B0B0B] border-x-[1.5px] w-[174px] flex justify-center max-lg:hidden ">
            <p className="">
              wishlist <span className="">(0)</span>
            </p>
          </div>
          <div className="nav-box flex border-[#0B0B0B] border-r-[1.5px] justify-center min-w-[172px]  max-lg:hidden">
            <p className="">
              cart <span className="">(0)</span>
            </p>
          </div>
          <div className="nav-box min-w-[108px] flex justify-center max-lg:border-l-[1.5px] border-[#0B0B0B] ">
            <p className="">sign in</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Header;
