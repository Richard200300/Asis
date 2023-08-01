import React from "react";
import down from "../../assets/icons/down.svg";
import hidden_filter from "../../assets/icons/hidden_filter.svg";
import search from "../../assets/icons/search.svg";

const Search = ({setHide_filter}) => {
  return (
    <section className="mt-8 flex items-center border-y-[1.5px] border-[#000000]">
      <div className="flex h-[37px] w-[145px] cursor-pointer items-center justify-center border-r-[1.5px] border-[#000000] uppercase text-[#0B0B0B]">
        <div className="flex justify-center gap-1">
          <p className="text-[14px]/[16px] font-[500]" onClick={()=>{
            setHide_filter(prev_filter => !prev_filter)
          }}> hide filter</p>
          <img src={hidden_filter} alt="hidden_filter" />
        </div>
      </div>
      <div className=" w-full basis-[80%] items-center gap-3 uppercase text-[#0B0B0B] relative">
        <input
          type="text"
          placeholder="SEARCH"
          className="w-full bg-[url('./assets/images/bg_img.png')] px-5 text-[14px]/[16px] font-[500] text-[#B0B0B0] outline-0"
        />
        <img src={search} alt="search" className="absolute right-5 bottom-1 cursor-pointer"  />
      </div>{" "}
      <div className="flex h-[37px] w-[145px] cursor-pointer items-center justify-center border-l-[1.5px] border-[#000000] uppercase text-[#0B0B0B]">
        <div className="flex justify-center gap-1">
          <p className="text-[14px]/[16px] font-[500]"> sort by</p>
          <img src={down} alt="down" />
        </div>
      </div>
    </section>
  );
};

export default Search;
