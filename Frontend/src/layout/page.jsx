import React from "react";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <div className=" h-full p-0 ">
      <h1>Layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
