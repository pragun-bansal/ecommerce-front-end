import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useCookies } from 'react-cookie';






// const data = await loadState();
const AllProduct = createSlice({
  name: 'AllProducts',
  initialState: {}
  ,
  reducers: {
    addItemToCart(state, action) {
        const newItem = action.payload;

      const existingItem = state.items.find((item) => item.productId === newItem.productId);
      if (!existingItem) {
        state.items.push({
            productId: newItem.productId,
            productName: newItem.productName,
            productPrice: newItem.productPrice,
            productImage: newItem.productImage,
            qty: newItem.qty,
            countInStock: newItem.countInStock,
        });
        const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
        state.totalCost = cartTotal;
      } 
      else {
        existingItem.qty=newItem.qty;
        const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
        state.totalCost = cartTotal;
      }
    },
    removeItemFromCart(state, action) {
        const newItemId = action.payload;
        state.items = state.items.filter((item) => item.productId !== newItemId);
        const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
        state.totalCost = cartTotal;
    },
  },
});

export const AllProductActions = AllProduct.actions;

export default AllProduct.reducer;