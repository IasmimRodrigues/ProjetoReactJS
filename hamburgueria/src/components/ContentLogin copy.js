import { Link } from "react-router-dom";
// import {validatePassword} from "../loginJS.js";
import { useState } from "react";
import {validateEmail, validatePassword} from '../utils/regex';

 function ContentLogin() {
  // const [email, setEmail] = useState('');

  // let validateEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
  // const validatePassword = {
  //   tamanho: /^.{6,8}$/,
  //   caracteresEspeciais: /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/,
  //   maiusculaMinuscula: /^(?=.*[a-z]{1})(?=.*[A-Z]{1})/,
  //   numero: /^(?=.*\d){1}/,
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const validate = () => {
    if(!validateEmail.test(email)) {
      // setEmailErr(true);
      console.log("o email ta errado")
      // email.classList.remove('input-vermelho');
    } else {
      setEmailErr(false)
    }

    if(!validatePassword.test(password)) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
  }



  console.log({email, password})

  return (
    <div className="contentLogin">
      <div className="contentInputs">
        <h2>Formulário de Login</h2>
        <form action="" id="create-class">
          <div class="input-block">
            <label for="email">E-mail:</label>
            <input
              type="text"
              class="email"
              id="email"

              required
              value={email}
              onChange={e => setEmail(e.target.value)}

            />

            {emailErr && <p>Email invalido</p>}
            <div class="warning" id="warning">
              <span id="emailErro" class="erro"></span>
            </div>
          </div>

          <div class="input-block">
            <label for="senha">Senha</label>
            <input
              type="text"
              name="password"
              id="password"
              
              required

              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {passwordErr && <p>Senha invalida</p>}

            <div class="warning" id="warning">
            </div>
          </div>
        </form>

        <button type="submit" form="create-class" onClick={validate}>
          {" "}
          Entrar{" "}
        </button>

        

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