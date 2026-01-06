import Title from "../components/Title";
import Visual from "../components/Visual";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <div className="h-screen relative w-screen">
      <Nav />
      <Title />
      <Visual />
    </div>
  );
};

export default Hero;
