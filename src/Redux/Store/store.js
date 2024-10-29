// import { configureStore } from "@reduxjs/toolkit";
// import WishList from "../Slices/WishlistSlice";
// import AllProductSlice from "../Slices/AllProductSlice";
// import cartSlice from "../Slices/CartSlice";
// import User from "../Slices/UserSlice"
// import axios from "axios";
//
// const loadStateUser = () => {
//     try {
//       let serialState = localStorage.getItem("user");
//       if(serialState){
//         serialState=JSON.parse(serialState)
//         serialState.loading=false;
//         return serialState;
//       }
//       else{
//         return {}
//       }
//       return serialState ? JSON.parse(serialState) : {};
//     } catch (err) {
//       console.log(err);
//       return {};
//     }
//   };
//
//   export const loadStateAllProducts = async () => {
//     try {
//       const token  = localStorage.getItem('token');
//       const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/`);
//       let serialState=null;
//       // console.log(response)
//       if(response.status==200){
//         serialState=response.data.data;
//
//         serialState.loading=false;
//         // console.log(serialState);
//       }
//       if (serialState === null) {
//         return {
//             _id: "",
//             totalCost: 0,
//             items: [],
//             changed: false,
//             loading: true
//       }
//     }
//       return serialState;
//     } catch (err) {
//       return {
//           _id: "",
//           totalCost: 0,
//           items: [],
//           changed: false,
//           loading: true
//     }
//   }
//   };
//
//
// export const loadStateWishlist = async () => {
//     try {
//       const token  = localStorage.getItem('token');
//       const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishlist/`,{token:token});
//       let serialState=null;
//       // console.log(response)
//       if(response.status==200){
//         serialState=response.data.data.wishlist;
//
//         serialState.loading=false;
//       //   const wishlist_res = serialState;
//       //   const wishlistTotal = wishlist_res.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
//       //   serialState.totalCost = wishlistTotal;
//       //   serialState.changed=false;
//       //   serialState.loading=false;
//         // console.log(serialState);
//       }
//       if (serialState === null) {
//         return {}
//     }
//       return serialState;
//     } catch (err) {
//       return {
//           _id: "",
//           totalCost: 0,
//           items: [],
//           changed: false,
//           loading: true
//     }
//   }
//   };
//
//   export const loadStateCart = async () => {
//     try {
//       const token  = localStorage.getItem('token');
//       const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/`,{token:token});
//       let serialState=null;
//       // console.log(response)
//       if(response.status==200){
//         serialState=response.data.data.cart;
//         const cart_res = serialState;
//         const cartTotal = cart_res.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
//         serialState.totalCost = cartTotal;
//         serialState.changed=false;
//         serialState.loading=false;
//         // console.log(serialState);
//       }
//       if (serialState === null) {
//         return {
//             _id: "",
//             totalCost: 0,
//             items: [],
//             changed: false,
//             loading: true
//
//       }
//     }
//       return serialState;
//     } catch (err) {
//       return {
//           _id: "",
//           totalCost: 0,
//           items: [],
//           changed: false,
//           loading: true
//     }
//   }
//   };
//
// const  store = configureStore({
//     reducer:{
//         User:User,
//         Cart: cartSlice,
//         AllProducts:AllProductSlice,
//         WishList:WishList
//     },
//     preloadedState: {
//         User:loadStateUser(),
//         AllProducts:await loadStateAllProducts(),
//         WishList:await loadStateWishlist(),
//         Cart:await loadStateCart(),
//     }
// })
//
// export default store
import { configureStore } from "@reduxjs/toolkit";
import WishList from "../Slices/WishlistSlice";
import AllProductSlice from "../Slices/AllProductSlice";
import cartSlice from "../Slices/CartSlice";
import User from "../Slices/UserSlice";
import axios from "axios";

// const loadStateUser = async() => {
//     try {
//         let serialState = localStorage.getItem("user");
//         if (serialState) {
//             serialState = JSON.parse(serialState);
//             serialState.loading = false;
//             return serialState;
//         } else {
//
//             const response =await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/getUser`, { token: localStorage.getItem("token") });
//             console.log(response);
//             if (response.status === 200) {
//                 serialState = response.data;
//                 console.log(serialState);
//                 localStorage.setItem("user", JSON.stringify(serialState));
//                 serialState.loading = false;
//                 return serialState;
//             }
//             else{
//                 console.log("error")
//                 return {};
//             }
//
//         }
//     } catch (err) {
//         console.log(err);
//         return {};
//     }
// };
const loadStateUser = async () => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/getUser`, { token: localStorage.getItem("token") });
        console.log(response);
        if (response.status === 200) {
            const userData = response.data;
            console.log(userData);
            return userData;
        } else {
            console.log("error");
            return {};
        }
    } catch (err) {
        console.log(err);
        return {};
    }
};
export const loadStateAllProducts = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/`);
        let serialState = null;
        if (response.status === 200) {
            serialState = response.data.data;
            serialState.loading = false;
        }
        if (serialState === null) {
            return {
                _id: "",
                totalCost: 0,
                items: [],
                changed: false,
                loading: true,
            };
        }
        return serialState;
    } catch (err) {
        return {
            _id: "",
            totalCost: 0,
            items: [],
            changed: false,
            loading: true,
        };
    }
};

export const loadStateWishlist = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishlist/`, { token: token });
        let serialState = null;
        if (response.status === 200) {
            serialState = response.data.data.wishlist;
            serialState.loading = false;
        }
        if (serialState === null) {
            return {};
        }
        return serialState;
    } catch (err) {
        return {
            _id: "",
            totalCost: 0,
            items: [],
            changed: false,
            loading: true,
        };
    }
};

export const loadStateCart = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/`, { token: token });
        let serialState = null;
        if (response.status === 200) {
            serialState = response.data.data.cart;
            const cart_res = serialState;
            const cartTotal = cart_res.items.reduce((total, item) => total + item.qty * item.productId.price, 0);
            serialState.totalCost = cartTotal;
            serialState.changed = false;
            serialState.loading = false;
        }
        if (serialState === null) {
            return {
                _id: "",
                totalCost: 0,
                items: [],
                changed: false,
                loading: true,
            };
        }
        return serialState;
    } catch (err) {
        return {
            _id: "",
            totalCost: 0,
            items: [],
            changed: false,
            loading: true,
        };
    }
};

const store = configureStore({
    reducer: {
        User: User,
        Cart: cartSlice,
        AllProducts: AllProductSlice,
        WishList: WishList,
    },
    preloadedState: {
        User: await loadStateUser(),
        AllProducts: await loadStateAllProducts(),
        WishList: await loadStateWishlist(),
        Cart: await loadStateCart(),
    },
});

// Clear the Redux store on page refresh
window.addEventListener("beforeunload", () => {
    store.dispatch({ type: "RESET" });
});

export default store;