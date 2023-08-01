import React from "react";
import Products from "../../components/products";
const Shop_products = ({hide_filter}) => {
  return (
    <section className="mt-5">
      <div>
      <div  className={hide_filter ? "grid grid-cols-3 gap-10" : "grid grid-cols-4 gap-10"}>

        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
      </div>
    
    </section>
  );
};

export default Shop_products;
