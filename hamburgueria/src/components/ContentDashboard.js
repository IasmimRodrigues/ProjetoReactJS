import { Link } from "react-router-dom";

export default function ContentDashboard() {
  return (
    <div className="dashboard">
      <div className="contentDashboard">
        <menu className="menu">
          <div>
            <div className="mainMenu">
              <img className="logoMenu" src="./assets/logo-bq.svg" />
              <h3>Menu</h3>
              <ul>
                <li>
                  <img className="iconMenu" src="./assets/dashboard.svg" />{" "}
                  <span>Dashboard</span>
                </li>
                <li>
                  <img className="iconMenu" src="./assets/produtos.svg" />{" "}
                  
                  <Link to="/produto"><span>Produtos</span></Link>
                </li>
                <li>
                  <img className="iconMenu" src="./assets/email.svg" />{" "}
                  <span>Email</span>
                </li>
                <li>
                  <img className="iconMenu" src="./assets/calendario.svg" />{" "}
                  <span>Calendário</span>
                </li>
                <li>
                  <img className="iconMenu" src="./assets/contato.svg" />{" "}
                  <span>Contatos</span>
                </li>
              </ul>
            </div>
            <div className="configurações">
              <h3>Configurações</h3>

              <ul>
                <li>
                  <img className="iconMenu" src="./assets/configuracoes.svg" />{" "}
                  <span>Configurações</span>
                </li>
                <li>
                  <img className="iconMenu" src="./assets/ajuda.svg" />{" "}
                  <span>Ajuda</span>
                </li>
              </ul>
            </div>
          </div>
        </menu>

        <section className="sectionDashboard">
          <div className="headerDashboard">
            <div className="titleDash">
              <h2>
                Bem-vindo de volta! <h4>Faça suas análises de vendas aqui.</h4>
              </h2>
            </div>

            <div className="iconsDash">
              <img className="iconNot" src="./assets/notificacoes.svg" />
              <img src="./assets/perfil.png" />
            </div>
          </div>

          <div className="analytics">
            <div className="cards1">
              <div className="card1">
                <div className="topCard">
                  <h3>Lucros</h3>
                  <img src="./assets/arrow.svg" />
                </div>
                <div className="valorCard">
                  <h2>
                    R$ 20K
                    <span>Valor entre os dias 01 - 16 de março</span>
                  </h2>
                </div>
              </div>

              <div className="card1">
                <div className="topCard">
                  <h3>Gastos</h3>
                  <img src="./assets/arrow.svg" />
                </div>
                <div className="valorCard">
                  <h2>
                    R$ 30K <span>Valor entre os dias 01 - 16 de março</span>
                  </h2>
                </div>
              </div>

              <div className="card1">
                <div className="topCard">
                  <h3>Qntd. de vendas</h3>
                  <img src="./assets/arrow.svg" />
                </div>
                <div className="valorCard">
                  <h2>
                    R$ 70K <span>Valor entre os dias 01 - 16 de março</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="cards2">
              <div className="card2">
                <h3>Pagamentos recentes</h3>

                <div className="contentCard2">
                  <div className="pay">
                    <div className="payName">
                      <div className="image">
                        <img src="./assets/pix.png" />
                      </div>

                      <div className="contentPay">
                        <h2>Pagamento 1</h2>
                        <h4>20 de Março de 2024, 8:00</h4>
                      </div>
                    </div>

                    <div className="valor">
                      <h3>- R$ 2.000,00</h3>
                    </div>
                  </div>
                  <div className="pay">
                    <div className="payName">
                      <div className="image">
                        <img src="./assets/pix.png" />
                      </div>

                      <div className="contentPay">
                        <h2>Recebimento 1</h2>
                        <h4>15 de Março de 2024, 8:00</h4>
                      </div>
                    </div>

                    <div className="valor">
                      <h3>+ R$ 7.000,00</h3>
                    </div>
                  </div>
                  <div className="pay">
                    <div className="payName">
                      <div className="image">
                        <img src="./assets/pix.png" />
                      </div>

                      <div className="contentPay">
                        <h2>Pagamento 2</h2>
                        <h4>10 de Março de 2024, 8:00</h4>
                      </div>
                    </div>

                    <div className="valor">
                      <h3>- R$ 10.000,00</h3>
                    </div>
                  </div>
                  <div className="pay">
                    <div className="payName">
                      <div className="image">
                        <img src="./assets/pix.png" />
                      </div>

                      <div className="contentPay">
                        <h2>Recebimento 2</h2>
                        <h4>10 de Março de 2024, 8:00</h4>
                      </div>
                    </div>

                    <div className="valor">
                      <h3>+ R$ 15.000,00</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card2">
                <h3>Análise</h3>
                <div className="cardGraphic">
                  <div className="graphic">
                    <img src="./assets/grafico.svg" />
                  </div>
                  <div className="legends">
                    <div className="legend">
                      <div className="color1"></div>
                      <h4>
                        45% <span>Gastos</span>
                      </h4>
                    </div>
                    <div className="legend">
                      <div className="color2"></div>
                      <h4>
                        55% <span>Lucros</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
