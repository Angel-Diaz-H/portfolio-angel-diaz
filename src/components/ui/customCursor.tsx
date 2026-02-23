"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    if (window.matchMedia("(pointer: fine)").matches) {
      setIsPointer(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted || !isPointer) return null;

  return (
    <>
      <motion.div
        className="bg-primary/20 dark:bg-primary/30 pointer-events-none fixed top-0 left-0 z-9998 h-8 w-8 rounded-full blur-sm"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 flex h-8 w-8 items-center justify-center rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <div className="bg-primary h-2 w-2 rounded-full shadow-[0_0_10px_2px_rgba(var(--primary),0.5)]" />
      </motion.div>
    </>
  );
};
