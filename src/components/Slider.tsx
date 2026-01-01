import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const container = useRef<HTMLDivElement>(null!);

  useScrollAnimation(container, ".slider", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  });
  return (
    <div ref={container}>
      <div className=" slider flex opacity-0 overflow-x-hidden w-[300%] rotate-[-5deg] translate-y-[20%] -translate-x-[10%] xl:-translate-y-[10%]">
        <div className="columns-3 gap-0 w-[50%] bg-bg xl:w-[20%]">
          {images.map((image, index) => (
            <div className="p-0.5" key={index}>
              <img
                className="w-full h-auto rounded-md object-cover"
                src={image}
                alt={`Slide ${index}`}
                key={index}
              />
            </div>
          ))}
        </div>

        <div className="columns-3 gap-0 w-[50%] bg-bg xl:w-[20%]">
          {images.map((image, index) => (
            <div className="p-0.5" key={index}>
              <img
                className="w-full h-auto rounded-md object-cover"
                src={image}
                alt={`Slide ${index}`}
                key={index}
              />
            </div>
          ))}
        </div>

        <div className="columns-3 gap-0 w-[50%] bg-bg xl:w-[20%]">
          {images.map((image, index) => (
            <div className="p-0.5" key={index}>
              <img
                className="w-full h-auto rounded-md object-cover"
                src={image}
                alt={`Slide ${index}`}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
