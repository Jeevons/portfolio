import { Link } from "react-router-dom";
import "./Footer.css";

const socialItems = [
  { path: "https://www.linkedin.com/in/jeevons-eya-jr-iq-3660a7297/", label: "LinkedIn" },
  { path: "https://www.instagram.com/jeevons__?igsh=NDh3eWYyaXE2MHl5&utm_source=qr", label: "Instagram" },
];

const SocialLinks = () => (
  <div className="footer-nav footer-social">
    <ul className="social-list">
      {socialItems.map((item, index) => (
        <li className="social-item" key={index}>
          <Link to={item.path} className="social-link hover-target">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
