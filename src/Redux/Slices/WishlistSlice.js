import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useCookies } from 'react-cookie';





// const data = await loadState();
const Wishlist = createSlice({
  name: 'wishlist',
  initialState: {}
  ,
  reducers: {

    // replaceWishlist(state, action) {
    //     const wishlist_res = action.payload.data.wishlist;
    //     console.log(wishlist_res)
    //     const wishlistTotal = wishlist_res.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
    //     state.totalCost = wishlistTotal;
    //     state._id = wishlist_res._id;
    //     state.items = wishlist_res.items.map((item) => ({
    //         productId: item.productId._id,
    //         productName: item.productId.title,
    //         productPrice: item.productId.price,
    //         productImage: item.productId.image,
    //         qty: item.qty,
    //         countInStock: item.productId.count_in_stock,
    //     }));
    //     state.loading = false;
    //     state.changed = true;
    // },

    addItemToWishlist(state, action) {
        const newItem = action.payload;

      const existingItem = state.items.find((item) => item.productId._id=== newItem.productId._id);
      if (!existingItem) {
        state.items.push({
          productId: newItem.productId,
          qty: newItem.qty,
          _id:newItem._id
        });
        // const wishlistTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
        // state.totalCost = wishlistTotal;
      } 
      else {
        // existingItem.qty=newItem.qty;
        // const wishlistTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
        // state.totalCost = wishlistTotal;
      }
    },
    removeItemFromWishlist(state, action) {
      if(state.items.length==1){
        state.items=[]
      }
      else{
        const newItem= action.payload;
        state.items = state.items.filter((item) => item.productId._id=== newItem.productId._id);
      }
        // const wishlistTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
        // state.totalCost = wishlistTotal;
    },
  },
});

export const wishlistActions = Wishlist.actions;

export default Wishlist.reducer;