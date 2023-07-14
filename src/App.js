
import './App.css';
import { Navbar } from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from './Home/Home';
import ProductsPage from './Products/ProductsPage';
import Footer from './Footer/Footer';
import LoginHome from './Login/LoginHome';

function App() {
  return (
    <Router>
    <div className="App scroll-smooth">
      <Navbar />
    </div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/products" element={<ProductsPage />} />
    <Route exact path="/login" element={<LoginHome />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
