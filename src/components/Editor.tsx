const Editor = () => {
  return (
    <>
      <div className="bottom-0 mt-10 -z-20 -top-20 right-45 xl:w-[30%] xl:absolute xl:-rotate-35 ">
        <img
          src="./img/art.webp"
          alt="A boy on a cliff looking down giving a bravery feeling"
          className="block w-auto h-auto rounded-lg shadow-lg shadow-black/20"
        />
      </div>

      <div className=" relative translate-y-[-30%] xl:static">
        <div className="shadow-lg shadow-black/20 p-0.5 rounded-md bg-gradient-to-r text-[1rem] from-primary -z-20 to-accent w-fit -top-14 right-100 -rotate-5 xl:absolute xl:-top-75 xl:-rotate-15 xl:right-50">
          <p className="rounded-sm bg-bg p-1.5">
            You could try grayscale for a cleaner look.
          </p>
        </div>

        <div className="shadow-lg shadow-black/20 p-0.5 rounded-md bg-gradient-to-r text-[1rem] from-primary -z-20 to-accent w-fit -top-10 right-0 -rotate-15 xl:absolute xl:-top-50 xl:rotate-6">
          <p className="rounded-sm bg-bg p-1.5">
            Try adding text to anchor the visual narrative.
          </p>
        </div>

        <div className="shadow-lg shadow-black/20 p-0.5 rounded-md bg-gradient-to-r text-[1rem] from-primary -z-20 to-accent w-fit  right-110 rotate-5 xl:absolute xl:right-90">
          <p className="rounded-sm bg-bg p-1.5">
            You could rotate hue 90° for a fresh tonal balance.
          </p>
        </div>

        <div className="shadow-lg shadow-black/20 p-0.5 rounded-md bg-gradient-to-r text-[1rem] from-primary -z-20 to-accent w-fit -bottom-30 absolute right-0 -rotate-5 translate-y-[-70%] xl:-rotate-25 xl:absolute xl:translate-y-[0%]">
          <p className="rounded-sm bg-bg p-1.5">
            Try increasing saturation to amplify energy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Editor;
