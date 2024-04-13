import React from "react";
import HeaderForms from "./components/HeaderForms";
import MainForms from "./components/MainForms";
import Header from "./components/Header";
import ContentProduto from "./components/ContentProduto";
import TitleProduto from "./components/TitleProduto";


import "./login.css";
import "./Table.css";
// import "./validacao.js";

const Produto = () => {
  return (
    <div className="content-login">
      <ContentProduto/>
      {/* <TitleProduto/> */}
      {/* <Logando/> */}
    </div>
  );
};

export default Produto;
