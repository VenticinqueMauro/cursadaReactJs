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
  apiKey: "AIzaSyB5eKPNd69_YKLWA7msZNeaGMLcinoy4TY",
  authDomain: "ecommerce-coderhouse-6af8c.firebaseapp.com",
  projectId: "ecommerce-coderhouse-6af8c",
  storageBucket: "ecommerce-coderhouse-6af8c.appspot.com",
  messagingSenderId: "61570004473",
  appId: "1:61570004473:web:305441583eee9c4c80f928"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


