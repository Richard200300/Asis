import React from "react";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <div className='px-7 bg-[#FFFEF5]'>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
