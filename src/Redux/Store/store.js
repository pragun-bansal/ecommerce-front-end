import { configureStore } from "@reduxjs/toolkit";
import WishList from "../Slices/WishlistSlice";
import AllProductSlice from "../Slices/AllProductSlice";
import cartSlice from "../Slices/CartSlice";
import User from "../Slices/UserSlice"

const  store = configureStore({
    reducer:{
        User:User,
        Cart: cartSlice,
        AllProducts:AllProductSlice,
        WishList:WishList
    },
})

export default store