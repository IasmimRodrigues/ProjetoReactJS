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
            <img src="./assets/google.svg" alt=""></img>
            <img src="./assets/instagram.svg" alt=""></img>
            <img src="./assets/facebook.svg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLogin;
