import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { Photo } from "./Photo";
import { updatedPositions } from "./helpers";

const getPositions = (
  photos: Photo[],
  mousePosition: { x: number; y: number }
): Photo[] => {
  return updatedPositions(photos, mousePosition, 0.25);
};

export const Photos = () => {
  const { viewport } = useThree();
  const [photos, updatePhotos] = useState<Photo[]>([{x: 0, y: 0, index: 0,}]);

  useFrame(({ mouse }) => {
    const x = (viewport.width * mouse.x) / 2;
    const y = (viewport.height * mouse.y) / 2;

    updatePhotos((photos) => getPositions(photos, { x, y }));
  });

  return (
    <>
      {photos.map((photo, i) => (
        <Photo
          key={`plane${photo.index}`}
          index={photo.index}
          offset={photo.offset}
          x={photo.x}
          y={photo.y}
          viewport={viewport}
        />
      ))}
    </>
  );
};