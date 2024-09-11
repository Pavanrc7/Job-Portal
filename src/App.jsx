import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import TestApi from './Pages/TestApi';



const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestApi />} />
        </Routes>
      </Router>
  );
};

export default App;
