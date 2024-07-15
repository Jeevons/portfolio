import { Link } from 'react-router-dom';
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="navMenu">
      <ul className="navList">
        <li>
          <Link to="/projets" className="navItem hover-target">Portfolio</Link>
        </li>
        <li>
          <Link to="/biographie" className="navItem hover-target">qui suis-je ?</Link>
        </li>
        <li>
          <Link to="/contact" className="navItem hover-target">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;