import React from "react";
import collection_img from "../../assets/images/collection_img.png";
import img_border from "../../assets/icons/img_border.svg";
import collection_arrow from "../../assets/icons/collection_arrow.svg";
import collection_small_arrow from "../../assets/icons/collection_small_arrow.svg";
import collection_ball from "../../assets/icons/collection_ball.svg";
import collection_img_2 from "../../assets/images/collection_img_2.png";
import left_button from "../../assets/icons/left_button.svg";
import right_button from "../../assets/icons/right_button.svg";

const Collection = () => {
  // Fashion data containing details of each item
  const fashionData = [
    {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, February, 2023",
    },
    // ... (more fashion data entries)
  ];

  // Determine alignment based on the number of fashion items
  const align = fashionData.length < 4 ? "items-start mt-10" : "items-center";

  return (
    // Collection section containing both sides
    <section className="flex items-start  border-b border-[#0B0B0B]  ">
      {/* Left side */}
      <section className="basis-[47%] border-r border-[#0B0B0B] pb-9 ">
        {/* Collection title */}
        <article className="mt-7 w-80 text-5xl  uppercase text-[#0B0B0B] ">
          <p>/new 2023 </p>
          <p className="text-right">summer</p>
          <p>collection</p>
        </article>
        {/* Collection description */}
        <article>
          <p className="ml-auto mr-5 mt-7 w-[25rem] text-sm font-semibold max-xl:w-full">
            {/* Collection description text */}
          </p>
        </article>
        {/* Collection image */}
        <div className="flex justify-center relative pb-10 mt-5 mx-auto max-w-[30rem] ">
          <img
            src={collection_img}
            alt="collection_img"
            className="bg-contain p-3 max-w-[32rem] h-64 overflow-hidden bg-no-repeat bg-[url('./assets/images/collection_frame.png')]  object-cover object-top"
          />
          {/* Asis x Nike tag */}
          <em className="bottom-0  left-0 absolute text-xs font-semibold uppercase">[asis x nike]</em>
        </div>
        {/* Shop Now button */}
        <div className="ml-auto mr-5 flex w-40  cursor-pointer items-center justify-center gap-2 border border-[#0B0B0B] py-2">
          <p className="text-base font-medium uppercase text-[#0B0B0B]">
            shop now
          </p>
          <img src={collection_arrow} alt="collection_arrow" />
        </div>
      </section>
      {/* Right side */}
      <section className={`flex basis-[53%]  justify-between max-xl:flex-col-reverse ${align}`}>
        <div className="">
          {/* Map through fashion data */}
          {fashionData.map((item, index) => (
            <section
              key={index}
              className="w-72 border-b border-[#0B0B0B] px-9 py-7 max-md:my-10 max-md:px-0"
            >
              <div className="w-[15rem]">
                {/* Fashion title */}
                <p className="w-11/12 border-b border-[#0B0B0B] pb-1 text-xs font-semibold">
                  <span className="mr-1">/</span> {item.title}
                </p>
                {/* Fashion description */}
                <p className="py-2 text-[10px]/[10.5px] ">{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <p className="text-[7px]/[7px] font-medium">- Released on</p>
                    <img src={collection_ball} alt="collection_ball" />
                    {/* ... (more date-related elements) */}
                  </div>
                  {/* Right arrow */}
                  <div className="">
                    <img
                      src={collection_small_arrow}
                      alt="collection_small_arrow"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {/* Fashion image and pagination */}
        <div className="relative ">
          <div className="h-[26rem] w-80">
            <img
              src={collection_img_2}
              alt="collection_img_2"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Pagination */}
          <div className="absolute mt-5 flex w-full items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-[#000000]">1</p>
              <div className="h-1 w-20 rounded-sm bg-[#B0B0B0]"></div>
              <p className="text-base font-medium text-[#000000]">4</p>
            </div>
            <img
              src={right_button}
              alt="right_button"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Collection;
