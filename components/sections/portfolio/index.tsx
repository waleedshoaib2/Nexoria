"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Real-time data visualization with predictive analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://example.com",
    tags: ["React", "AI", "TypeScript", "Three.js"]
  },
  {
    title: "Immersive E-commerce",
    description: "3D product visualization with AR try-on",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "https://example.com",
    tags: ["Next.js", "Three.js", "AR", "WebGL"]
  },
  {
    title: "Smart City Dashboard",
    description: "Real-time IoT monitoring with 3D city visualization",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    link: "https://example.com",
    tags: ["IoT", "React", "Three.js", "WebGL"]
  }
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects featuring cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}