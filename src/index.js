import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" ></script>
  </React.StrictMode>
  </Provider>
  
);
