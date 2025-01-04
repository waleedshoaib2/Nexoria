"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LogoCloudProps {
  logos: Array<{ name: string; logo: string }>;
}

export default function LogoCloud({ logos }: LogoCloudProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          animate={{
            x: Math.sin(mousePosition.x * 0.001 + index) * 10,
            y: Math.cos(mousePosition.y * 0.001 + index) * 10,
          }}
          transition={{ type: "spring", damping: 10 }}
          className="flex items-center justify-center p-6 bg-secondary/30 rounded-xl backdrop-blur-sm"
        >
          <img
            src={logo.logo}
            alt={logo.name}
            className="h-8 md:h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      ))}
    </div>
  );
}