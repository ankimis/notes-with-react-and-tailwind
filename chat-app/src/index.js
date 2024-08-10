import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zB5aJrcbCviHqL7SLQOk_m6nZnbVL50",
  authDomain: "euphoric-point-351016.firebaseapp.com",
  databaseURL: "https://euphoric-point-351016-default-rtdb.firebaseio.com",
  projectId: "euphoric-point-351016",
  storageBucket: "euphoric-point-351016.appspot.com",
  messagingSenderId: "392946287831",
  appId: "1:392946287831:web:3b67cd41eef63529019c92",
  measurementId: "G-LD3RY99NL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
