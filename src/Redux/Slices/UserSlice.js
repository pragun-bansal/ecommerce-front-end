// import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
// import { useEffect } from "react";
//
//
//
//
// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     LOADING: 'loading',
//     ERROR: 'error',
//   });
//
// //get currentList data
//
//
//
// // export const loadState = () => {
// //   try {
// //     const serialState = localStorage.getItem('user');
// //     const check = JSON.parse(serialState)
// //     console.log(check);
// //     if (serialState === null) {
// //       // console.log("null ho gya")
// //       return {};
// //     }
// //     return check;
// //   } catch (err) {
// //     console.log(err)
// //     return {};
// //   }
// // };
//
//
// // // const init = loadState();
// // // console.log(initialState);
//
// const User = createSlice({
//     name:'User',
//     initialState:{},
//     reducers:{
//         logoutUser(state,action){
//           state.data={};
//         },
//         add(state,action){
//             state.data.push(action.payload)
//
//         },
//         remove(state,action){
//             return state.data.filter((item,index)=>index!=action.payload)
//         },
//         newList(state,action){
//             state.data=action.payload
//         },
//         loginUser(state,action){
//             // console.log(action.payload)
//             state=action.payload
//         },
//         fetchUser(state,action){
//           return state.data;
//         }
//     },
// })
//
//
// export const{add,remove,newList,logoutUser,loginUser,fetchUser} =User.actions;
// export default User.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
});

const User = createSlice({
    name: 'User',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        logoutUser(state, action) {
            state.data = {};
            state.status = STATUSES.IDLE;
        },
        add(state, action) {
            state.data.push(action.payload);
        },
        remove(state, action) {
            return state.data.filter((item, index) => index !== action.payload);
        },
        newList(state, action) {
            state.data = action.payload;
        },
        loginUser(state, action) {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        },
        fetchUser(state, action) {
            return state.data;
        },
        setLoading(state) {
            state.status = STATUSES.LOADING;
        },
        setError(state) {
            state.status = STATUSES.ERROR;
        },
        setIdle(state) {
            state.status = STATUSES.IDLE;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.status = STATUSES.ERROR;
            });
    }
});

export const { add, remove, newList, logoutUser, loginUser, fetchUser, setLoading, setError, setIdle } = User.actions;
export default User.reducer;

// Example async thunk action
export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await axios.get('/api/user');
    return response.data;
});