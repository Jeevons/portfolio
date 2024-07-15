import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Projets.css';

const ShaderAnimation = ({ text, fontSize = 80, fontFamily = 'Roboto Light' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let renderer, stage, camera, plane, uniforms;

    const fragmentShader = `
      precision mediump float;
      uniform float time;
      uniform float mouseX;
      uniform float mouseY;
      uniform sampler2D u_texture;
      varying vec2 vUv;

      void main() {
        float d = -distance(vec2(mouseX, mouseY), gl_FragCoord.xy);
        float r = dot(gl_FragCoord.xy, vec2(0.005, 0.005)) / d;
        vec2 tex = vec2(vUv.x + r, vUv.y + r);
        vec4 texColor = texture2D(u_texture, tex);
        if (texColor.a < 0.1) discard; // Make the background transparent
        gl_FragColor = vec4(texColor.rgb, texColor.a);
      }
    `;

    const vertexShader = `
      precision mediump float;
      varying vec2 vUv;
      uniform float time;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const container = containerRef.current;

    const createCanvas = (text, canvasWidth, canvasHeight) => {
      const canvas = document.createElement('canvas');
      canvas.height = canvasHeight;
      canvas.width = canvasWidth;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      context.font = `300 ${fontSize}px ${fontFamily}`; // Set font weight to 300 (Light)
      context.fillStyle = '#000000'; // Black color for text
      const width = context.measureText(text).width;
      context.fillText(text, (canvas.width - width) / 2, canvas.height / 2);
      return canvas;
    };

    const updateCanvas = () => {
      const ratio = container.clientWidth / container.clientHeight;
      const planeHeight = 10; // Adjusted height to match the .prSubtitle
      const planeWidth = planeHeight * ratio;
      const cameraOpts = {
        aspect: container.clientWidth / container.clientHeight,
        near: 0.1,
        far: 10000,
        z: planeHeight
      };
      const fov = 2 * Math.atan(planeHeight / (2 * cameraOpts.z)) * (180 / Math.PI);
      camera = new THREE.PerspectiveCamera(fov, cameraOpts.aspect, cameraOpts.near, cameraOpts.far);
      camera.position.z = cameraOpts.z;

      stage = new THREE.Scene();
      stage.add(camera);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.domElement.className = 'custom-canvas'; // Add custom class to canvas
      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      const texture = new THREE.Texture(createCanvas(text, 2048, 512));
      texture.needsUpdate = true;

      const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      uniforms = {
        u_texture: {
          type: 't',
          value: texture
        },
        time: {
          type: 'f',
          value: 0
        },
        mouseX: {
          type: 'f',
          value: 0
        },
        mouseY: {
          type: 'f',
          value: 0
        }
      };

      const planeMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
      });

      plane = new THREE.Mesh(planeGeometry, planeMaterial);
      stage.add(plane);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(stage, camera);
      uniforms.time.value += 0.1;
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      uniforms.mouseX.value = e.clientX - rect.left;
      uniforms.mouseY.value = rect.height - (e.clientY - rect.top);
    };

    const onResize = () => {
      updateCanvas();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    updateCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeChild(renderer.domElement);
    };
  }, [text, fontSize, fontFamily]);

  return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent' }}></div>;
};

export default ShaderAnimation;
