import React from "react";
import Header from "../components/header";
import Collection from "./components/collection";
import Banner from "../components/banner";
import New_Arrival from "./components/new_arrival";
import Limited_collection from "./components/limited_collection";
import Shop from "./components/shop";
import Discover from "./components/discover";
import Membership from "./components/membership";
import Footer from "../components/footer";
const Page = () => {
  return (
    <div className=" h-full p-0 ">
      <Header />
      <Collection />
      <Banner />
      <New_Arrival />
      <Limited_collection />
      <Shop />
      <Discover />
      <Membership />
      <Footer />
    </div>
  );
};

export default Page;
