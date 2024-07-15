// src/components/Biographie.js
// import { useEffect, useRef } from 'react';
// import FullpageWrapper from '../../components/fullpage/FullpageWrapper';
// import { section } from './section';
// import { applyTextEffect } from './textEffect';
// import './Biographie.css';
import CommingSoon from '../../components/commingSoonPage/CommingSoon';

const Biographie = () => {
  // const elementRef = useRef([]);

  // useEffect(() => {
  //   const cleanupFns = elementRef.current.map((element) => applyTextEffect(element));
  //   return () => cleanupFns.forEach((cleanup) => cleanup());
  // }, []);

  return (
    // <FullpageWrapper
    //   sections={section.map((section, index) => (
    //     <div key={index}>
    //       <h1 ref={(el) => (elementRef.current[index] = el)} className="wtg">{section.title}</h1>
    //       <hr />
    //       <p>{section.content}</p>
    //     </div>
    //   ))}
    // />
    <>
    <CommingSoon />
    </>
  );
};

export default Biographie;
