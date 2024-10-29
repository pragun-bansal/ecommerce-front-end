// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { useCookies } from 'react-cookie';
//
//
//
//
//
//
// // const data = await loadState();
// const AllProduct = createSlice({
//   name: 'AllProducts',
//   initialState: {}
//   ,
//   reducers: {
//     addItemToCart(state, action) {
//         const newItem = action.payload;
//
//       const existingItem = state.items.find((item) => item.productId === newItem.productId);
//       if (!existingItem) {
//         state.items.push({
//             productId: newItem.productId,
//             productName: newItem.productName,
//             productPrice: newItem.productPrice,
//             productImage: newItem.productImage,
//             qty: newItem.qty,
//             countInStock: newItem.countInStock,
//         });
//         const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
//         state.totalCost = cartTotal;
//       }
//       else {
//         existingItem.qty=newItem.qty;
//         const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
//         state.totalCost = cartTotal;
//       }
//     },
//     removeItemFromCart(state, action) {
//         const newItemId = action.payload;
//         state.items = state.items.filter((item) => item.productId !== newItemId);
//         const cartTotal = state.items.reduce((total, item) => total + item.qty * item.productPrice, 0);
//         state.totalCost = cartTotal;
//     },
//   },
// });
//
// export const AllProductActions = AllProduct.actions;
//
// export default AllProduct.reducer;
// front-end/src/Redux/Slices/AllProductSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk('allProducts/fetchAll', async () => {
    const response = await axios.get('/api/products');
    return response.data;
});

const AllProduct = createSlice({
    name: 'AllProducts',
    initialState: {
        items: [],
        totalCost: 0,
        status: 'idle', // idle, loading, succeeded, failed
    },
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const AllProductActions = AllProduct.actions;
export default AllProduct.reducer;