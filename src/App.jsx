import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import RoutesConfig from "./RoutesConfig";
import AnimatedCursors from "./components/animated_cursor/AnimatedCursors";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAstroPage = location.pathname === "/astronomie";
  const isHobbiesPage = location.pathname === "/hobbies";
  const isProgrammingPage = location.pathname === "/programming";
  const isBiographiePage = location.pathname === "/biographie";
  const isDesignPage = location.pathname === "/design";
  const showHeaderAndFooter = !isHomePage && !isAstroPage && !isHobbiesPage && !isProgrammingPage && !isBiographiePage && !isDesignPage;

  useEffect(() => {
    const pathNameToTitle = {
      "/": "Home",
      "/programming": "Programming",
      "/astronomie": "Astronomie",
      "/design": "Design & Art",
      "/hobbies": "Hobbies",
      "/projets": "Projets",
      "/biographie": "Biographie",
      "/contact": "Contact",
      "/privacy": "Politique de confidentialité"

    };

    document.title = pathNameToTitle[location.pathname] || "My Website";
  }, [location.pathname]);

  useEffect(() => {
    const bodyElement = document.body;
    const classesToAdd = [];

    if (["/design", "/astronomie", "/hobbies", "/projets"].includes(location.pathname)) {
      classesToAdd.push("designRoot");
    }
    if (["/projets", "/contact"].includes(location.pathname)) {
      classesToAdd.push("transparentHeader");
    }
    if (["/","/biographie", "/contact"].includes(location.pathname)) {
      classesToAdd.push("biographieBg", "transparentHeader");
    }

    bodyElement.className = classesToAdd.join(' ');

    return () => {
      bodyElement.className = '';
    };
  }, [location.pathname]);

  return (
    <>
      <AnimatedCursors key={location.pathname} isHomePage={isHomePage} />
      {showHeaderAndFooter && <Header />}
      <RoutesConfig />
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

export default App;
