import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
import image1 from "../images/download.jpeg"
import Poster11 from "../images/Poster1.png"
export default function ProductCarousel() {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      className="w-[100%] h-[100vh] mb-[30px]"
    >
    
    <div>
      <img src={Poster11} alt="image1" className="h-64 md:h-80 xl:h-[100vh] w-full" />
    </div>
    <div>
      <img src={Poster11} alt="image1" className="h-64 md:h-80 xl:h-[100vh] w-full" />
    </div>
    <div>
      <img src={Poster11} alt="image1" className="h-64 md:h-80 xl:h-[100vh] w-full" />
    </div>
    <div>
      <img src={Poster11} alt="image1" className="h-64 md:h-80 xl:h-[100vh] w-full" />
    </div>
      {/* <div>
        <Image
          src="/sale2.jpg"
          alt="image 1"
          className="h-64 md:h-80 xl:h-84 w-full"
          height={400}
          width={500}
        />
      </div>
      <div>
        <Image
          src="/cover.png"
          alt="image 1"
          className="h-64 md:h-80 xl:h-84 w-full "
          height={400}
          width={500}
        />
      </div>
      <div>
        <Image
          src="/sale.jpg"
          alt="image 1"
          className="h-64 md:h-80 xl:h-84 w-full "
          height={400}
          width={500}
        />
      </div> */}
    </Carousel>
  );
}