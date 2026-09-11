"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 300, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 300, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-on");

    function move(e) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }
    function over(e) {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(true);
    }
    function out(e) {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(false);
    }

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full bg-mint mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full border border-mint mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
