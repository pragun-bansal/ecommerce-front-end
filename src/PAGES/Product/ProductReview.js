import React, { useState } from "react";
import { Reviews } from "./ReviewsJSON";
import moment from 'moment';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion"

const ProductReviews = ({ product,confirmDelete,setConfirmDelete,writeReview,setWriteReview }) => {

    const [toBeDeleted,setToBeDeleted]=useState({});
    const [newReview,setNewReview] = useState({
        rating:5,
        title:undefined,
        comment:undefined
    })
    const [menu, setMenu] = useState(true);
    const [menu1, setMenu1] = useState(false);
    const token = localStorage.getItem("token")
    const user = useSelector((state) => state.User)
    const handleChange=(e)=>{
        setNewReview((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        console.log(newReview);
    }
    const handleSubmitReviews=async(e)=>{

        if(!newReview.title){
            toast.error("Please add a tagline in your review", {
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
        
        else if(!newReview.comment){
            toast.error("Please add a comment in your review", {
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
            try{
                const response =await axios.post(`${process.env.REACT_APP_SERVER_URL}/reviews/add`,{productId:product._id,comment:newReview.comment,title:newReview.title, rating:newReview.rating,token:token});
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }catch(err){
                console.log(err);
            }
        }

        e.preventDefault();
        
    }
    const handleReview = () => {
        if (!token) {
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
        else {

            setWriteReview(!writeReview)
        }
    }

    const handleOpenModal = async(item) => {
        setToBeDeleted(item);
        setConfirmDelete(true);
    }

      const handleCloseModal = () => {
        setToBeDeleted({});
        setConfirmDelete(false);
      };


    const handleDeleteReview = async(item) => {
        handleCloseModal();
    const reviewId=item._id
    try{
        const response =await axios.post(`${process.env.REACT_APP_SERVER_URL}/reviews/delete`,{productId:product._id,reviewId:reviewId,token:token});
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }catch(err){
        console.log(err);
    }
 }

 const modalAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3} },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
  };

    const date = new Date()


    return (
        <div className="px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center mt-16 lg:mt-0">

            <div className="flex flex-col justify-start items-start w-full space-y-8 ">
            <AnimatePresence>
            {confirmDelete &&
                (<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} ><div className="fixed z-30 top-[20vh] md:top-[35vh] md:left-[10vw] lg:left-[15vw] w-[90%]  md:w-[85%] lg:w-[70vw] flex justify-start items-start flex-col shadow-xl shadow-gray-500  p-8  bg-gray-50 ">
                                    <h1 className="mx-auto mb-8 font-bold text-[30px]"> Are you Sure You Want To Delete This Review?</h1>
                                    <div className="flex">
                                    {<button onClick={()=>handleDeleteReview(toBeDeleted)} className=" hover:bg-red-600 bg-red-500 py-2 px-8 mb-4 ml-4 md:ml-[100%] lg:ml-[190%] rounded-md">
                                        Yes
                                        </button>}
                                        {<button onClick={()=>{handleCloseModal() }} className="ml-28 md:ml-8 bg-green-500 hover:bg-green-600 py-2 px-8 mb-4 rounded-md ">
                                        No
                                        </button>}
                                    </div>
                                <div className="p-4 shadow-md shadow-gray-500 w-[100%]  md:w-[90%]">
                                <div className="flex flex-col md:flex-row justify-between w-full">
                                    <div className="flex flex-row justify-between items-start">
                                        <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">{toBeDeleted.title}</p>
                                        <button onClick={() => setMenu(!menu)} className="ml-4 md:hidden">
                                            <svg className={"transform " + (menu ? "rotate-180" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 12.5L10 7.5L5 12.5" stroke="#EE6983" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        
                                    </div>
                                    <div className="cursor-pointer mt-2 md:mt-0 flex">
                                    
                                        {[...Array(toBeDeleted.rating)].map((e, i) => (
                                            <svg class="h-[21px] text-[#EE6983] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                        {[...Array(5 - toBeDeleted.rating)].map((e, i) => (
                                            <svg class=" h-[21px] text-gray-200 mr-2 stroke-2 stroke-[#EE6983] fill-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                        
                                    </div>
                                </div>
                                <div className={"md:block " + (menu ? "block" : "hidden")}>
                                    <p className="mt-3 text-base leading-normal text-gray-600 w-[75vw] md:w-[80vw] xl:w-[50vw]">{toBeDeleted.comment}</p>

                                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                        <div>
                                            <img src={toBeDeleted.user?toBeDeleted.user.pfp:"https://i.ibb.co/LNchwvr/5794329.jpg"} alt="girl-avatar" className="w-[50px] h-[50px] rounded-full" />
                                        </div>
                                        <div className="flex flex-col justify-start items-start space-y-2">
                                            <p className="text-base font-medium leading-none text-gray-800">{toBeDeleted.user?toBeDeleted.user.name:"Deleted User"}</p>
                                            <p className="text-sm leading-none text-gray-600">{moment(toBeDeleted.createdAt).format("ll")}</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </motion.div>)
            }
            {writeReview && 
                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
                    <form class="fixed z-30 top-[35vh] md:left-[10vw] lg:left-[15vw] w-[100%] md:w-[85%] lg:w-[70vw] flex justify-start items-start flex-col shadow-xl shadow-gray-500  p-8  bg-gray-50 ">
                    
                        <div className="flex flex-col md:flex-row justify-between w-full">
                            <div className="flex flex-row justify-between items-start">
                                <input onChange={handleChange} value = {newReview.title} id="title" placeholder="Tagline to your comment here" className="w-[80vw] md:w-[50vw] text-xl md:text-2xl font-medium leading-normal text-gray-800 p-1" />
                            </div>
                            <div className="cursor-pointer mt-2 md:mt-0 flex justify-start content-center">

                                Rating:<select onChange={handleChange} value={newReview.rating} id="rating" aria-label="Select quantity" class="py-2 px-1  mr-6 focus:outline-none">
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <button onClick={(e)=>{e.preventDefault();setWriteReview(false)}} >
                                        <svg className="fill-gray-50 h-[30px] p-1.5 bg-[#EE6983]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                        </button>
                        </div>
                        {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
                        <div className={"md:block " + (menu ? "block" : "hidden")}>
                            <input onChange={handleChange} value = {newReview.comment} id="comment" placeholder="Write your comment here" className="p-1 mt-3 text-base leading-normal text-gray-600 w-[80vw] md:w-[60vw] xl:w-[50vw]" />

                            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                <div>
                                    <img src={user.pfp?user.pfp:"check"} alt="avatar" className="w-[50px] h-[50px] rounded-full" />
                                </div>
                                <div className="flex flex-col justify-start items-start space-y-2">
                                    <p className="text-base font-medium leading-none text-gray-800">{user.name}</p>
                                    <p className="text-sm leading-none text-gray-600">{moment(date).format("ll")}</p>
                                </div>
                                <button type="submit" onClick={handleSubmitReviews} class="mx-2 xl:translate-x-[33vw] md:translate-x-[40vw]  translate-x-[20vw] my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">Submit Review</button>
                            </div>
                            <hr class="h-px w-[50vw] mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-200" />
                        </div>
                        
                    </form></motion.div>}</AnimatePresence>
                <div className="flex ">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                    <button onClick={() => { handleReview() }} class="mx-2 xl:translate-y-0 xl:translate-x-[33vw] md:translate-x-[52vw] translate-y-[-3vw] translate-x-[20vw] my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">Write a Review</button>
                </div>
                <div className="overflow-y-auto lg:h-[30vh]">
                
                    {product.reviews.map((item, index) => {
                        return (
                            <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8 ">
                                {index == 0 ? <></> : <hr class="h-px w-[50vw] mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-200" />}
                                <div className="flex flex-col md:flex-row justify-between w-full">
                                    <div className="flex flex-row justify-between items-start">
                                        <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">{item.title}</p>
                                        <button onClick={() => setMenu(!menu)} className="ml-4 md:hidden">
                                            <svg className={"transform " + (menu ? "rotate-180" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 12.5L10 7.5L5 12.5" stroke="#EE6983" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        
                                    </div>
                                    <div className="cursor-pointer mt-2 md:mt-0 flex">
                                    
                                        {[...Array(item.rating)].map((e, i) => (
                                            <svg class="h-[21px] text-[#EE6983] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                        {[...Array(5 - item.rating)].map((e, i) => (
                                            <svg class=" h-[21px] text-gray-200 mr-2 stroke-2 stroke-[#EE6983] fill-transparent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                        {item.user && user._id == item.user._id ?<button onClick={()=>handleOpenModal(item)} className="ml-4">
                                        <svg className="fill-gray-50 h-[30px] p-1.5 bg-[#EE6983]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                        </button>:<></>}
                                    </div>
                                </div>
                                <div className={"md:block " + (menu ? "block" : "hidden")}>
                                    <p className="mt-3 text-base leading-normal text-gray-600 w-[75vw] md:w-[80vw] xl:w-[50vw]">{item.comment}</p>

                                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                        <div>
                                            <img src={item.user?item.user.pfp:"https://i.ibb.co/LNchwvr/5794329.jpg"} alt="girl-avatar" className="w-[50px] h-[50px] rounded-full" />
                                        </div>
                                        <div className="flex flex-col justify-start items-start space-y-2">
                                            <p className="text-base font-medium leading-none text-gray-800">{item.user?item.user.name:"Deleted User"}</p>
                                            <p className="text-sm leading-none text-gray-600">{moment(item.createdAt).format("ll")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;
