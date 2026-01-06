import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import SplitTitle from "../components/SplitTitle";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ImageFeature = () => {
  interface imagesTypes {
    src: string;
    className: string;
    speed: number;
  }

  // const text = "Create assets, not placeholders.";

  const images: imagesTypes[] = [
    { src: "/img/e.avif", className: "top-1/3 right-24", speed: -45 },
    { src: "/img/c.avif", className: "bottom-24 left-32", speed: -35 },
    { src: "/img/b.avif", className: "top-20 right-1/3", speed: -65 },
    { src: "/img/d.avif", className: "bottom-10 left-96", speed: -40 },
    { src: "/img/b.avif", className: "top-10 left-10", speed: -50 },
    { src: "/img/d.avif", className: "bottom-1/3 right-32", speed: -30 },
    { src: "/img/c.avif", className: "top-1/4 left-1/3", speed: -55 },
    { src: "/img/e.avif", className: "bottom-20 right-1/4", speed: -42 },
  ];

  const container = useRef(null!);

  useGSAP(
    () => {
      if (!container.current) return;

      const imageElements = gsap.utils.toArray(".parallax-image");
      imageElements.forEach((img: any) => {
        gsap.to(img, {
          yPercent: img.dataset.speed,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: container },
  );

  useScrollAnimation(
    container,
    ".txt",
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
    <section ref={container} className="relative overflow-hidden py-50 mt-20">
      {/* Background visual layer */}
      <div className="absolute inset-0 -z-10">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            decoding="async"
            data-speed={img.speed}
            className={`parallax-image absolute h-40 w-40 rounded-xl bg-neutral-800 object-cover object-center opacity-65 ${img.className}`}
          />
        ))}
      </div>

      {/* Centered content */}
      <div className="relative mx-auto text-center">
        <div className="mb-3 text-[2.5rem] font-plus font-bold text">
          Create assets, not placeholders.
        </div>
        <p className="mx-auto w-[80%] text-[0.9rem] font-light text-text/80 opacity-0 text">
          Generate polished images, illustrations, and UI assets on demand — in
          multiple sizes and formats, styled to match your brand. Export ready
          visuals with suggested alt text, cropping, and spacing so they drop
          straight into layouts or handoff packages, speeding up iteration and
          reducing placeholder work.
        </p>
      </div>
    </section>
  );
};

export default ImageFeature;
