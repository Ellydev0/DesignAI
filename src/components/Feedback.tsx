import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Feedback = () => {
  const feedbacks = [
    "The color palette feels a bit muted; consider increasing the saturation for better visual impact.",
    "The call-to-action (CTA) button lacks sufficient contrast with the background, making it hard to notice.",
    "The typography choice for the body text is difficult to read at smaller sizes; explore a more legible font.",
    "The information hierarchy on this page is unclear; restructure content to emphasize key elements.",
    "The spacing (padding/margins) around the main image feels too tight; give it more room to breathe.",
    "The mobile experience is inconsistent; elements are overlapping on smaller screens.",
    "Consider adding more visual feedback (e.g., hover states, micro-animations) to interactive elements.",
    "The current onboarding flow has too many steps; look for opportunities to simplify or combine them.",
    "The iconography used is inconsistent in style; standardize the line weight and fill.",
    "The page load time is noticeably slow; optimize images and resources to improve performance.",
  ];
  const container = useRef<HTMLDivElement>(null!);
  useScrollAnimation(container, ".feedback", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  useScrollAnimation(container, ".feedback", {
    x: "-15%",
    duration: 40,
    delay: 3,
    repeat: -1,
  });
  return (
    <div ref={container}>
      <div className="feedback grid grid-cols-3 gap-4 w-[500%] absolute -right-130 top-120 -rotate-25 -z-12 xl:w-[100%] xl:-right-130 xl:-top-20 opacity-0 ">
        <div className="overlay bg-gradient-to-r from-bg to-transparent from-2% inset-0 bg-cover absolute" />
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className="bg-bg shadow-[8px_6px_15px_-6px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.5)] text-[.85rem] py-3 px-4 rounded-lg"
          >
            <div className=" rounded-full bg-gradient-to-br from-primary to-accent w-7 h-7 mb-3" />
            {feedbacks[index % feedbacks.length]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
