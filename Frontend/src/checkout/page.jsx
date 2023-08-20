import React, { useState } from "react";
import Order from "./components/order";
import CheckoutCart from "./components/checkoutCart";
const Page = () => {
  
  return (
    <main className="flex h-full items-stretch gap-20">
      <Order />
      <CheckoutCart />
    </main>
  );
};

export default Page;
