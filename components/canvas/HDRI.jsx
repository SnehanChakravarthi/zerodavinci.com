import { useEffect, useState } from 'react';
import { EXRLoader } from 'three-stdlib';
import * as THREE from 'three'; // assuming you're using Three.js

export function useLoadCityTexture() {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    async function loadTexture() {
      try {
        const city = await import('@pmndrs/assets/hdri/city.exr');
        new EXRLoader().load(city.default, (loadedTexture) => {
          loadedTexture.mapping = THREE.EquirectangularReflectionMapping;
          setTexture(loadedTexture);
        });
      } catch (error) {
        console.error('Could not load texture:', error);
      }
    }
    loadTexture();
  }, []);

  return texture;
}
