
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsCard from './AllProductsCard'

const ProductsGrid = () => {
  const {data:allProducts} = useSelector((state)=>state.AllProducts)
  const category = useParams();
  // console.log(JSON.stringify(category))
  // console.log(allProducts)



  return (
    <div className='mx-[2%]'>
        <div className=' grid lg:grid-cols-3  grid-cols-2 align-middle justify-center gap-y-7 mx-auto'>
        {allProducts.map((product) => {
        // Check if the desiredCategory is present in the product's categories array
        if (product.category.includes(category.category)) {
          return <ProductsCard key={product.id} product={product} />;
        } else {
          // You can add alternative rendering or simply return null if you don't want to render for specific categories.
          return null;
        }
      })}
        </div>
    </div>
  )
}

export default ProductsGrid