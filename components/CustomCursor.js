"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-on");

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const isInteractive = (target) =>
      target instanceof Element &&
      target.closest("a, button, input, select, textarea, [data-cursor-hover]");

    const over = (e) => setHovering(Boolean(isInteractive(e.target)));
    const out = (e) => {
      if (!e.relatedTarget || !isInteractive(e.relatedTarget)) setHovering(false);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.classList.remove("custom-cursor-on");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full bg-white"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ width: hovering ? 6 : 4, height: hovering ? 6 : 4 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
    />
  );
}
