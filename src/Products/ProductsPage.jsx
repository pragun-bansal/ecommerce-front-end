import React from 'react'
import RatingGraph from '../RatingSystem/RatingGraph'
import ProductsCard from './ProductsCard'
import ProductsGrid from './ProductsGrid'

const ProductsPage = () => {
  return (
    <div>
        <ProductsGrid />
        <RatingGraph />
    </div>
  )
}

export default ProductsPage