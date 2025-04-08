import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterPage from "./routes/RouterPage";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router>
      <RouterPage />
    </Router>
  );
};

export default App;
