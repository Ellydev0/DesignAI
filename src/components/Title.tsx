const Title = () => {
  return (
    <div className="flex items-center flex-col h-full justify-center relative z-10">
      <div className="text-center">
        <h1 className="text-[3rem] mb-0 xl:text-[5rem] font-extrabold font-plus">
          Design faster. <br />
          Stress less.
        </h1>
        <p className="text-[.7rem] w-[80%] mx-auto xl:text-[1rem] font-medium font-inter">
          Accelerate your design workflow with scalable AI critique,
          high-fidelity image generation, and consistent, production-ready
          assets.
        </p>

        <div className="flex justify-center items-center gap-8 mt-8">
          <button className="bg-primary px-5 py-3 rounded-xl hover:bg-accent active:bg-text-1 transition-colors duration-330 text-text">
            Get Started
          </button>
          <button className="border border-primary px-5 py-3 rounded-xl hover:border-accent hover:bg-accent active:bg-text-1 transition-colors duration-330 text-text">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
