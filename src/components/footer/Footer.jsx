import Sitemap from "../sitemap/Sitemap";
import SocialLinks from "./SocialLinks";
import Address from "./Address";
import PrivacyLinks from "./PrivacyLinks";
import FooterLogo from "./FooterLogo";
import "./Footer.css";

const Footer = () => (
  <footer className={`footer ${location.pathname === "/design" || location.pathname === "/projets" ? "footer-designPage" : ""}`}>
    <Sitemap />
    <div className="footer-content">
      <div className="footer-nav footer-press">
        <h2 className="hover-target">{`Let's shape the future`}</h2>
      </div>
      <SocialLinks />
      <Address />
      <PrivacyLinks />
      <FooterLogo />
      <div className="footer-copyright">
        <p>© 2024 // Jeevons Eya Jr. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
