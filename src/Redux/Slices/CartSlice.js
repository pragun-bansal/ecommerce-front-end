import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useCookies } from 'react-cookie';






// const data = await loadState();
const cartSlice = createSlice({
  name: 'cart',
  initialState: {}
  ,
  reducers: {

    replaceCart(state, action) {
        const cart_res = action.payload.data.cart;
        console.log(cart_res)
        const cartTotal = cart_res.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
        state.totalCost = cartTotal;
        state._id = cart_res._id;
        state.items = cart_res.items.map((item) => ({
            productId: item.productId._id,
            productName: item.productId.title,
            productPrice: item.productId.price,
            productImage: item.productId.image,
            qty: item.qty,
            countInStock: item.productId.count_in_stock,
        }));
        state.loading = false;
        state.changed = true;
    },

    addItemToCart(state, action) {
        const newItem = action.payload;
        let existingItem=null;
      if(state.items.length){

         existingItem = state.items.find((item) => item.productId._id=== newItem.productId._id);
      

      if (!existingItem) {
        state.items.push({
            productId: newItem.productId,
            qty: newItem.qty,
            _id:newItem._id
        });
      }
        const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
        state.totalCost = cartTotal;
      } else{
        state.items=[{
          productId: newItem.productId,
            qty: newItem.qty,
            _id:newItem._id
        }]
        const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
        state.totalCost = cartTotal;
      }
    },
    increaseItemToCart(state, action) {
      const newItem = action.payload;

    const existingItem = state.items.find((item) => item.productId._id=== newItem.productId._id);
    if (!existingItem) {
      state.items.push({
          productId: newItem.productId,
          qty: newItem.qty,
          _id:newItem._id
      });
      const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
      state.totalCost = cartTotal;
    } 
    else {
      existingItem.qty=newItem.qty+1;
      const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
      state.totalCost = cartTotal;
    }
  },
    decreaseItemToCart(state,action){
      const newItem = action.payload;

    const existingItem = state.items.find((item) => item._id=== newItem._id);
    if (!existingItem) {
      // state.items.push({
      //     productId: newItem.productId,
      //     qty: newItem.qty,
      //     _id:newItem._id
      // });
      // const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
      // state.totalCost = cartTotal;
      console.log("item not found in cart redux state")
    } 
    else {
      existingItem.qty=newItem.qty-1;
      const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
      state.totalCost = cartTotal;
    }
    },
    removeItemCompletelyFromCart(state, action) {
      if(state.items.length==1){
        state.items=[];
        state.totalCost=0;
      }
      else{
        const newItem = action.payload;
        state.items = state.items.filter((item) => item.productId._id=== newItem.productId._id);
        const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
        state.totalCost = cartTotal;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;