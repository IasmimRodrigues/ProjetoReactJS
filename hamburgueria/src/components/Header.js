export default function Header() {
  return (
    <header>
      {/* <div className="header"> */}
        <div className="logo">
          <img src="./assets/logo-bq-header2.svg" alt=""></img>
        </div>
        <div className="menus">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Cupons</a>
            </li>
            <li>
              <a href="#">App</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
          </ul>
        </div>

        <a href="#" className="loginButton"><span>Login</span></a>
      {/* </div> */}
    </header>
  );
}
