import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSI1Vm5xZTltDG9aP-xU9gYncbbtnaz2I",
  authDomain: "tienda-del-pacifico.firebaseapp.com",
  projectId: "tienda-del-pacifico",
  storageBucket: "tienda-del-pacifico.appspot.com",
  messagingSenderId: "143640901336",
  appId: "1:143640901336:web:f15482bc5a8b31cf7e09ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
