import Title from "../components/Title";
import { lazy } from "react";
const Renderer = lazy(() => import("./Renderer"));

const Hero = () => {
  return (
    <div className="h-screen relative w-full ">
      <Title />
      <Renderer />
    </div>
  );
};

export default Hero;
