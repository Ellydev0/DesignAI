import { useState, useEffect, useLayoutEffect } from "react";

const Loading = () => {
  const [close, setClose] = useState(false);

  useLayoutEffect(() => {
    const originalBodyOverflow = window.getComputedStyle(
      document.body,
    ).overflow;
    const originalHtmlOverflow = window.getComputedStyle(
      document.documentElement,
    ).overflow;

    if (!close) {
      document.body.style.overflow = "clip";
      document.documentElement.style.overflow = "clip";
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [close]);

  useEffect(() => {
    const handleLoad = () => {
      console.log("Loading complete1");
      setTimeout(() => {
        console.log("Loading complete");
        setClose(true);
      }, 1900);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      className={`${close ? "close" : ""} transition-all duration-500 ease-in-out flex justify-center items-center z-100 w-screen h-screen fixed bg-bg top-0 left-0`}
    >
      <div className="w-[50%] xl:w-[15%] h-0.5 rounded-full bg-white/20 overflow-clip">
        <div className=" bg-primary w-[50%] h-full rounded-full move"></div>
      </div>
    </div>
  );
};

export default Loading;
