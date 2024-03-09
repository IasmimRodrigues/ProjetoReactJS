import { useState } from "react";
import { Link } from "react-router-dom";

const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validPasswordTam = /^.{6,8}$/;
const validPasswordCaractere = /[!@#$%^&*(),.?":{}|<>]/;
const validPasswordMaius = /[A-Z]/;
const validPasswordNum = /[0-9]/;
const validNomeRegex = /^.{3,}$/;

function ContentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [formError, setFormError] = useState("");

  const validate = () => {
    setEmailError("");
    setPasswordError("");
    setNomeError("");
    setCheckboxError("");
    setFormError("");

    let hasErrors = false;

    if (!validNomeRegex.test(nome)) {
      setNomeError("Nome inválido. Por favor, insira um nome.");
      hasErrors = true;
    }

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

    if (!checkboxChecked) {
      setCheckboxError("Você precisa concordar com a política de privacidade.");
      hasErrors = true;
    }

    if (!hasErrors) {
        alert("Usário cadastrado com sucesso!");
    }
  };

  return (
    <div className="contentLogin">
      <div className="contentInputs">
        <h2>Formulário de Cadastro</h2>

        <div className="input-block">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="name"
            id="name"
            placeholder="Nome"
            required
            onChange={(event) => setNome(event.target.value)}
          />
          {nomeError && <p>{nomeError}</p>}
        </div>

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
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <p>{passwordError}</p>}
        </div>

        <div className="politicaPriv">
          <div>
            <input
              type="checkbox"
              id="privacidade"
              name="privacidade"
              onChange={() => setCheckboxChecked(!checkboxChecked)}
            />
            <label htmlFor="privacidade">
              Li e concordo com a política de privacidade
            </label>
          </div>

          {checkboxError && <p>{checkboxError}</p>}
        </div>

        {formError && <p>{formError}</p>}

        <button onClick={validate}>Entrar</button>

        <div className="cadastro-info">
          <h3>Já tem cadastro?</h3>
          <Link to="/login" className="linkForm">
            <a className="link">Faça seu login</a>
          </Link>
        </div>

        <div className="loginRedesSociais">
          <h3>Cadastre com as redes sociais:</h3>
          <div className="redesSociais">
            <img src="./assets/google.svg" alt="" />
            <img src="./assets/instagram.svg" alt="" />
            <img src="./assets/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLogin;
