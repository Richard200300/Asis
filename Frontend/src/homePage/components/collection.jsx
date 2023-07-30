import React from "react";
import palm from "../../assets/images/palm.png";
import img_border from "../../assets/icons/img_border.svg";
import heroarrow from "../../assets/icons/heroarrow.svg";
import herosmallarrow from "../../assets/icons/herosmallarrow.svg";
import heroball from "../../assets/icons/heroball.svg";
import heroimg from "../../assets/images/heroimg.png";
import heroleftbutton from "../../assets/icons/heroleftbutton.svg";
import herorightbutton from "../../assets/icons/herorightbutton.svg";

const Collection = () => {
  return (
    <section className="flex items-start  border-b-[1.5px] border-[#0B0B0B]">
      <section className="basis-[47%] border-[#0B0B0B] border-r-[1.5px] pb-[60px] ">
        <article className="uppercase w-[384px] text-[48px]/[48px] text-[#0B0B0B]   mt-7">
          <p>
            /n<em>e</em>w 2<em>0</em>23
          </p>
          <p className="text-right">
            s<em>u</em>mm<em>e</em>r{" "}
          </p>
          <p>
            c<em>o</em>llection{" "}
          </p>
        </article>
        <article>
          <p className="w-[403px] font-[600] text-[12px]/[13px] ml-[auto] mr-[20px] mt-7">
            Asis offers a carefully curated collection of stylish and versatile
            clothing pieces that are designed to elevate everyday looks. From
            comfortable essentials to trendy statement pieces, Aisi aims to
            empower individuals to express their unique sense of style with
            confidence.
          </p>
        </article>
        <article className="w-[489px] h-[292px]  relative m-[auto] mt-7">
          <div className="w-[489px] h-[260px] flex justify-center items-center">
            <img src={palm} alt="palm" className=" mt-[10px] w-[95%] h-[95%] object-cover object-top" />
          </div>
          <img
            src={img_border}
            alt="img_border"
            className="absolute right-[0px] bottom-[27px]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute top-[5px] rotate-[180deg]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute top-[5px] right-[0px] rotate-[270deg]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute rotate-[90deg] bottom-[27px]"
          />
          <p className="font-[600] text-[12px]/[12px] uppercase absolute bottom-0">
            <em>[asis x nike]</em>
          </p>
        </article>
        <article className="flex items-center justify-center gap-2  w-[171px] border-[#0B0B0B] border-[1.5px] py-[8px] ml-[auto] mr-[20px] cursor-pointer">
          <p className="font-[500] text-[16px]/[20px] text-[#0B0B0B] uppercase">
            shop now
          </p>
          <img src={heroarrow} alt="heroarrow" />
        </article>
      </section>
      <section className="basis-[53%] flex items-center justify-between  ">
        <div className="">
          <section className="px-9 py-7  w-[319px]  border-b-[1.5px] border-[#0B0B0B]">
            <div className="w-[246px]">
              <p className="font-[600] text-[12px]/[18px] pb-1 border-b-[1.5px] border-[#0B0B0B] w-[89%]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="text-[10px]/[10.5px]  py-2 ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="font-[500] text-[7px]/[7px]">- Released on</p>
                  <img src={heroball} alt="heroball" />
                  <p></p>
                  <p className="text-[#00000080] font-[500] text-[7px]/[7px]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className="">
                  <img src={herosmallarrow} alt="herosmallarrow" />
                </div>
              </div>
            </div>
          </section>

          <section className="px-9 py-7  w-[319px]  border-b-[1.5px] border-[#0B0B0B]">
            <div className="w-[246px]">
              <p className="font-[600] text-[12px]/[18px] pb-1 border-b-[1.5px] border-[#0B0B0B] w-[89%]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="text-[10px]/[10.5px]  py-2 ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="font-[500] text-[7px]/[7px]">- Released on</p>
                  <img src={heroball} alt="heroball" />
                  <p></p>
                  <p className="text-[#00000080] font-[500] text-[7px]/[7px]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className=""></div>
              </div>
            </div>
          </section>

          <section className="px-9 py-7  w-[319px]  border-b-[1.5px] border-[#0B0B0B]">
            <div className="w-[246px]">
              <p className="font-[600] text-[12px]/[18px] pb-1 border-b-[1.5px] border-[#0B0B0B] w-[89%]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="text-[10px]/[10.5px]  py-2 ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="font-[500] text-[7px]/[7px]">- Released on</p>
                  <img src={heroball} alt="heroball" />
                  <p></p>
                  <p className="text-[#00000080] font-[500] text-[7px]/[7px]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className=""></div>
              </div>
            </div>
          </section>
          <section className="px-9 py-7  w-[319px] ">
            <div className="w-[246px]">
              <p className="font-[600] text-[12px]/[18px] pb-1 border-b-[1.5px] border-[#0B0B0B] w-[89%]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="text-[10px]/[10.5px]  py-2 ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="font-[500] text-[7px]/[7px]">- Released on</p>
                  <img src={heroball} alt="heroball" />
                  <p></p>
                  <p className="text-[#00000080] font-[500] text-[7px]/[7px]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className=""></div>
              </div>
            </div>
          </section>
        </div>
        <div className="relative bg-slate-600">
          <div className="w-[320px] h-[420px]">
          <img src={heroimg} alt="heroimg" className="w-[100%] h-[100%] object-cover object-top"/>

          </div>
          <div className="flex items-center justify-between absolute w-full mt-[20px]">
            <img src={heroleftbutton} alt="heroleftbutton" className="cursor-pointer" />

            <div className="flex items-center gap-2">
              <p className="font-[500] text-[16px]/[10.5px] text-[#000000]">1</p>
              <div className="w-[78px] h-[2px] bg-[#B0B0B0] rounded-sm"></div>
              <p className="font-[500] text-[16px]/[10.5px] text-[#000000]">3</p>
            </div>
            <img src={herorightbutton} alt="herorightbutton" className="cursor-pointer"/>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Collection;
