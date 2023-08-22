import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product_detail from "./component/product_detail";
// import SpecialCategory from "../components/specialCategory";
import Loading from "../components/loading";
import axios from "axios";
import SpecialCategory from "../components/specialcategory";

const Page = () => {
  const { id } = useParams();
  const [hideCart, ShowCart] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = `${import.meta.env.VITE_API_URL}products/${id}`;
  // const { data } = useFetch(apiUrl);

  const name = "you may also like";
  const handleFetchProducts = async () => {
    setIsLoading(true);
    try {
      let { data } = await axios.get(apiUrl);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleFetchProducts();
     window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    handleFetchProducts();
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" h-full px-8">
      <div>
        {/* {hideCart && <Cart data={data} hideCart={hideCart} ShowCart={ShowCart} />} */}

        {data && (
          <div className="">
            <Product_detail id={id} data={data} ShowCart={ShowCart} />
            <SpecialCategory
              category={data.category}
              name={name}
              except={data._id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
