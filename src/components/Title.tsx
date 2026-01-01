const Title = () => {
  return (
    <div className="flex items-center  gap-3 justify-center text-center break-words absolute min-h-full px-5 z-2 xl:px-12 xl:block xl:text-left">
      <div className="flex gap-25 flex-col h-fit xl:justify-between xl:py-21 xl:h-screen">
        <div className="w-full xl:w-[50%]">
          <h1 className="text-[3rem] xl:text-[3.7rem] font-extrabold font-plus">
            AI That Designs With You
          </h1>
        </div>

        <div className="flex flex-col gap-10 xl:flex-row-reverse xl:justify-between xl:pr-3 items-end">
          <div className="w-full xl:text-[.8rem] xl:w-[26%] ">
            <p className="">
              Designing is amazing but can get tiring especially when working
              for a brand. <strong>DesignAI</strong> is your creative
              partner,helping you turn ideas into beautiful and polished designs
              in less time. Work smarter not harder. Elevate your designs today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
