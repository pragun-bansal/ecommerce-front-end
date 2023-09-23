// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './Redux/Store/store';
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
//   <Provider store={store}>
//   <React.StrictMode>
//     <App />
//     <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" ></script>
//   </React.StrictMode>
//   </Provider>
//   </GoogleOAuthProvider>
  
// );


import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import { GoogleOAuthProvider } from "@react-oauth/google";

// Import react-ga
import ReactGA from 'react-ga';

// Initialize react-ga with your Tracking ID
ReactGA.initialize('UA-XXXXXXXXX-X'); // Replace with your Tracking ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);
