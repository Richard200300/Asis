import React from "react";
import discover_img from "../../assets/images/discover_img.png";

const Discover = () => {
  return (
    <section className=" mt-[50px] flex justify-end pt-3">
      <article className="font-[400] text-[64px]/[64px] uppercase relative ">
        <p className=" w-[375px] text-right mr-3"><span className="font-[300] mr-1">/</span>W<em className="font-[300]">E</em> CRE<em className="font-[300]">a</em>TE</p>
      
        <p className="w-[572px] absolute left-[60%] ">F<em className="font-[300]">a</em>SH<span className="text-[#FFFFFF]">I<em className="font-[300]">o</em>N AR<em className="font-[300]">t</em> F<em className="font-[300]">o</em>R</span></p>
        <p className="absolute top-[125px] right-6">ev<em className="font-[300]">e</em>ry<em className="font-[300]">o</em>ne</p>
        <div className="flex justify-center items-center w-[131px] h-[131px] absolute bottom-0 right-6 bg-[#A67700] rounded-full ">
        <p className="text-[#FFFFFF] text-[12px]/[20px] font-[600] br-[50%]">discover</p>
        </div>
      </article>
      <article className="">
        <img src={discover_img} alt="discover_img" />
      </article>
    </section>
  );
  
};

export default Discover;
