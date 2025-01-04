"use client";

import { motion } from "framer-motion";

interface CompanyLogoProps {
  name: string;
  logo: string;
  delay: number;
}

export default function CompanyLogo({ name, logo, delay }: CompanyLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center p-6 bg-secondary/30 rounded-xl backdrop-blur-sm"
    >
      <img src={logo} alt={name} className="h-8 md:h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}