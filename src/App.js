
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from './PAGES/Home/Home';
import AllProductsPage from './PAGES/AllProducts/AllProductsPage';
import Footer from './Components/Footer/Footer';
import LoginHome from './PAGES/Login/LoginHome';
import ProductPage from './PAGES/Product/ProductPage';
import WishListPage from './PAGES/WishList/WishListPage';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
import {ToastContainer,toast} from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { cartActions } from './Redux/Slices/CartSlice';
import Website from './Website';
import Loader from './Components/Loader/Loader';



function App() {




  const user= useSelector((state)=>state.User);
  // const {data:wishlist}= useSelector((state)=>state.Wishlist);
  // const {data:cart}= useSelector((state)=>state.Cart);
  // const {data:allproducts}= useSelector((state)=>state.AllProducts);
// if(user && user._id){ 
//   // console.log(user);
//   localStorage.setItem("user",JSON.stringify(user));}

  const [show, setShow] = useState(false);

  return (
      <>
        {user.loading ?
          <Loader />

        :
          <Website />
        }
      </>
  );

}

export default App;
