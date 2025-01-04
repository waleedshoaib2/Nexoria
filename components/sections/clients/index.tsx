"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LogoCloud from "./logo-cloud";

const clients = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
];

const testimonials = [
  {
    quote: "Nexoria transformed our digital presence with cutting-edge AI solutions that drove remarkable business growth.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    company: "Microsoft"
  },
  {
    quote: "Their expertise in web development and AI integration helped us achieve a 300% increase in user engagement.",
    author: "Michael Chen",
    role: "Product Director",
    company: "Meta"
  }
];

export default function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've helped leading companies achieve extraordinary results through innovative digital solutions.
          </p>
        </motion.div>

        <div ref={ref} className="mb-20">
          <LogoCloud logos={clients} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 bg-secondary/30 rounded-xl backdrop-blur-sm"
            >
              <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-30">"</div>
              <blockquote className="relative z-10">
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <footer>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}