"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = (e.target as HTMLElement).closest(
        "a, button, [role='button'], .hoverable"
      );
      setIsHovering(!!target);
    };

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [isDesktop, rawX, rawY, dotX, dotY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? 50 : 20,
          height: isHovering ? 50 : 20,
          border: `2px solid ${isHovering ? "#f472b6" : "#818cf8"}`,
          background: isHovering ? "rgba(99,102,241,0.2)" : "transparent",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease",
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[#f472b6]"
        style={{
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
          width: 6,
          height: 6,
        }}
      />
    </>
  );
}
