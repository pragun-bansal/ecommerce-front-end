import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Website from './Website';
import Loader from './Components/Loader/Loader';



function App() {




  const user= useSelector((state)=>state.User);

  const [show, setShow] = useState(false);

  return (
      <>
        {user.status === "loading" ? <Loader /> : <Website />}
      </>
  );

}

export default App;
