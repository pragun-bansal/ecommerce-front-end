import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadStateUser = createAsyncThunk("user/loadState", async () => {
    const serialState = localStorage.getItem("user");
    return serialState ? JSON.parse(serialState) : {};
});

export const loadStateAllProducts = createAsyncThunk("allProducts/loadState", async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/`);
    return response.status === 200 ? response.data.data : { _id: "", totalCost: 0, items: [], changed: false, loading: true };
});

export const loadStateWishlist = createAsyncThunk("wishlist/loadState", async () => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishlist/`, { token });
    return response.status === 200 ? response.data.data.wishlist : { _id: "", totalCost: 0, items: [], changed: false, loading: true };
});

export const loadStateCart = createAsyncThunk("cart/loadState", async () => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/`, { token });
    if (response.status === 200) {
        const cart = response.data.data.cart;
        cart.totalCost = cart.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
        cart.changed = false;
        cart.loading = false;
        return cart;
    }
    return { _id: "", totalCost: 0, items: [], changed: false, loading: true };
});