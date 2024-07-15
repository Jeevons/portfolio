import { Link } from "react-router-dom";
import "./Projets.css";

const Presentation = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="Presentation">
      <div className="pres-container">
        <div className="left box">
          <div className="title">
            <h1>Salut, moi c&apos;est Jeevons</h1>
          </div>
          <div className="subtitle">
            <h3>Développeur Web en devenir</h3>
          </div>
          <div className="text">
            <p>
              Bienvenue sur mon site internet, enchanté! Je suis étudiant en
              deuxième année de Bachelor Développement Web. Je suis actuellement
              à la recherche d&apos;une alternance.
            </p>
          </div>

          <div className="wrapper">
            <div className="link_wrapper">
              <Link to="/biographie" className="readMoreBtn">Hover Me!</Link>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="right box img">
          <img
            src={`${basePath}assets/images/projets/cartoonJee2.png`}
            alt="presentation"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
