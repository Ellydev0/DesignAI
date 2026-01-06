import { useState } from "react";

const Loading = () => {
  const [close, setClose] = useState(false);
  window.addEventListener("load", () => {
    setTimeout(() => {
      setClose(true);
    }, 1900);
  });

  return (
    <div
      className={`${close ? "close" : ""} transition-all duration-500 ease-in-out flex justify-center items-center z-100 h-full w-full fixed bg-bg top-0 left-0`}
    >
      <div className="w-[50%] xl:w-[15%] h-0.5 rounded-full bg-white/20 overflow-clip">
        <div className=" bg-primary w-[50%] h-full rounded-full move"></div>
      </div>
    </div>
  );
};

export default Loading;
