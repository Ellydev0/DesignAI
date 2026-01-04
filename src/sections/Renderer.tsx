import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { lazy, Suspense } from "react";

const Model = lazy(() => import("../components/Cir"));

const Renderer = () => {
  const isDesktop = window.innerWidth >= 1280;
  const fov = isDesktop ? 50 : 75;
  const position: [number, number, number] = isDesktop
    ? [0, 0, 0]
    : [0, 0.4, 0];

  return (
    <div className="renderer">
      <Canvas camera={{ fov, position: [-2, 1, 1] }}>
        <Suspense fallback={null}>
          <Environment
            files={"./model/lightmap.hdr"}
            environmentIntensity={1}
          />
          <directionalLight intensity={1} position={[-3, 1, 3]} />
          <Model position={position} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Renderer;
