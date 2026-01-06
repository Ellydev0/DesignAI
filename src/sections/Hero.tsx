import Title from "../components/Title";
import Visual from "../components/Visual";
import Nav from "../components/Nav";
import { IoInformationCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="h-screen relative w-screen">
      <Nav />
      <Title />
      <div className="flex items-center gap-2 absolute bottom-8 left-8 text-neutral-500 text-xs font-extralight">
        <IoInformationCircleOutline /> Not a real product.
      </div>
      <Visual />
    </div>
  );
};

export default Hero;
