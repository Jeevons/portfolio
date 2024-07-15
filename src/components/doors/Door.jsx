import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Door.css";

const Door = ({ to, label, className, backgroundImage, smallBg, bgClassName }) => {
  const validClassName = className || "";

  useEffect(() => {
    const handleResize = () => {
      const elements = document.querySelectorAll(`.boxBg.${bgClassName}`);
      elements.forEach(element => {
        if (window.innerWidth <= 860) {
          element.style.backgroundImage = `url(${smallBg})`;
          element.querySelector('.bg').style.display = 'none';
          element.style.opacity = 1;
        } else {
          element.style.backgroundImage = `none`;
          element.querySelector('.bg').style.display = 'block';
          element.style.opacity = 1;
        }
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bgClassName, backgroundImage, smallBg]);

  return (
    <Link to={to} className={`topic ${validClassName}`}>
      <span className="container">
        <div className={`boxBg ${bgClassName}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <img src={backgroundImage} alt={label} className="bg" />
        </div>
        <div className="hidden__title">
          <h1>{label}</h1>
        </div>
        <div className="topic__title">
          <h1 className="title">{label}</h1>
        </div>
        <div className="spacer" style={{ width: '100%', height: '80px' }}></div>
        <div className="barCode">
          <h3>{label}</h3>
        </div>
      </span>
    </Link>
  );
};

export default Door;
