import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../../Redux/Slices/CartSlice";
import { wishlistActions } from "../../Redux/Slices/WishlistSlice";
import { fetchCartData } from "../../Redux/Store/cart-actions";

const Cart = ({ show, setShow }) => {
    const cartStateRedux = useSelector((state) => state.Cart);
    console.log(cartStateRedux)
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    let isAuthenticated = true;
    if (token === null) isAuthenticated = false;

    const handleIncrease = async (product) => {
        console.log(product);
        // product.qty=product.qty+1;
        dispatch(cartActions.increaseItemToCart(product))
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/addItem`,{productId:product.productId._id,qty:product.qty+1,token:token})
        }catch(err){
            console.log(err);
        }
    }
    const handleDecrease = async (product) => {
        if (product.qty > 1) {
            dispatch(cartActions.decreaseItemToCart(product));
            try{
                const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/addItem`,{productId:product.productId._id,qty:product.qty-1,token:token})
            }catch(err){
                console.log(err);
            }
        }
        else {
            dispatch(cartActions.removeItemCompletelyFromCart(product))
            try{
                const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/deleteItem`,{productId:product.productId._id,token:token})
            }catch(err){
                console.log(err);
            }
        }
        
    }
    const handleRemove = async (product) => {
        dispatch(cartActions.removeItemCompletelyFromCart(product))
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/deleteItem`,{productId:product.productId._id,token:token})
        }catch(err){
            console.log(err);
        }
    }
    const handleAddToWishlist = async (product) => {
        dispatch(wishlistActions.addItemToWishlist(product))
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishlist/addItem`,{productId:product.productId._id,qty:1,token:token})
        }catch(err){
            console.log(err);
        }
    }


    // useEffect(() => {
    //     if (prodStateRedux.products.length === 0) {
    //       dispatch(fetchProductData());
    //     }
    //   }, [dispatch]);

    //   useEffect(() => {
    //     if (isAuthenticated === true && cartStateRedux.changed === false) {
    //       dispatch(fetchCartData());
    //     }
    //   }, [dispatch, isAuthenticated]);


    return (
        <>
            <div >
                {/* <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                        Open Modal
                    </button>
                </div> */}
                {show && (
                    <div className="w-full h-full z-[20] bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolutex right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Cart</p>
                                    {
                                        cartStateRedux.items.length? cartStateRedux.items.map((product, index) => {
                                            return (
                                                <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                                    <div className="w-1/4" onClick={() => setShow(false)}>
                                                        <Link to={`/products/${product.productId._id}`}>
                                                            <img src={product.productId.main_image1} alt className="w-full h-full object-center object-cover" />
                                                        </Link>
                                                    </div>
                                                    <div className="md:pl-3 md:w-3/4">
                                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{product.productId.tagline}</p>
                                                        <div className="flex items-center justify-between w-full pt-1">
                                                            <p className="text-base font-black leading-none text-gray-800">{product.productId.name}</p>
                                                            <p className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none justify-center content-center">
                                                                <button onClick={() => { handleIncrease(product) }} className="border border-gray-200">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                                                                </button>
                                                                {product.qty}
                                                                <button onClick={() => { handleDecrease(product) }} className="border border-gray-200">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                                                                </button>
                                                            </p>
                                                        </div>
                                                        {product.productId.description}
                                                        <div className="flex items-center justify-between pt-5 pr-6">
                                                            <div className="flex itemms-center">
                                                                <button onClick={() => { handleAddToWishlist(product) }} className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to wishlist</button>
                                                                <button onClick={() => { handleRemove(product) }} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</button>
                                                            </div>
                                                            <p className="text-base font-black leading-none text-gray-800">₹{product.productId.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }):<div className="mt-[30vh] mx-auto text-center text-[40px]">No Items in the cart</div>
                                    }
                                </div>
                                {cartStateRedux.items.length?<div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">₹{cartStateRedux.totalCost}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">₹{cartStateRedux.totalCost<3000?`120`:`0`}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">₹{cartStateRedux.totalCost * 18 / 100}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">₹{(cartStateRedux.totalCost * 118 / 100) + (cartStateRedux.totalCost > 3000 ? 0 : 120)
}</p>
                                            </div>
                                            <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>:<></>}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cart;
