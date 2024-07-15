import { useTexture } from '@react-three/drei';
import { memo, useMemo } from 'react';
import { RepeatWrapping } from 'three';
import photoGrid from './photoGrid.png';
import { Mesh } from 'three';
import { useRef } from 'react';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { appliedForces } from './helpers';

export type Photo = {
  x: number;
  y: number;
  index: number;
  offset?: { x: number; y: number };
  viewport: { width: number; height: number }; // Ajout de viewport comme prop
};

export const Photo = memo(({ x, y, offset = { x: 0, y: 0 }, viewport }: Photo) => {
  const photos = useTexture(photoGrid);
  const photoMap = useMemo(() => photos.clone(), [photos]);
  photoMap.wrapS = RepeatWrapping;
  photoMap.wrapT = RepeatWrapping;
  photoMap.repeat.set(1 / 5, 1 / 5);
  photoMap.offset.set(offset.x, offset.y);
  const ref = useRef<Mesh>(null);
  const [t, setT] = useState(0);
  const direction = useRef<number>();

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return;
    }

    if (!direction.current) {
      direction.current = x > (viewport.width * mouse.x) / 2 ? -1 : 1;
    }

    ref.current.position.add(appliedForces(t, direction.current));

    setT(t + 1);
  })

  return (
    <mesh ref={ref} position={[x, y, 0]}>
      <planeGeometry />
      <meshBasicMaterial map={photoMap} />
    </mesh>
  )
});
