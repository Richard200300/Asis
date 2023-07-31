import React from "react";
import newarrivalleftbutton from "../../assets/icons/heroleftbutton.svg";
import newarrivalrightbutton from "../../assets/icons/herorightbutton.svg";
import new1 from "../../assets/images/new1.png";
import new2 from "../../assets/images/new2.png";
import new3 from "../../assets/images/new3.png";
import up_arrow from "../../assets/icons/up_arrow.svg";

const New_Arrival = () => {
  return (
    <section className="flex items-start justify-between mt-7 border-[#000000] border-t-[1.5px] pt-16 relative">
      <article className=" h-[100%]">
        <div className="uppercase w-[194px] ">
          <p className="font-[500] text-[40px]/[40px] text-right">
            n<em className="font-[400]">e</em>w{" "}
          </p>
          <p className="font-[500] text-[40px]/[40px]  text-right">
            arriv<em className="font-[400]">a</em>l
          </p>
        </div>
        <div className="w-[194px] mt-[20px] ">
          <div className="w-[96px] flex items-center justify-between ml-[auto]">
            <img
              src={newarrivalleftbutton}
              alt="newarrivalleftbutton"
              className="cursor-pointer"
            />
            <img
              src={newarrivalrightbutton}
              alt="newarrivalrightbutton"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[104px] h-[32px] border-[#000000] border-[1.5px] uppercase absolute bottom-0 left-[80px] flex justify-center items-center gap-2">
          <p className="font-[500] text-[12px]/[16px]">view all</p>
          <img src={up_arrow} alt="up_arrow" />
        </div>
      </article>
      <article className="flex gap-4 border-b-[1px] border-[#B0B0B0] pb-5 ml-[auto]">
        <div className="w-[336px] h-[541px] uppercase">
          <img src={new1} alt="new1" />
          <div className="mt-2">
            <p className="font-[600] text-[#0B0B0B] text-[16px]/[20px]">
              mvif denim jean
            </p>
            <p className="font-[600] text-[#17A500] text-[12px]/[16px]">
              AISI X CARHARRT
            </p>
            <p className="font-[600] text-[#0B0B0B] text-[12px]/16px]">
              172,000 NGN
            </p>
          </div>
        </div>
        <div className="w-[336px] h-[541px] uppercase">
          <img src={new2} alt="new2" />
          <div className="mt-2">
            <p className="font-[600] text-[#0B0B0B] text-[16px]/[20px]">
              mvif denim jean
            </p>
            <p className="font-[600] text-[#17A500] text-[12px]/[16px]">
              AISI X CARHARRT
            </p>
            <p className="font-[600] text-[#0B0B0B] text-[12px]/16px]">
              172,000 NGN
            </p>
          </div>
        </div>
        <div className="w-[336px] h-[541px] uppercase">
          <img src={new3} alt="new3" />
          <div className="mt-2">
            <p className="font-[600] text-[#0B0B0B] text-[16px]/[20px]">
              mvif denim jean
            </p>
            <p className="font-[600] text-[#17A500] text-[12px]/[16px]">
              AISI X CARHARRT
            </p>
            <p className="font-[600] text-[#0B0B0B] text-[12px]/16px]">
              172,000 NGN
            </p>
          </div>
        </div>
      </article>

      <div className=""></div>
    </section>
  );
};

export default New_Arrival;
