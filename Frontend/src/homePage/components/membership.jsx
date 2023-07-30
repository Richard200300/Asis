import React from "react";

const Membership = () => {
  return (
    <section className="flex justify-between">
      <div className="w-[264px] text-[40px]/[40px] uppercase">
        <p>/aisi membership</p>
      </div>
      <article className="basis-[80%] bg-[#A67700] p-5">
        <div className="w-[221px] text-[40px]/[40px] font-[600] uppercase text-[#FFFEF5]">
          <p>Become a member</p>
        </div>
        <div
          className="flex gap-5
text-[16px]/[24px] font-[500] text-[#0B0B0B]"
        >
          <p className="flex h-[48px] w-[190px] items-center justify-center bg-[#FFFEF5] cursor-pointer ">
            Join us
          </p>
          <p className="flex h-[48px] w-[190px] items-center justify-center bg-[#FFFEF5] cursor-pointer">
            sign in
          </p>
        </div>
      </article>
    </section>
  );
};

export default Membership;
