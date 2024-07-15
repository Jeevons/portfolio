import PropTypes from "prop-types";
import "./HeaderIcon.css";

const HeaderIcon = ({ onClick }) => {
  return (
    <div className="nav-but-wrap">
      <div className="menu-icon hover-target" onClick={onClick}>
        <span
          className={`menu-icon__line menu-icon__line-left ${
            location.pathname === "/design" || location.pathname === "/projets"
              ? "menu-icon__line-designPage"
              : ""
          }`}
        ></span>
        <span
          className={`menu-icon__line ${
            location.pathname === "/design" || location.pathname === "/projets"
              ? "menu-icon__line-designPage"
              : ""
          }`}
        ></span>
        <span
          className={`menu-icon__line menu-icon__line-right ${
            location.pathname === "/design" || location.pathname === "/projets"
              ? "menu-icon__line-designPage"
              : ""
          }`}
        ></span>
      </div>
    </div>
  );
};

HeaderIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderIcon;
