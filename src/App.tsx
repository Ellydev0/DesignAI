// @ts-nocheck

import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Waitlist from "./sections/Waitlist";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import Loading from "./Loading";

function App() {
  const lenisRef = useRef(null!);
  useEffect(() => {
    function update(time: number) {
      if (!lenisRef.current.lenis) return;
      lenisRef.current.lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Loading />
      <div className="overflow-x-hidden">
        <Hero />
        <Features />
        <Waitlist />
        <Footer />
      </div>
    </>
  );
}

export default App;
