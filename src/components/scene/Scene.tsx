import { Canvas } from "@react-three/fiber";
import { Photos } from "../paperPlanes/Photos";
import "./Scene.css";  // Importer le fichier CSS

export const Scene = () => {
  return (
    <div className="scene-container">
      <Canvas className="three-canvas" gl={{ alpha: true }}>
        <Photos />
      </Canvas>
      <div className="designTitle">
        <h1 className="title">Design & Art</h1>
        <h3 className="subtitle">Forme, Couleur, Imagination</h3>
      </div>
    </div>
  );
};
