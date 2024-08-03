import React from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Pages() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default Pages;
