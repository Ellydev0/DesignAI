import ChatPreview from "../components/ChatPreview";
import SplitTitle from "../components/SplitTitle";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ChatFeature = () => {
  const container = useRef(null!);
  const title = "Design conversations, not";
  const titleCont = "aimless prompts.";
  useScrollAnimation(
    container,
    ".chat",
    {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.04,
    },
    {
      opacity: 0,
      y: 3,
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
    <div ref={container}>
      <div className="mb-10 xl:mb-20">
        <div className="text-[1.5rem] xl:text-[2.5rem] font-plus font-bold mb-3">
          <SplitTitle text={title} selector="chat" /> <br />
          <SplitTitle text={titleCont} selector="chat" />
        </div>
        <p className="text-[.9rem] font-[100] text-text/70 w-full xl:w-[50%] text opacity-0">
          Engage in natural, design-focused conversations with an AI that
          understands your project's visual language, user goals, and
          constraints. It provides clear, structured feedback on layout,
          typography, color, and accessibility, suggests concrete improvements
          and alternative solutions, and helps you iterate faster by proposing
          actionable next steps, rationale, and follow-up suggestions.
        </p>
      </div>
      <ChatPreview />
    </div>
  );
};

export default ChatFeature;
