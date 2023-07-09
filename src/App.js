
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

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    </Routes>
    
    </Router>
  );
}

export default App;
