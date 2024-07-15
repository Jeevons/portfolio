import { Link } from "react-router-dom";
import "./Footer.css";

const FooterLogo = () => (
  <div className="footer-logo">
    <Link to="/" className="logo hover-target">
      <img src="./assets/logos/jeevonsLogo.png" alt="Jeevons Logo" />
    </Link>
  </div>
);

export default FooterLogo;
