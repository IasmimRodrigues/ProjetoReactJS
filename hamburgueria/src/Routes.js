import React from "react";
import Home from "./Home";
import Login from "./Login";
import Cadastrar from "./Cadastrar";
import Dashboard from "./Dashboard";
import Produto from "./Produto";
// import LoginGoogle from "./LoginGoogle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastrar" element={<Cadastrar/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/produto" element={<Produto/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
