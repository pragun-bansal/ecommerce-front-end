
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




function App() {




  const {data:user}= useSelector((state)=>state.User);
// if(user && user._id){ 
//   // console.log(user);
//   localStorage.setItem("user",JSON.stringify(user));}

  const [show, setShow] = useState(false);

  return (
    <Router>
    <div className="App scroll-smooth">
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
      <Navbar show={show} setShow={setShow} />
      <Cart  show={show} setShow={setShow}/>
    </div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/allproducts/:category/:sortBy" element={<AllProductsPage />} />
    <Route path="/products/:productId" element={<ProductPage />} />
    <Route exact path="/login" element={user && user.data?<Home/>:<LoginHome />} />
    <Route exact path="/wishlist" element={<WishListPage />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
