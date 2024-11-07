import React, {useState} from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    // console.log(image, description,name, formattedPrice);
    const [hover,setHover] = useState(false);
    console.log(product)
    return (
        <Link to={`/products/${product._id}`}>
        <span
            className="relative flex flex-col items-center text-center h-full w-[95%] bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
            // href="#dolce-gabbana-cropped"

        >
            <img
                className="h-[30vw]"
                // src={image}
                src={hover?product.all_images[1]:product.all_images[0]}
                alt={product.description}
                onMouseEnter={()=>{setHover(true)}}
                onMouseLeave={()=>setHover(false)}
            />
            <p className="mt-2 font-bold uppercase text-gray-800">{product.name}</p>
            <p className="mt-1 text-gray-600">{product.tagline}</p>
            <p className="mt-1 font-bold text-gray-800">₹{product.price}</p>
            <button
                className="absolute top-2 right-2 rounded-full h-10 w-10 bg-white p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
                <svg className="w-full h-full fill-gray-300 hover:fill-red-500 transition-colors" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </span>
        </Link>
    );
};

export default ProductCard;
