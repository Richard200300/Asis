import React from 'react'
import products_img from "../assets/images/products_img.png"
const Products = () => {
  return (
    <div className='w-[268px] h-[445px] cursor-pointer'>
      <img src={products_img} alt="products_img" />
      <div className="uppercase font-[600] mt-2">
      <p className='text-[16px]/[20px]'>Masked scrow/var 1</p> 
      <p className='text-[12px]/[16px] text-[#17A500]'>zara X asis</p> 
      <p className='text-[#0B0B0B] text-[12px]/[16px]'>150,000 ngn</p> 
      </div>        
    </div>
  )
}

export default Products