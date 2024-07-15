import { useEffect } from "react";
import "./FullpageWrapper.css";

const FullpageWrapper = ({ sections }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll(".section");
      const navButtons = document.querySelectorAll(".navButton");

      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          navButtons.forEach(button => button.classList.remove("active"));
          navButtons[index].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the active class on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index) => {
    const navButtons = document.querySelectorAll(".navButton");
    navButtons.forEach(button => button.classList.remove("active"));
    navButtons[index].classList.add("active");
  };

  return (
    <div className="FullpageWrapper">
      <div className="navButton-container">
        <div className="navButton-grid">
          {sections.map((_, index) => (
            <a
              key={index}
              href={`#s${index + 1}`}
              className="navButton"
              onClick={() => handleClick(index)}
            ></a>
          ))}
        </div>
      </div>
      <div id="sections">
        {sections.map((sectionContent, index) => (
          <div className={`section s${index + 1}`} id={`s${index + 1}`} key={index}>
            {sectionContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullpageWrapper;
