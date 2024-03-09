import React from "react";
import HeaderForms from "./components/HeaderForms";
import MainForms from "./components/MainForms";
import Header from "./components/Header";
import ContentCadastrar from "./components/ContentCadastrar";
import TitleCadastrar from "./components/TitleCadastrar";

import "./login.css";
// import "./validacao.js";

const Login = () => {
  return (
    <div className="content-login">
      <TitleCadastrar/>
      <ContentCadastrar/>
    </div>
  );
};

export default Login;
