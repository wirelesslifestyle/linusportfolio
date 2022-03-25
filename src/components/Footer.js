import NavFooter from "./NavFooter";
import logo from "../images/logoh.png";

function Footer() {
    return (
        <div>
            <div className="footer-up">
                <NavFooter />
            </div>
            <footer className="footer-down">
                <img src={logo} alt="Site logo." />                
                <p>@Linus 2022 Portfolio</p>
            </footer> 
        </div>

    )
}

export default Footer
