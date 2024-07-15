import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DropdownMenu.css";

const ExitIcon = (
  <svg
    fill="#000000"
    height="20px"
    width="20px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 56 56"
    xmlSpace="preserve"
    stroke="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path d="M54.424,28.382c0.101-0.244,0.101-0.519,0-0.764c-0.051-0.123-0.125-0.234-0.217-0.327L42.208,15.293 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L51.087,27H20.501c-0.552,0-1,0.447-1,1s0.448,1,1,1h30.586L40.794,39.293 c-0.391,0.391-0.391,1.023,0,1.414C40.989,40.902,41.245,41,41.501,41s0.512-0.098,0.707-0.293l11.999-11.999 C54.299,28.616,54.373,28.505,54.424,28.382z"></path>
        <path d="M36.501,33c-0.552,0-1,0.447-1,1v20h-32V2h32v20c0,0.553,0.448,1,1,1s1-0.447,1-1V1c0-0.553-0.448-1-1-1h-34 c-0.552,0-1,0.447-1,1v54c0,0.553,0.448,1,1,1h34c0.552,0,1-0.447,1-1V34C37.501,33.447,37.053,33,36.501,33z"></path>
      </g>
    </g>
  </svg>
);

const DropdownMenus = forwardRef(({ isNavActive, onLinkClick }, ref) => {
  const location = useLocation();

  return (
    <div className={`nav ${isNavActive ? "active" : ""}`} ref={ref}>
      <div className="nav__content">
        <ul className="nav__list">
          <li
            className={`nav__list-item ${
              location.pathname === "/programming" ? "active-nav" : ""
            }`}
          >
            <Link
              to="/programming"
              className="hover-target"
              onClick={onLinkClick}
            >
              Programmation
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/astronomie" ? "active-nav" : ""
            }`}
          >
            <Link
              to="/astronomie"
              className="hover-target"
              onClick={onLinkClick}
            >
              Astronomie
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/design" ? "active-nav" : ""
            }`}
          >
            <Link to="/design" className="hover-target" onClick={onLinkClick}>
              My Art
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/hobbies" ? "active-nav" : ""
            }`}
          >
            <Link to="/hobbies" className="hover-target" onClick={onLinkClick}>
              Hobbis
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/projets" ? "active-nav" : ""
            }`}
          >
            <Link to="/projets" className="hover-target" onClick={onLinkClick}>
              Portfolio
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/biographie" ? "active-nav" : ""
            }`}
          >
            <Link
              to="/biographie"
              className="hover-target"
              onClick={onLinkClick}
            >
              Biographie
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/contact" ? "active-nav" : ""
            }`}
          >
            <Link to="/contact" className="hover-target" onClick={onLinkClick}>
              Contact
            </Link>
          </li>
          <li className="nav__list-item5">
            <Link to="/" className="hover-target" onClick={onLinkClick}>
              {ExitIcon}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

DropdownMenus.propTypes = {
  isNavActive: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

DropdownMenus.displayName = "DropdownMenus";
export default DropdownMenus;
