import React, { useState } from 'react'
import Products1 from '../../images/Products1.jpg'
import { Link } from 'react-router-dom';

const ProductsCard = ({product}) => {
const [hover,setHover] = useState(false);


  return (
    <div>


<div onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} class="w-full  max-w-xl rounded-lg  p-[2%]">
<Link to={`/products/${product._id}`}>
        <img class="w-[460px] lg:h-[28vw] h-[45vw] object-cover" src={hover?product.main_image1:product.main_image2} alt="product image" />
    </Link>
    <div class="px-5 pb-5">
    <Link to={`/products/${product._id}`}>
            <h5 class="text-sm lg:text-md text-center font-semibold tracking-tight text-gray-900 mx-auto">{product.name}</h5>
        </Link>
        <div class="lg:mx-[24%] xl:mx-[36%] flex">
            <div class="flex items-center">
            {[...Array(Math.round(product.rating))].map((e, i) => (
                <svg class="w-4 h-4 text-[#EE6983] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
      ))}
      {[...Array(5-Math.round(product.rating))].map((e, i) => (
        <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
      ))}
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{product.rating}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="lg:text-3xl font-bold text-gray-900 m-0">₹{product.price}</span>
        </div>
        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{product.name}</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">₹{product.price}</p>
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
    </div>
</div>


    </div>
  )
}

export default ProductsCard