import { Link } from "react-router-dom";

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
              <Link to="/"><a href="#">Início</a></Link>
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

        {/* <Link to="/login"><a href="#" className="loginButton"><span>Login</span></a></Link> */}
        <Link to="/login" className="loginButton"><span>Login</span></Link>
      {/* </div> */}
    </header>
  );
}
