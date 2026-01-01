import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (
  container: React.RefObject<HTMLElement>,
  element: string,
  animation: gsap.TweenVars,
) => {
  // Memoize to prevent unnecessary re-runs
  const animationKey = useMemo(() => JSON.stringify(animation), [animation]);

  useGSAP(
    () => {
      if (!container.current || !element) return;

      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-40% center",
          end: "bottom center",
          once: true,
        },
        ...animation,
      });
    },
    {
      scope: container,
      dependencies: [element, animationKey], // Re-run when these change
    },
  );
};

export default useScrollAnimation;
