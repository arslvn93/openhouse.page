import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShapeProps {
  type: "sphere" | "cube" | "torus" | "pyramid";
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  delay?: number;
  duration?: number;
}

export default function FloatingShape({
  type,
  size,
  color,
  initialX,
  initialY,
  delay = 0,
  duration = 6,
}: FloatingShapeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderShape = () => {
    const baseClasses = "absolute backdrop-blur-sm";
    const shapeStyle = {
      width: size,
      height: size,
      background: color,
    };

    switch (type) {
      case "sphere":
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              ...shapeStyle,
              boxShadow: `0 0 ${size / 2}px ${color}`,
            }}
          />
        );
      case "cube":
        return (
          <div
            className={`${baseClasses} rounded-md`}
            style={{
              ...shapeStyle,
              transform: "rotateX(45deg) rotateY(45deg)",
              transformStyle: "preserve-3d",
              boxShadow: `0 0 ${size / 3}px ${color}`,
            }}
          />
        );
      case "torus":
        return (
          <div
            className={`${baseClasses} rounded-full border-8`}
            style={{
              width: size,
              height: size,
              borderColor: color,
              background: "transparent",
              boxShadow: `0 0 ${size / 3}px ${color}`,
            }}
          />
        );
      case "pyramid":
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              filter: `drop-shadow(0 0 ${size / 3}px ${color})`,
            }}
          />
        );
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        rotate: type === "cube" || type === "pyramid" ? [0, 360] : [0, 180, 360],
        x: mousePosition.x,
      }}
      transition={{
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: duration * 3,
          repeat: Infinity,
          ease: "linear",
          delay,
        },
        x: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
    >
      {renderShape()}
    </motion.div>
  );
}
