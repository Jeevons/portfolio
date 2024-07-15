import { Link } from "react-router-dom";
import "./Projets.css";
import ShaderAnimation from "./ShaderAnimation";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div className="projects">
      <div className="section-title">
        <h1>Projets</h1>
      </div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="prBox" key={index}>
            <div className="prLeft">
              <div className="prImg">
                <img src={project.imgSrc} alt={project.title} />
              </div>
              <div
                className="prTitle"
                style={{ position: "relative", height: "100px" }}
              >
                <ShaderAnimation
                  text={project.title}
                  fontSize={280}
                  fontFamily="Formula"
                />
              </div>
            </div>
            <div className="prRight">
              <div className="prSubtitle">
                <h3>{project.subtitle}</h3>
              </div>
              <div className="prDescription">{project.description}</div>
              <div className="prLink-Btn">
                {project.link.startsWith("http") ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Voir projets
                  </a>
                ) : (
                  <Link to={project.link} target="_blank" className="proLink">
                    Voir projets
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
