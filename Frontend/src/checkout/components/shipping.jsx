import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setOrder } from "../../../redux/asis";

const Shipping = () => {
  const orderDetails = useSelector((state) => state.asis.order);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(orderDetails);
  },[])
  return (
    <div>Shipping</div>
  )
}

export default Shipping