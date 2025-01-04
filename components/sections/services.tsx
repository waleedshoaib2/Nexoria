"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Globe, Layout, Smartphone, Wand2 } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Website Development",
    description: "Custom websites that engage visitors and drive conversions.",
    gradient: "from-[#00ffa3] to-[#00c8ff]"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI-Driven MVPs",
    description: "Innovative solutions powered by cutting-edge AI technology.",
    gradient: "from-[#FF3366] to-[#FF66CC]"
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Software Development",
    description: "Scalable software solutions for complex business needs.",
    gradient: "from-[#FFD700] to-[#FFA500]"
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "WordPress Development",
    description: "Professional WordPress sites with custom functionality.",
    gradient: "from-[#00ffa3] to-[#00c8ff]"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    gradient: "from-[#FF3366] to-[#FF66CC]"
  },
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional experiences.",
    gradient: "from-[#FFD700] to-[#FFA500]"
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${service.gradient} transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}