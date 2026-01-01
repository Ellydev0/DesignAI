import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { lazy, Suspense, useState, useEffect } from "react";

const Model = lazy(() => import("../components/Cir"));

const Renderer = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const isDesktop = window.innerWidth >= 1280;
  const fov = isDesktop ? 40 : 75;
  const position: [number, number, number] = isDesktop
    ? [0, 0, 0]
    : [0, 0.4, 0];

  useEffect(() => {
    // Let GSAP animations start first
    const timer = setTimeout(() => setShowCanvas(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!showCanvas) return null;

  return (
    <div className="renderer">
      <Canvas camera={{ fov, position: [-2, 1, 1] }}>
        <Suspense fallback={null}>
          <Environment
            files={"./model/lightmap.hdr"}
            environmentIntensity={1.3}
          />
          <directionalLight intensity={1} position={[-3, 1, 3]} />
          <Model position={position} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Renderer;
