import Editor from "../components/Editor";
import Slider from "../components/Slider";
import Feedback from "../components/Feedback";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Features = () => {
  const container = useRef<HTMLDivElement>(null!);

  useScrollAnimation(container, ".first", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  useScrollAnimation(container, ".second", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  useScrollAnimation(container, ".third", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  useScrollAnimation(container, ".fourth", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  useGSAP(
    () => {
      gsap.from(".box", {
        y: 50,
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out",

        stagger: {
          each: 0.3,
          from: "start",
        },
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: container },
  );

  return (
    <div className="px-6 xl:mt-15 xl:px-12" ref={container}>
      <div className="first w-full opacity-0">
        <div className=" flex flex-col justify-between items-center w-full xl:flex-row xl:gap-16  translate-y-[10%]">
          <h2 className="text-left w-full font-plus font-bold text-[2rem] my-10 xl:w-[50%] xl:text-[2.3rem]">
            Show It a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent xl:text-[2.5rem] font-grand tracking-widest">
              Vibe,
            </span>
            Get a Whole Design Back.
          </h2>
          <p className="font-inter w-full text-left text-[1.2rem] xl:w-[45%] xl:text-[1.1rem]">
            You drop the vibe, it does the design thinking. In moments, your
            text prompt becomes a polished layout with spacing, hierarchy, and
            colors that feel intentionally crafted and not AI-generated chaos.
          </p>
        </div>
        <Slider
          images={[
            "./img/b.webp",
            "./img/a.webp",
            "./img/c.webp",
            "./img/d.webp",
            "./img/e.webp",
            "./img/b.webp",
          ]}
        />
      </div>

      <div className="second w-full mt-50 relative xl:mt-90 opacity-0 translate-y-[10%]">
        <div className="w-full xl:w-[55%]">
          <h2 className="text-left font-plus font-bold text-[2rem] xl:text-[2.3rem]">
            The Assistant That Can Actually Make It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent xl:text-[2.5rem] font-grand tracking-wide">
              Pop.
            </span>{" "}
          </h2>
          <p className="font-inter w-full mt-5 text-left text-[1.2rem] xl:text-[1.1rem] xl:w-[75%]">
            No more guessing what "pop" means. DesignAI gets your brand style,
            tone and all and suggests visuals that match your goals so well, it
            is like having a creative partner in your pocket.
          </p>
        </div>
        <Editor />
      </div>

      <div className=" third opacity-0 w-full mt-50 xl:mt-100 relative ">
        <div className=" w-full xl:w-[53%]   translate-y-[10%]">
          <h2 className="text-left font-plus font-bold text-[2rem] xl:text-[3.2rem]">
            Critique Without The{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent xl:text-[3.2rem] font-grand tracking-wide">
              Crisis.
            </span>{" "}
          </h2>
          <p className="font-inter w-[100%] mt-5 text-left text-[1.2rem] xl:text-[1.1rem]">
            Your design is ready? In seconds, get clear, human-sounding feedback
            on what works, what doesn’t, and how to make it flow with intention.
            No harsh words, no confusion. Just smart critique without the crisis
            that actually helps you grow.
          </p>
        </div>
        <Feedback />
      </div>

      <div className=" fourth opacity-0 w-full mt-150 xl:mt-110">
        <div className=" w-full text-center xl:px-30   translate-y-[10%]">
          <h2 className="font-plus font-bold text-[2rem] xl:text-[3.2rem]">
            Works Where you Do Your Best{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent xl:text-[3.2rem] font-grand tracking-wide">
              Work.
            </span>{" "}
          </h2>
          <p className="font-inter w-[100%] mt-5 text-center text-[1.2rem] xl:text-[1.1rem]">
            DesignAI seamlessly fits in the most popular design software out
            there. Your ideas flow, and it transforms them into action with
            precision and ease. No friction, no fuss, just an AI tool that feels
            like it was built to work the way you do.
          </p>
          <a
            href="#"
            className=" mx-auto w-fit cursor-pointer mt-4 text-primary hover:text-accent active:text-black transition-colors underline flex justify-center gap-3 items-center"
          >
            Check out our integrations <BsArrowRight />
          </a>
        </div>
        <div
          className="flex flex-wrap gap-3 justify-around relative mt-16"
          ref={container}
        >
          <img
            src="./img/wf.webp"
            className="rounded-lg w-[40%] xl:w-[20%] box"
          />
          <img src="./img/aff.webp" className="w-[40%] xl:w-[20%] box" />
          <img
            src="./img/ph.webp"
            className="rounded-lg w-[40%] xl:w-[20%] box"
          />
          <img
            src="./img/figma.webp"
            className="rounded-lg w-[40%] xl:w-[20%] box"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
