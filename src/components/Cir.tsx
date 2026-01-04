import * as THREE from "three";
import { useRef, useEffect } from "react";
import { type JSX } from "react/jsx-dev-runtime";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { type GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle002_1: THREE.Mesh;
    Circle002_2: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    Sphere: THREE.Mesh;
  };
  materials: {
    ["Beu Metal"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Beu Metal.001"]: THREE.MeshStandardMaterial;
    ["sphere.001"]: THREE.MeshStandardMaterial;
  };
};

function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/model/output.glb",
  ) as unknown as GLTFResult;

  const circle = useRef<THREE.Group>(null);
  const circle1 = useRef<THREE.Group>(null);
  const circle2 = useRef<THREE.Group>(null);

  const speed = 0.5;

  useEffect(() => {
    materials["Beu Metal"].emissiveIntensity = 0.7;
    materials["Beu Metal.001"].emissiveIntensity = 0.7;
    materials["sphere.001"].emissiveIntensity = 0.5;

    materials["Beu Metal.001"].transparent = true;
    materials["Beu Metal"].transparent = true;
    materials["Beu Metal.001"].opacity = 0.8;
    materials["Beu Metal"].opacity = 0.8;
  }, [materials]);

  useFrame((_, delta) => {
    if (circle.current) circle.current.rotation.x += delta * speed;
    if (circle1.current) circle1.current.rotation.y += delta * speed;
    if (circle2.current) circle2.current.rotation.z += delta * speed;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Circle" scale={[0.183, 0.255, 0.183]} ref={circle}>
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials["Beu Metal"]}
          />
          <mesh
            geometry={nodes.Circle002_2.geometry}
            material={materials.Material}
          />
        </group>

        <group name="Circle001" scale={[0.146, 0.202, 0.146]} ref={circle1}>
          <mesh
            geometry={nodes.Circle001_1.geometry}
            material={materials["Beu Metal.001"]}
          />
          <mesh
            geometry={nodes.Circle001_2.geometry}
            material={materials.Material}
          />
        </group>

        <group
          name="Circle002"
          rotation={[-0.685, 0.659, 0.464]}
          scale={[0.11, 0.153, 0.11]}
          ref={circle2}
        >
          <mesh
            geometry={nodes.Circle_1.geometry}
            material={materials["Beu Metal"]}
          />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={materials.Material}
          />
        </group>

        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials["sphere.001"]}
          scale={0.127}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/output.glb");

export default Model;
