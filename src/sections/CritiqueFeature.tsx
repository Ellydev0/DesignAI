import StructuredCritique from "../components/Critique";
import SplitTitle from "../components/SplitTitle";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

const CritiqueFeature = () => {
  const text = "Clear critique, not vague opinions.";
  const container = useRef(null!);

  useScrollAnimation(
    container,
    ".critique",
    {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.04,
    },
    {
      opacity: 0,
      y: 10,
    },
  );

  useScrollAnimation(
    container,
    ".text",
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
    {
      opacity: 0,
      y: 30,
    },
  );
  return (
    <div className="flex flex-col mt-40" ref={container}>
      <div className="mb-10">
        <div className="text-[2.5rem] font-plus font-bold w-[70%] mb-3">
          <SplitTitle text={text} selector="critique" />
        </div>
        <p className="text-[.9rem] font-[100] text-text/70 w-[60%] text opacity-0">
          Receive immediate, structured critique that pinpoints hierarchy,
          spacing, color, contrast, accessibility, copy, and overall layout.
          Each point includes clear rationale, a priority level, and actionable
          steps or alternatives you can apply and validate—so you know not just
          what to change, but why it matters and how to improve the design
          effectively.
        </p>
      </div>
      <div className="flex justify-end">
        <StructuredCritique />
      </div>
    </div>
  );
};

export default CritiqueFeature;
