import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import SplitTitle from "./SplitTitle";
import SplitText from "./SplitText";

const Title = () => {
  const design = "Design faster.";
  const stress = "Stress less.";
  const desc =
    "Accelerate your design workflow with scalable AI critique, high-fidelity image generation, and consistent, production-ready assets.";

  useGSAP(() => {
    gsap.fromTo(
      ".letter",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
      },
    );
    gsap.from(".para-word", {
      yPercent: 100,
      stagger: 0.02,
      delay: 1.3,
      duration: 0.3,
      ease: "power4.out",
    });
    gsap.from(".buttons", {
      y: 10,
      opacity: 0,
      stagger: 0.02,
      delay: 1.6,
      duration: 0.7,
      ease: "power4.out",
    });
  });

  return (
    <div className="flex items-center flex-col h-full justify-center relative z-10">
      <div className="text-center">
        <div className="text-[3rem] mb-0 xl:text-[5rem] font-extrabold font-plus">
          <div>
            <SplitTitle text={design} selector="letter" />
          </div>
          <div>
            <SplitTitle text={stress} selector="letter" />
          </div>
        </div>

        <p className="text-[.7rem] w-[80%] mx-auto xl:text-[1rem] font-medium font-inter">
          <SplitText text={desc} selector="para-word" />
        </p>

        <div className="flex justify-center items-center gap-8 mt-8 buttons">
          <a href="#waitlist">
            <Button text="Join the waitlist" />
          </a>
          <Button
            text="Learn More"
            className="border border-primary bg-transparent hover:border-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
