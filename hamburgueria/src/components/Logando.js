import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegistrationForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');

  const validarNome = () => {
    const nameRegex = /^.{3,}$/;
    if (nameRegex.test(nome)) {
      return 'input-verde';
    } else {
      return 'input-vermelho';
    }
  };

  const validarEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
    if (emailRegex.test(email)) {
      return 'input-verde';
    } else {
      return 'input-vermelho';
    }
  };

  const validarCep = () => {
    const cepRegex = /^\d{5}-\d{3}$/;
    if (cepRegex.test(cep)) {
      return 'input-verde';
    } else {
      return 'input-vermelho';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validarNome() === 'input-vermelho' ||
      validarEmail() === 'input-vermelho' ||
      validarCep() === 'input-vermelho'
    ) {
      alert('Preencha corretamente todos os campos obrigatórios!');
    } else {
      alert('Formulário enviado com sucesso!');
      // Adicione aqui a lógica de envio do formulário, se necessário
    }
  };

  return (
    <div id="container">
      <header className="page-header">
        <div className="header-content">
          <strong>Formulário de cadastro</strong>
        </div>
      </header>

      <main>
        <form onSubmit={handleSubmit} id="create-class">
          <fieldset>
            <legend>Seus dados</legend>
            <div className={`input-block ${validarNome()}`}>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                className="name"
                id="name"
                required
                onChange={(e) => setNome(e.target.value)}
              />
              <div className="warning" id="warning">
                <span id="nomeErro" className="erro"></span>
              </div>
            </div>

            <div className={`input-block ${validarEmail()}`}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                className="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="warning" id="warning">
                <span id="emailErro" className="erro"></span>
              </div>
            </div>

            <div className={`input-block ${validarCep()}`}>
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                className="cep"
                id="cep"
                required
                onChange={(e) => setCep(e.target.value)}
              />
              <div className="warning" id="warning">
                <span id="cepErro" className="erro"></span>
              </div>
            </div>
          </fieldset>
          <footer>
            <button type="submit" form="create-class">
              Enviar
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}
