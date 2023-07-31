import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";




export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
  });

//get currentList data



// export const loadState = () => {
//   try {
//     const serialState = localStorage.getItem('user');
//     const check = JSON.parse(serialState)
//     console.log(check);
//     if (serialState === null) {
//       // console.log("null ho gya")
//       return {};
//     }
//     return check;
//   } catch (err) {
//     console.log(err)
//     return {};
//   }
// };


// // const init = loadState();
// // console.log(initialState);

const User = createSlice({
    name:'User',
    initialState:{},
    reducers:{
        logoutUser(state,action){
          state.data={};
        },
        add(state,action){
            state.data.push(action.payload)

        },
        remove(state,action){
            return state.data.filter((item,index)=>index!=action.payload)
        },
        newList(state,action){
            state.data=action.payload
        },
        loginUser(state,action){
            // console.log(action.payload)
            state=action.payload
        },
        fetchUser(state,action){
          return state.data;
        }
    },
})


export const{add,remove,newList,logoutUser,loginUser,fetchUser} =User.actions;
export default User.reducer;