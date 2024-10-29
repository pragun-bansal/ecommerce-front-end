import React from 'react'
import Carousel from './PosterCarousel'
import image1 from "../../images/image1.jpeg"
import Cards from './CategoryCards'
import CardsGrid from './CategoryGrid'
import ReviewCarousel from './ReviewCarousel'
import TestimonialsCarousel from './TestimonialsCarousel'
import {MarqueeDemo} from "../../Components/magicUI/marquee/marquee";
import {HeroScrollDemo} from "../../Components/container_scroll_animation/containerScrollAnimation";
import {BentoGridDemo} from "../../Components/acertinityUI/bentoGrid/bento-grid";
import {LayoutGridDemo} from "../../Components/acertinityUI/layoutGrid/layoutGrid";
import ShuffleHero from "./ShuffleHero";

const Home = () => {
  return (
    <div className="z-0">
      <ShuffleHero />
    {/*<div className='z-[0]'> <Carousel /></div>*/}
      <HeroScrollDemo />
      <CardsGrid />
      {/*<BentoGridDemo />*/}
      <LayoutGridDemo />
    {/* <ReviewCarousel /> */}
      <MarqueeDemo />

    {/*<TestimonialsCarousel />*/}

    </div>
  )
}

export default Home