import React from 'react'
import Carousel from './Carousel'
import image1 from "../images/image1.jpeg"
import Cards from './CategoryCards'
import CardsGrid from './CategoryGrid'
import ReviewCarousel from './ReviewCarousel'

const Home = () => {
  return (
    <div>
    <Carousel />
    <CardsGrid />
    {/* <ReviewCarousel /> */}
    
    </div>
  )
}

export default Home