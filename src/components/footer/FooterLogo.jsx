import { Link } from "react-router-dom";
import "./Footer.css";

const FooterLogo = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="footer-logo">
      <Link to="/" className="logo hover-target">
        <img src={`${basePath}assets/logos/jeevonsLogo.png`} alt="Jeevons Logo" />
      </Link>
    </div>
  );
};

export default FooterLogo;
