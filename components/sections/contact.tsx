"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your business.
            </p>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">contact@nexoria.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-secondary/30 border border-secondary/20 focus:border-primary/50 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-secondary/30 border border-secondary/20 focus:border-primary/50 outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-secondary/30 border border-secondary/20 focus:border-primary/50 outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}