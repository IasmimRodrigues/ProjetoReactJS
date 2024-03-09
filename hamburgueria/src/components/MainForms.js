export default function HeaderForms() {
  return (
    <main>
      <form action="" id="create-password">
        <fieldset>
          <legend>Seus dados</legend>
          <div class="input-block">
            <label for="login">Login</label>
            <input type="text" name="login" id="login" onkeyup="" required />

            <label for="senha">Senha</label>
            <input
              type="text"
              name="password"
              id="password"
              onkeyup="validatePassword()"
              required
            />
            <div class="warning" id="warning">
              <img src="./assets/warning.svg" />
            </div>
          </div>
        </fieldset>
      </form>
      <footer>
        <p>
          <img src="./assets/warning.svg" />
          importante <br /> Preencha todos os dados
        </p>
        <button id="button" onclick="limparForm()">
          Salvar senha
        </button>
      </footer>
    </main>
  );
}
