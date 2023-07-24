import { configureStore } from "@reduxjs/toolkit";
import User from "../Slices/UserSlice"

const  store = configureStore({
    reducer:{
        User:User,
    },
})

export default store