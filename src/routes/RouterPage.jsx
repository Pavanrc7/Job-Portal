import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Employers from "../components/Employers";
import Jobs from "../jobs/Jobs";
import ContactUs from "../components/Contact";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Otp from "../authentication/Otp";
import NotFound from "../components/NotFound";
import Price from "../components/Price";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employers" element={<Employers />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/price" element={<Price />} />
    </Routes>
  );
}

export default RouterPage;
