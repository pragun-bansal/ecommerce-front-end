
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsCard from './AllProductsCard'

const ProductsGrid = () => {
  const allProducts = useSelector((state)=>state.AllProducts)
  const {category,sortBy} = useParams();
  console.log(sortBy);
  // console.log(JSON.stringify(category))
  // console.log(allProducts)

  const ratingDecreasingProducts = [...allProducts].sort((a, b) => b.rating - a.rating);
  const priceDecreasingProducts = [...allProducts].sort((a, b) => b.price - a.price);
  const priceIncreasingProducts = [...allProducts].sort((a, b) => a.price - b.price);
  const newArrivalProducts = [...allProducts].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  

  return (
    <div className='mx-[2%]'>
        <div className=' grid lg:grid-cols-3  grid-cols-2 align-middle justify-center gap-y-7 mx-auto'>
        {sortBy == "incPrice" ?priceIncreasingProducts.map((product) => {
        // Check if the desiredCategory is present in the product's categories array
        if (product.category.includes(category)) {
          return <ProductsCard key={product.id} product={product} />;
        } else {
          // You can add alternative rendering or simply return null if you don't want to render for specific categories.
          return null;
        }
        
      }):<></>}
      {sortBy=="decPrice"?priceDecreasingProducts.map((product) => {
        // Check if the desiredCategory is present in the product's categories array
        if (product.category.includes(category)) {
          return <ProductsCard key={product.id} product={product} />;
        } else {
          // You can add alternative rendering or simply return null if you don't want to render for specific categories.
          return null;
        }
        
      }):<></>}
      {sortBy=="newArrivals"?newArrivalProducts.map((product) => {
        // Check if the desiredCategory is present in the product's categories array
        if (product.category.includes(category)) {
          return <ProductsCard key={product.id} product={product} />;
        } else {
          // You can add alternative rendering or simply return null if you don't want to render for specific categories.
          return null;
        }
        
      }):<></>}
      {sortBy=="userRating"?ratingDecreasingProducts.map((product) => {
        // Check if the desiredCategory is present in the product's categories array
        if (product.category.includes(category)) {
          return <ProductsCard key={product.id} product={product} />;
        } else {
          // You can add alternative rendering or simply return null if you don't want to render for specific categories.
          return null;
        }
        
      }):<></>}
        </div>
    </div>
  )
}

export default ProductsGrid