import React, { useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import Poster11 from "../../images/Poster1.png"
import { CareGuide, ReturnPolicy, Terms } from './InfoJSON';
import CartSVG from "../../svg/shopping-cart.png";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Redux/Slices/CartSlice';
import { wishlistActions } from '../../Redux/Slices/WishlistSlice';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SoapProductDescription = ({product}) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const token = localStorage.getItem("token");
    const dispatch=useDispatch();
    const handleAddToCart=async(product)=>{
        if(!token){
            toast.error("login to continue", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        else{

            let newProduct ={};
            newProduct.qty=1;
            newProduct._id=product._id 
            newProduct.productId =product
            dispatch(cartActions.addItemToCart(newProduct))
            setshowlottie(true);
            setTimeout(()=>{
                setshowlottie(false);
    
            },3000)
            try{
                const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/addItem`,{productId:product._id,qty:1,token:token})
            }catch(err){
                console.log(err);
            }
        }
    }

    const handleAddToWishList=async(product)=>{
        if(!token){
            toast.error("login to continue", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        else{
            let newProduct ={};
            newProduct.qty=1;
            newProduct._id=product._id 
            newProduct.productId =product
            dispatch(wishlistActions.addItemToWishlist(newProduct))
            setshowlottie(true);
            try{
                const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishlist/addItem`,{productId:product._id,qty:1,token:token})
            }catch(err){
                console.log(err);
            }
            setTimeout(()=>{
                setshowlottie(false);
            },3000)
        }
    }

    const [showlottie, setshowlottie] = useState(false);

    return (
        <div>
        
            {showlottie?<div className="fixed z-50 md:left-[17vw]  xl:left-[40vw] translate-y-[0vh]">
    <Player
  autoplay
  loop
  src="https://lottie.host/a32aa65f-d8fd-445b-917d-6e9cd0049c17/waCAyqiy9U.json"
  style={{ height:'50vh' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
    </div>:<></>}


            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/5 lg:w-2/5 w-80 md:block hidden">
                    <Carousel
                        autoPlay={true}
                        interval={3000}
                        infiniteLoop={true}
                        showStatus={false}
                        showThumbs={true}
                        thumbWidth={100}
                        dynamicHeight={false}
                        className="w-[100%] h-[100vh] md:h-[70vh] xl:h-[100vh] mb-[30px] align-middle object-scale-down"
                    >
                        <div className='align-middle py-auto'>
                            <img src={product.main_image1} alt="image1" className="object-scale-down" />
                        </div>
                        <div className='align-middle py-auto'>
                            <img src={product.main_image2} alt="image2" className="object-scale-down" />
                        </div>
                        {
                            product.all_images?.map(()=>{
                                return
                            })
                        }
                    </Carousel>
                </div>
                <div className="md:hidden">
                    <Carousel
                        autoPlay={true}
                        interval={3000}
                        infiniteLoop={true}
                        showStatus={false}
                        showThumbs={true}
                        thumbWidth={100}
                        dynamicHeight={false}
                        className="w-[100%] h-[35vh] align-middle object-scale-down"
                    >
                        <div className='align-middle py-auto'>
                            <img src="https://zouk.co.in/cdn/shop/articles/image_18.png?v=1653218195" alt="image1" className="object-scale-down" />
                        </div>
                        <div className='align-middle py-auto'>
                            <img src="https://zouk.co.in/cdn/shop/articles/image_18.png?v=1653218195" alt="image1" className="object-scale-down" />
                        </div>
                        <div>
                            <img src={Poster11} alt="image1" className=" object-contain" />
                        </div>
                        <div>
                            <img src={Poster11} alt="image1" className="object-contain" />
                        </div>
                    </Carousel>
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 md:overflow-y-auto  md:h-[70vh] xl:h-[100vh]">
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-gray-600">{product.tagline}</p>
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                        >
                           {product.name}
                        </h1>
                    </div>
                    {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Colours</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">Smoke Blue with red accents</p>
                            <div
                                className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                            ></div>
                            <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div> */}
                    <div onClick={() => setShowSize(!showSize)}  className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Size</p>
                        <div className="flex items-center justify-center" >
                            <p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
                            <button
                                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                    aria-label="show or hide"
                                    
                                >
                                    <svg className={"transform " + (showSize ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                
                                
                            </div>
                            
                        </div>
                            <div className={"pt-4 text-base leading-normal pr-12 mb-4 text-gray-600 " + (showSize ? "block" : "hidden")} id="sect">
                                    <ol className='flex'>
                                       <li>
                                       <Link to="" className='inline-block hover:bg-slate-300 bg-slate-200 p-4 mr-4'>100gm</Link>
                                       </li>
                                       <li>
                                       <Link to="" className='inline-block hover:bg-slate-300 bg-slate-200 p-4 mr-4'>100gm</Link>
                                       </li>
                                       <li>
                                       <Link to="" className='inline-block hover:bg-slate-300 bg-slate-200 p-4 mr-4'>100gm</Link>
                                       </li>
                                    </ol>

                                </div>
                        <div>
                       
                    </div>
                    {/* <button
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                    >
                        <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Check availability in store
                    </button> */}
                    <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
                            					"
                        >
                           ₹{product.price}
                        </h1>
                    <div className='flex flex-col-2 justify-between'>
                    

                    <button
                        onClick={()=>{handleAddToCart(product)}}
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 mt-4 mr-2
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                    >
                        <svg className="mr-3 fill-[white]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        Add to Cart
                    </button>
                    <button
                        onClick={()=>{handleAddToWishList(product)}}
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 mt-4 ml-2
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                    >
                       
                        <svg className="mr-3 fill-[white]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                        Add to Wishlist
                    </button>
                    </div>
                    <div>
                    {product.description}
                        {/* <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        <p className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</p>
                        <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
                        <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
                        <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                        <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p> */}
                    </div>
                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800">CARE GUIDE / SHIPPING INFO</p>
                                <button
                                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                    aria-label="show or hide"
                                >
                                    <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                                <div>
                                    <ol>
                                        {
                                            CareGuide.map((item, index) => {
                                                return (
                                                    <div>
                                                        <li>{item.title}</li>
                                                        <ul className=' list-disc ml-8'>
                                                            {item.list.map((listItem, index) => {
                                                                return (

                                                                    <li>{listItem}</li>

                                                                )
                                                            })}
                                                        </ul>
                                                    </div>

                                                )

                                            })
                                        }
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-b py-4 border-gray-200">
                            <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800">RETURN/EXCHANGE POLICIES  </p>
                                <button
                                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                    aria-label="show or hide"
                                >
                                    <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            {ReturnPolicy.map((item)=>{
                                    return(
                                        <p>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-b py-4 border-gray-200">
                            <div onClick={() => setShow3(!show3)} className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800">TERMS OF SHOPPING    </p>
                                <button
                                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                    aria-label="show or hide"
                                >
                                    <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show3 ? "block" : "hidden")} id="sect">
                                {Terms.map((item)=>{
                                    return(
                                        <p>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SoapProductDescription