import "./NavBar.css";
import "../CartWidget/CartWidget"
import logo from "../../assets/logo1.jpg"
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img src={logo} alt="logo de la marca" className="logo"/>
        </div>
        <ul className="navbar-links">
            <li className="navbar-item">
                <a href="#">Home</a>
            </li>
            <li className="navbar-item">
                <a href="#">About Us</a>
            </li>
            <li className="navbar-item">
                <a href="#">Products</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar