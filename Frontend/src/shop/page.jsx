import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Search from "./component/search";
import back_to_top from "../assets/icons/back_to_top.svg";
import Shop_products from "./component/shop_products";
import Filter from "./component/filter.jsx";
import Footer from "../components/footer";

const Page = () => {
  const [hide_filter, setHide_filter] = useState(true);
  return (
    <div className=" h-full p-0 ">
      <Header />
      <Banner />
      <Search setHide_filter={setHide_filter} />

      <section className="flex flex-row-reverse justify-between">
        <div className={hide_filter ? "flex items-center justify-center" : "flex items-center justify-center m-auto"}>
          <div className="relative">
            <Shop_products hide_filter={hide_filter} />
          </div>
        </div>
        <div>
          
         {hide_filter && <div className="sticky top-5">
            <Filter/>
          </div>}
          <div>
            <div className="sticky top-0"></div>

            <div className="relative mt-[100px]  "></div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="relative mt-[100px]   border-t-[1.5px] border-[#0B0B0B]">
          <img
            src={back_to_top}
            alt="back_to_top"
            className="absolute right-[10%] top-[-25px] cursor-pointer"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
