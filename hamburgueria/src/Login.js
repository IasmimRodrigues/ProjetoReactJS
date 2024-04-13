import React from "react";
import HeaderForms from "./components/HeaderForms";
import MainForms from "./components/MainForms";
import Header from "./components/Header";
import ContentLogin from "./components/ContentLogin";
import TitleLogin from "./components/TitleLogin";


import "./login.css";
// import "./validacao.js";

const Login = () => {
  return (
    <div className="content-login">
      <TitleLogin/>
      <ContentLogin/>
      {/* <Logando/> */}
    </div>
  );
};

export default Login;
