import {Vector2, Vector3} from 'three';
import { Photo } from './Photo';


let t = 0;
const splicedIndexex: number[] = [];
/**
 * Return trimmed positions array as paper planes array
 */
export const updatedPositions = (
  planes: Photo[],
  newPlane: Omit<Photo, 'index'>,
  distance: number = 0.1,
  maxPlanesCount: number = 100
): Photo[] => {
  const d = new Vector2(newPlane.x, newPlane.y).distanceTo(
    new Vector2(planes.at(-1)?.x, planes.at(-1)?.y)
  );
  if (d > distance && planes.length < maxPlanesCount + 1) {
    t++;

    return [
      ... planes,
      {
        ... newPlane,
        index: t,
        offset: {
          x: Math.floor(Math.random() * 5) / 5,
          y: Math.floor(Math.random() * 5) / 5,
        }
      },
    ];
  }

  return planes.length > maxPlanesCount 
  ? planes.splice(1)
  : planes.map((plane) => ({ ... plane }));
};






export const appliedForces = (t: number, dir: number) => {
  return new Vector3(0.5 * dir * t, 10-t, 0).multiplyScalar(0.001);
}