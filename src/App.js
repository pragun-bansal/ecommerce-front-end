
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
import { useState } from 'react';



function App() {

  const [show, setShow] = useState(false);

  return (
    <Router>
    <div className="App scroll-smooth">
      <Navbar show={show} setShow={setShow} />
      <Cart  show={show} setShow={setShow}/>
    </div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/allproducts" element={<AllProductsPage />} />
    <Route exact path="/products" element={<ProductPage />} />
    <Route exact path="/login" element={<LoginHome />} />
    <Route exact path="/wishlist" element={<WishListPage />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
