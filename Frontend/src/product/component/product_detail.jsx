import React, { useState, useEffect } from "react";
import down from "../../assets/icons/down.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart } from "../../../redux/asis";
import CartLoading from "../../components/cartLoader";
import AddToCartLoading from "./addToCartLoading";

const Product_detail = ({ data }) => {
  // States
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const dispatch = useDispatch();

  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Effect to set initial selected image
  useEffect(() => {
    if (data.images && data.images.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  // Handle adding to cart
  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    if (selectedSize) {
      try {
        axios.defaults.withCredentials = true;
        let item = {
          productId: data._id,
          size: selectedSize,
          quantity: 1,
        };
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}carts`,
          item,
        );
        dispatch(setCart(response.data.cart));
        toast.success("Item added to cart", {
          style: {
            border: "1px solid #713200",
            padding: "8px 16px",
            color: "#713200",
            borderRadius: "4px",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        setIsAddingToCart(false);
      } catch (error) {
        console.log(error);
        toast.error("Failed to add item to cart", {
          style: {
            border: "1px solid red",
            padding: "8px 16px",
            color: "red",
            borderRadius: "4px",
          },
        });
        setIsAddingToCart(false);
      }
    } else {
      toast.error("Select a size to add to cart", {
        style: {
          border: "1px solid red",
          padding: "8px 16px",
          color: "red",
          borderRadius: "4px",
        },
      });
      setIsAddingToCart(false);
    }
  };

  return (
    <section className="product_container mb-20 mt-10 h-full border-y border-asisDark">
      {/* Product details */}
      {data ? (
        <section className="flex items-start gap-5">
          {/* Thumbnail images */}
          <section className="gap flex basis-7 flex-col justify-center py-5">
            {data.images?.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={` mb-5 flex h-20 w-24 cursor-pointer items-center justify-center bg-contain bg-no-repeat ${
                  img === selectedImage
                    ? `bg-[url('./assets/images/frames.png')]`
                    : ""
                }`}
              >
                <img
                  src={`${import.meta.env.VITE_BLOB_URL}${img}`}
                  alt="collection_img"
                  className="mr-5 h-16 w-14 object-cover object-top "
                />
              </div>
            ))}
          </section>

          {/* Selected image */}
          <section className="items-cent  flex basis-[45%] justify-center overflow-hidden border-x border-asisDark px-3 py-5">
            {selectedImage && (
              <img
                src={`${import.meta.env.VITE_BLOB_URL}${selectedImage}`}
                className="h-[31rem] w-[32rem]   overflow-hidden object-cover object-top"
              />
            )}
          </section>

          {/* Product information */}

          <section className="basis-[40%] py-5">
            <p className="mb-9 text-3xl font-medium text-asisDark">
              /{data.name}
            </p>
            {/* Sizes */}
            <section className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
              {data.countInStock?.map((sizeData, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSize(sizeData.size)}
                  className={`flex h-10 w-24 cursor-pointer items-center justify-center border text-xs font-medium uppercase ${
                    selectedSize === sizeData.size
                      ? " border-asisDark text-asisDark"
                      : " border-[#C4C4C4] text-[#C4C4C4]"
                  }`}
                >
                  {sizeData.size}
                </div>
              ))}
            </section>

            {/* Additional details */}
            <section className="">
              {/* Time */}
              <article className="flex items-center justify-between text-base font-semibold">
                <p className="uppercase text-asisDark">time</p>
                <p className="text-[#17A500]">{currentTime}</p>
              </article>

              {/* Description */}
              <p className="my-9 text-sm font-medium text-asisDark">
                {data.description}
              </p>

              {/* Add to cart */}

              <button
                className={`relative my-3 flex max-h-12  w-full justify-center  py-4 text-center text-xs font-semibold uppercase ${
                  (selectedSize)
                    ? "bg-asisDark text-[#FFFFFF]"
                    : "bg-asisDark/70 text-[#C4C4C4]"
                }`}
                disabled={isAddingToCart}
                onClick={() => {
                  handleAddToCart();
                }}
              >
                {isAddingToCart ? (
                  <AddToCartLoading />
                ) : (
                  <p>Add to cart- {data.price?.toLocaleString()} NGN</p>
                )}
              </button>

              {/* Add to wishlist */}
              <button className="relative mb-3 w-full cursor-pointer border border-asisDark py-4 text-center text-xs font-semibold uppercase text-asisDark">
                add to wishlist
              </button>

              {/* Accordion */}
              <section className="border-y border-asisDark text-sm uppercase text-asisDark ">
                <article className="flex cursor-pointer items-center justify-between border-b border-asisDark py-2">
                  <p>product details</p>
                  <img src={down} alt="down" />
                </article>

                <article className="flex cursor-pointer items-center justify-between py-2">
                  <p>size guild</p>
                  <img src={down} alt="down" />
                </article>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section>product not found</section>
      )}
    </section>
  );
};

export default Product_detail;
