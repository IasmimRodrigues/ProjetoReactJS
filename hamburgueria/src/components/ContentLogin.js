import { useState } from "react";
import { Link } from "react-router-dom";

const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validPasswordTam = /^.{6,8}$/;
const validPasswordCaractere = /[!@#$%^&*(),.?":{}|<>]/;
const validPasswordMaius = /[A-Z]/;
const validPasswordNum = /[0-9]/;

function ContentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  const validate = () => {
    setEmailError("");
    setPasswordError("");
    setFormError("");

    let hasErrors = false;

    if (!validEmailRegex.test(email)) {
      setEmailError("E-mail inválido. Utilize o formato 'xxxx@xxxx.xxx'.");
      hasErrors = true;
    }

    if (!validPasswordTam.test(password)) {
      setPasswordError("Sua senha precisa ter entre 6 e 8 caracteres.");
      hasErrors = true;
    } else if (!validPasswordCaractere.test(password)) {
      setPasswordError(
        "Sua senha precisa conter pelo menos 1 caractere especial."
      );
      hasErrors = true;
    } else if (!validPasswordMaius.test(password)) {
      setPasswordError(
        "Sua senha precisa conter pelo menos 1 letra maiúscula."
      );
      hasErrors = true;
    } else if (!validPasswordNum.test(password)) {
      setPasswordError("Sua senha precisa conter pelo menos 1 número.");
      hasErrors = true;
    }

    if (!hasErrors) {
      // alert("Usário logado com sucesso!");
      // setFormError("Por favor, corrija os erros no formulário.");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="contentLogin">
      <div className="contentInputs">
        <h2>Formulário de Login</h2>

        <div className="input-block">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <p>{emailError}</p>}
        </div>

        <div className="input-block">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <p>{passwordError}</p>}
        </div>

        {formError && <p>{formError}</p>}

        <button onClick={validate}>Entrar</button>

        <div className="cadastro-info">
          <h3>Não tem cadastro?</h3>
          <Link to="/cadastrar" className="linkForm">
            <a className="link">Faça seu cadastro</a>
          </Link>
        </div>

        <div className="loginRedesSociais">
          <h3>Acesse com as redes sociais:</h3>
          <div className="redesSociais">
            {/* <Link to="/LoginGoogle">
              <img src="./assets/google.svg" alt=""></img>
            </Link> */}

            <div>
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

            {/* <img src="./assets/google.svg" alt=""></img>
            <img src="./assets/instagram.svg" alt=""></img>
            <img src="./assets/facebook.svg" alt=""></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLogin;
