"use client";
import Lenis from "lenis";
import { useEffect } from "react";

const SmoothScrolling = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScrolling;