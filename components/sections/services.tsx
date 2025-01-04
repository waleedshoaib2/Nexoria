"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Globe, Layout, Smartphone, Wand2 } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-14 w-14 text-white" />,
    title: "Website Development",
    description: "Custom websites that engage visitors and drive conversions.",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    icon: <Cpu className="h-14 w-14 text-white" />,
    title: "AI-Driven MVPs",
    description: "Innovative solutions powered by cutting-edge AI technology.",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: <Code2 className="h-14 w-14 text-white" />,
    title: "Software Development",
    description: "Scalable software solutions for complex business needs.",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    icon: <Layout className="h-14 w-14 text-white" />,
    title: "WordPress Development",
    description: "Professional WordPress sites with custom functionality.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Smartphone className="h-14 w-14 text-white" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    gradient: "from-pink-500 to-red-400"
  },
  {
    icon: <Wand2 className="h-14 w-14 text-white" />,
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional experiences.",
    gradient: "from-yellow-400 to-amber-500"
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-lg border border-gray-700 hover:shadow-xl group transition-transform transform hover:-translate-y-2"
            >
              {/* Icon with Gradient */}
              <div
                className={`mb-6 p-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
              >
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-400 group-hover:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
