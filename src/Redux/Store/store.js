import { configureStore } from "@reduxjs/toolkit";
import WishList from "../Slices/WishlistSlice";
import AllProductSlice from "../Slices/AllProductSlice";
import cartSlice from "../Slices/CartSlice";
import User from "../Slices/UserSlice"

const loadState = () => {
    try {
      const serialState = localStorage.getItem("user");
      return serialState ? JSON.parse(serialState) : {};
    } catch (err) {
      console.log(err);
      return {};
    }
  };

const  store = configureStore({
    reducer:{
        User:User,
        Cart: cartSlice,
        AllProducts:AllProductSlice,
        WishList:WishList
    },
    preloadedState: {
        User:{
            data:loadState(),
        }
    }
})

export default store