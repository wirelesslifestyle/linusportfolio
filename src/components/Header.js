import Nav from "./Nav";
import logo from "../images/logoh.png";
function Header() {
    return (
        <header className="headerbar">
            <img src={logo} alt="Site logo." />
            <Nav />
        </header>
    );
}

export default Header;
