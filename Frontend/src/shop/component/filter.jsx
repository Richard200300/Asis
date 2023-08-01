import React from "react";

const Filter = () => {
  return (
    <section className="filter_component mt-5 h-[94vh] w-[292px] border-[1.5px] border-[#0B0B0B] bg-[url('./assets/images/bg_img.png')] px-5 pb-5 pt-10">
      <div>
        <p className="text-[14px]/[21px] font-[600] uppercase text-[#000000]">
          <em>Shop all </em>
        </p>
        <ul className="border-b-[1px] border-[#878787] pb-5 text-[14px]/[21px] font-[600] uppercase text-[#878787]">
          <li className="my-2">shoes & slides</li>
          <li className="my-2">pants</li>
          <li className="my-2">tops & t- shirt</li>
          <li className="my-2">bags</li>
          <li className="my-2">wristwatches</li>
          <li className="my-2">headset glasses</li>
          <li className="my-2">shoes & slides</li>
          <li>shoes & slides</li>
        </ul>
      </div>
      <div className="border-b-[1px] border-[#878787] pb-5">
        <p className="mt-5 text-[14px]/[21px] font-[600] uppercase text-[#000000]">
          sales & offers
        </p>
        <div className="my-2  flex items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] text-[#0B0B0B]">
            Members only free shipping for orders above 50,000 NGN
          </p>
        </div>
        <div className="flex  items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] text-[#0B0B0B]">
            LIMITED TIME SALES
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-[#878787] pb-5">
        <p className="mt-5 text-[14px]/[21px] font-[600] uppercase text-[#000000]">
          Gender
        </p>
        <div>
          <div className="my-2  flex items-center gap-2 ">
            <div className="">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
              MALE
            </p>
          </div>
          <div className="my-2  flex items-center gap-2 ">
            <div className="">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
              female
            </p>
          </div>
          <div className="flex  items-center gap-2 ">
            <div className="">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
              unisex
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-5 text-[14px]/[21px] font-[600] uppercase text-[#000000]">
          Collaborator
        </p>
        <div className="my-2  flex items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
            ASIS X NIKE
          </p>
        </div>
        <div className="my-2  flex items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
            ASIS X OAKLEY
          </p>
        </div>
        <div className="my-2  flex items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
            ASIS X BLUBOY
          </p>
        </div>
        <div className="my-2  flex items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
            ASIS X ZARA
          </p>
        </div>
        <div className="my-2  flex items-center gap-2 ">
          <div className="">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <p className="w-[194px]  text-[12px]/[16px] font-[500] uppercase text-[#0B0B0B]">
            ASIS X PIECE ET PATCH
          </p>
        </div>
      </div>
    </section>
  );
};

export default Filter;
