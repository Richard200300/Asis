import React, { useState } from "react";
import useFetch from "./useFetch.jsx";
import Products from "./products.jsx";
import { Link } from "react-router-dom";
import left_button from "../assets/icons/left_button.svg";
import right_button from "../assets/icons/right_button.svg";
import up_arrow from "../assets/icons/up_arrow.svg";
import Loading from "./loading.jsx";

const SpecialCategory = ({ name }) => {
  const { data } = useFetch("http://localhost:5000/api/products/?limit=10");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (increment) => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      const newPosition = Math.max(
        0,
        Math.min(
          container.scrollWidth - container.clientWidth,
          scrollPosition + increment,
        ),
      );
      setScrollPosition(newPosition);
      container.scrollLeft = newPosition;
    }
  };

  return (
    <section>
      {data ? (
        <section className="relative my-14 flex w-full items-start justify-between border-t border-asisDark pt-12 uppercase">
          <article className="w-56 text-right text-4xl font-semibold">
            <p> / {name}</p>
            <div className="mt-5 w-56 ">
              <div className="ml-auto flex w-24  items-center justify-between">
                <img
                  src={left_button}
                  alt="left_button"
                  className="w-8 cursor-pointer"
                  onClick={() => handleScroll(-305)}
                />
                <img
                  src={right_button}
                  alt="right_button"
                  className="w-8 cursor-pointer"
                  onClick={() => handleScroll(305)}
                />
              </div>
            </div>
            <div className="absolute bottom-0 w-56">
              <Link to={`/shop`}>
                <div className=" ml-auto flex h-8 w-32 cursor-pointer items-center justify-center gap-2 border border-[#000000] px-5 uppercase">
                  <p className="text-xs font-medium">view all</p>
                  <img src={up_arrow} alt="up_arrow" />
                </div>
              </Link>
            </div>
          </article>
          <article className="scroll-container scroll-snap-x mandatory scrollbar-width-thin scrollbar-thumb-gray-500 w-[70%] overflow-x-scroll scroll-smooth pb-5 transition-all duration-300">
            {data && (
              <div className="flex gap-10">
                {data.products.map((data) => (
                  <div key={data._id}>
                    <Link to={`/product/${data._id}`}>
                      <Products
                        name={data.name}
                        price={data.price}
                        collaborations={data.collaborations}
                        images={data.images}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </article>
        </section>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default SpecialCategory;
