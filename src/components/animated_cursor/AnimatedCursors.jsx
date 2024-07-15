import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./AnimatedCursor.css";

const AnimatedCursors = ({ isHomePage }) => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const cursor3Ref = useRef(null);
  const requestRef = useRef(null);
  const moveTimeoutRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;
    let lastMouseMoveTime = 0;

    const handleMouseMove = (event) => {
      const currentTime = Date.now();
      if (currentTime - lastMouseMoveTime < 16) { // 60 FPS
        return;
      }
      lastMouseMoveTime = currentTime;

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor2.style.left = `${event.clientX}px`;
      cursor2.style.top = `${event.clientY}px`;
      cursor3.style.left = `${event.clientX}px`;
      cursor3.style.top = `${event.clientY}px`;

      if (isHomePage) {
        cursor2.classList.add("hover");
        cursor3.classList.add("hover");
        if (moveTimeoutRef.current) {
          clearTimeout(moveTimeoutRef.current);
        }
        moveTimeoutRef.current = setTimeout(() => {
          cursor2.classList.remove("hover");
          cursor3.classList.remove("hover");
        }, 1000); // 5 seconds
      }
    };

    const handleMouseOver = () => {
      if (!isHomePage) {
        cursor2.classList.add("hover");
        cursor3.classList.add("hover");
      }
    };

    const handleMouseOut = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    const onMouseMove = (event) => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(() => handleMouseMove(event));
    };

    document.body.addEventListener("mousemove", onMouseMove);

    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", handleMouseOver);
      target.addEventListener("mouseout", handleMouseOut);
    });

    // Cleanup on unmount
    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseover", handleMouseOver);
        target.removeEventListener("mouseout", handleMouseOut);
      });
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, [isHomePage]);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor2" id="cursor2" ref={cursor2Ref}></div>
      <div className="cursor3" id="cursor3" ref={cursor3Ref}></div>
    </>
  );
};

AnimatedCursors.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
};

export default AnimatedCursors;
