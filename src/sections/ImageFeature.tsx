import { useEffect } from "react";

const images = [
  { src: "/img/e.avif", className: "top-1/3 right-24" },
  { src: "/img/c.avif", className: "bottom-24 left-32" },
  { src: "/img/b.avif", className: "top-20 right-1/3" },
  { src: "/img/d.avif", className: "bottom-10 left-96" },
];

const ImageFeature = () => {
  // Preload images BEFORE scroll interaction
  useEffect(() => {
    images.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-28 mt-40">
      {/* Background visual layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute h-40 w-40 rounded-xl bg-cover bg-center opacity-65 ${img.className}`}
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </div>

      {/* Centered content */}
      <div className="relative mx-auto text-center">
        <h2 className="mb-3 text-[2.5rem] font-plus font-bold">
          Create assets, not placeholders.
        </h2>
        <p className="mx-auto w-[80%] text-[0.9rem] font-light text-text/80">
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
