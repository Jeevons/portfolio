import { Link } from "react-router-dom";
import "./Footer.css";

const privacyItems = [
  { path: "", label: "Politique de confidentialité" },
  { path: "/biographie", label: "Biographie" },
];

const PrivacyLinks = () => (
  <ul className="footer-privacy">
    {privacyItems.map((item, index) => (
      <li className="privacy-item" key={index}>
        <Link to={item.path} className="privacy-link hover-target">
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default PrivacyLinks;
