import React from "react";
// import "./home.module.css";
import "./home.css";

// import Header from "./components/Header";
// import Banner from "./components/Banner";
// import Lanches from "./components/Lanches";
// import Sobremesas from "./components/Sobremesas";
// import Delivery from "./components/Delivery";
// import Footer from "./components/Footer";

const script = document.createElement("script");
script.src = "https://accounts.google.com/gsi/client";
script.async = true;
script.defer = true;
document.body.appendChild(script);

const LoginGoogle = () => {
  return (
    <div>
      <h2>TESTE</h2>
      <div
        id="g_id_onload"
        data-client_id="1025543614712-o3ikvt16v5jnuajv7hihugtav8lokm50.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="redirect"
        data-login_uri="https://trabalho-boer-server-kwrv.onrender.com"
        data-auto_prompt="false"
      ></div>

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
};

export default LoginGoogle;
