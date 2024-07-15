import { Link } from "react-router-dom";
import "./Sitemap.css";

const sitemapItems = [
  { path: "/", label: "Home", number: "(01)" },
  { path: "/programming", label: "Programmation", number: "(02)" },
  { path: "/astronomie", label: "Astronomie", number: "(03)" },
  { path: "/design", label: "My Art", number: "(04)" },
  { path: "/hobbies", label: "Hobbies", number: "(05)" },
  { path: "/projets", label: "Portfolio", number: "(06)" },
  { path: "/biographie", label: "Biographie", number: "(07)" },
  { path: "/contact", label: "Contact", number: "(08)" },
];

const Sitemap = () => (
  <section className="sitemap">
    <div className="sitemap-header">
      <h1 className="hover-target">Plan du site</h1>
    </div>
    <div className="sitemap-body">
      <ul className="sitemap-list">
        {sitemapItems.map((item, index) => (
          <li className="sitemap-item" key={index}>
            <Link to={item.path} className="sitemap-link">
              <span>{item.label}</span>
              <span className="sitemap-item-numb">{item.number}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sitemap;
