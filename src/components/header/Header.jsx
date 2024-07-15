import { useState, useEffect, useRef } from "react";
import HeaderIcon from "../header_icon/HeaderIcon";
import NavigationMenu from "../navMenu/NavigationMenu";
import DropdownMenus from "../drop_down/DropdownMenus";
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && headerRef.current && !headerRef.current.contains(event.target)) {
      setNavActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isNavActive) {
      body.classList.add("nav-active");
    } else {
      body.classList.remove("nav-active");
    }
  }, [isNavActive]);

  return (
    <>
      <header ref={headerRef} className={`header-fixed ${location.pathname === "/design" || location.pathname === "/projets" ? "header-design" : ""}`}>
        <HeaderIcon onClick={toggleNav} />
        <NavigationMenu />
      </header>
      <DropdownMenus ref={dropdownRef} isNavActive={isNavActive} onLinkClick={() => setNavActive(false)} />
    </>
  );
};

export default Header;
