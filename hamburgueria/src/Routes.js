import React from "react";
import Home from "./Home";
import Login from "./Login";
import Cadastrar from "./Cadastrar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastrar" element={<Cadastrar/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
