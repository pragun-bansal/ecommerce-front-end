import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));


const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QXGFE5T3V5');
`;


root.render(
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QXGFE5T3V5"></script>
    <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }} />
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" ></script>
  </React.StrictMode>
  </Provider>
  </GoogleOAuthProvider>
  
);
