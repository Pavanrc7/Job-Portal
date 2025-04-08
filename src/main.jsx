import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './tailwind.css';


// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
