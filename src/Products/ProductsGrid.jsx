import React from 'react'
import ProductsCard from './ProductsCard'

const ProductsGrid = () => {
  return (
    <div className='mx-[2%]'>
        <div className=' grid lg:grid-cols-3  grid-cols-2 align-middle justify-center gap-y-7 mx-auto'>
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
        </div>
    </div>
  )
}

export default ProductsGrid