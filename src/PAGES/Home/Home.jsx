import React from 'react'
import Carousel from './PosterCarousel'
import image1 from "../../images/image1.jpeg"
import Cards from './CategoryCards'
import CardsGrid from './CategoryGrid'
import ReviewCarousel from './ReviewCarousel'
import TestimonialsCarousel from './TestimonialsCarousel'

const Home = () => {
  return (
    <div>
    <div className='z-[-10]'> <Carousel /></div>
    <CardsGrid />
    {/* <ReviewCarousel /> */}
    <TestimonialsCarousel />
    
    </div>
  )
}

export default Home