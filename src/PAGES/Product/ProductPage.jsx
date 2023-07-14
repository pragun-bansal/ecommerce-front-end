import React from 'react'
import RatingGraph from '../../Components/RatingSystem/RatingGraph'
import ProductDescription from './ProductDescription'

const ProductPage = () => {
  return (
    <div>
        <ProductDescription />
        <RatingGraph />
    </div>
  )
}

export default ProductPage