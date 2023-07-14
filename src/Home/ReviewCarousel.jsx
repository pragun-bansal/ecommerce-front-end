import React from 'react'
import image1 from "../images/download.jpeg"

const ReviewCarousel = () => {
  return (
    <div>
        <div className="carousel carousel-center max-w-wl p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src={image1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image1} className="rounded-box" />
  </div> 

</div>
    </div>
  )
}

export default ReviewCarousel