"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with AI insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://example.com",
    tags: ["React", "AI", "TypeScript"]
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with AR product preview",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "https://example.com",
    tags: ["Next.js", "Shopify", "AR"]
  },
  {
    title: "Smart City Management",
    description: "IoT-based city infrastructure monitoring system",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    link: "https://example.com",
    tags: ["IoT", "React", "Node.js"]
  }
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and innovative solutions.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-card group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}