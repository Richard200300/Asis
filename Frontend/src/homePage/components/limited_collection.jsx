import React from "react";
import limited_img from "../../assets/images/limited_img.png";
import img_border from "../../assets/icons/img_border.svg";
import down_arrow from "../../assets/icons/down_arrow.svg";

const Limited_collection = () => {
  return (
    <section className="flex items-start justify-between relative border-[#0B0B0B] border-t-[1.5px] pt-3 mt-[100px] ">
      <article className="basis-[52.5%]  uppercase h-[100%] mt-6">
        <div className="w-[282px] text-[40px]/[40px] font-[500] ">
          <p>
            <span className="font-[400]">/</span>limit
            <em className="font-[400]">e</em>d{" "}
            <span className="font-[400]">
              c<em>o</em>llecti<em>o</em>n
            </span>{" "}
          </p>
        </div>
        <article className="uppercase bottom-0 absolute w-[52.5%] text-[#5C5C5C] text-[16px]/[24px] font-[400]">
          <div className="flex justify-between border-[#5C5C5C] border-y-[1px] py-2 cursor-pointer">
            <p> pre-fall 2023</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>
          <div className="flex justify-between border-[#5C5C5C] border-b-[1px] py-2 cursor-pointer">
            <p>uncommon [limited time sale]</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>
          <div className="flex justify-between border-[#5C5C5C] border-b-[1px] py-2 cursor-pointer">
            <p> essentials 2023</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>
        </article>
      </article>
      <article className="relative h-[632px] w-[470px]">
        <div className="flex h-[614px] w-[458px] items-center justify-center mt-[20px]">
          <img
            src={limited_img}
            alt="limited_img"
            className=" ml-[14px] mt-[2px] h-[95%] w-[97%] object-cover object-top"
          />
        </div>
        <img
          src={img_border}
          alt="img_border"
          className="absolute bottom-[0px] right-[0px]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute top-[23px] rotate-[180deg]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute right-[0px] top-[23px] rotate-[270deg]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute bottom-[0px] rotate-[90deg]"
        />
      </article>
    </section>
  );
};

export default Limited_collection;
