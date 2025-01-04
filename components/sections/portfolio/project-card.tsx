"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.02 }}
      className="portfolio-card group perspective"
    >
      <motion.div
        className="relative w-full h-[400px] [transform-style:preserve-3d]"
        whileHover={{ rotateY: 10, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-z-30">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-2"
          >
            {project.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-4"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/20 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            whileHover={{ x: 5 }}
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}