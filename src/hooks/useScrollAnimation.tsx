import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (
  container: React.RefObject<HTMLElement>,
  element: string,
  animationTo: gsap.TweenVars,
  animationFrom?: gsap.TweenVars,
) => {
  // Memoize to prevent unnecessary re-runs
  const animationKey = useMemo(
    () => JSON.stringify(animationTo),
    [animationTo],
  );

  useGSAP(
    () => {
      if (!container.current || !element) return;

      gsap.fromTo(
        element,
        { ...animationFrom },
        {
          scrollTrigger: {
            trigger: element,
            start: "-40% center",
            end: "bottom center",
            once: true,
          },
          ...animationTo,
        },
      );
    },
    {
      scope: container,
      dependencies: [animationKey],
    },
  );
};

export default useScrollAnimation;
