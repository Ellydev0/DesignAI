import Nav from "./components/Nav";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Comments from "./sections/Comments";
import Footer from "./sections/Footer";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time: number) {
      if (!lenisRef.current?.lenis) return;
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div>
        <Nav />
        <Hero />
        <Features />
        <Comments />
        <Footer />
      </div>
    </>
  );
}

export default App;
