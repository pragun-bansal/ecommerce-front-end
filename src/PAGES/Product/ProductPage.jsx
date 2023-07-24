import React from 'react'
import RatingGraph from '../../Components/RatingSystem/RatingGraph'
import ProductDescription from './ProductDescription'
import ProductReviews from './ProductReview'

const ProductPage = () => {
  return (
    <div>
        <ProductDescription />
        <div className='xl:flex'>

        <RatingGraph />
        <ProductReviews />
        </div>
    </div>
  )
}

export default ProductPage