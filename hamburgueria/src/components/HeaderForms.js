import { Link } from "react-router-dom";

export default function HeaderForms() {
  return (
    <header class="page-header">
      <div class="top-bar-container">
        <a href="#">
          <Link to="/"><img src="./assets/back.svg"/></Link>
          
        </a>
      </div>
      <div class="header-content">
        <strong>Formulário de cadastro de senha</strong>
      </div>
    </header>
  );
}
