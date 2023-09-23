import React from 'react'
import Carousel from './PosterCarousel'
import image1 from "../../images/image1.jpeg"
import Cards from './CategoryCards'
import CardsGrid from './CategoryGrid'
import ReviewCarousel from './ReviewCarousel'
import TestimonialsCarousel from './TestimonialsCarousel'

import ReactGA from 'react-ga';



const Home = () => {
  useEffect(() => {
    // Track a page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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