"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

const Herosection = () => {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, translateY: -5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                Hi, I'm <span className="text-primary">Casper Zielinski</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-200 font-semibold text-pretty">
                Web Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                Mobile Software Development student at FH Joanneum passionate
                about creating innovative web applications using Next.js and
                React
              </p>
            </motion.div>

            <div className="flex flex-col items-center sm:flex-row gap-4">
              <motion.div
                whileHover={{ translateY: -2, scale: 1.04 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring" }}
              >
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ translateY: -2, scale: 1.04 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring" }}
              >
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <p
                    onClick={() =>
                      router.push("https://github.com/casper-zielinski")
                    }
                  >
                    View Github
                  </p>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ translateY: -2, scale: 1.04 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 py-6 bg-transparent"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ translateX: 10, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full shadow-2xl dark:shadow-blue-600 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src="/casper-portrait.jpg"
                  alt="Casper Zielinski"
                  className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   bg-black/10 dark:bg-white/10 
                   backdrop-blur-sm p-3 rounded-full
                   hover:bg-black/20 dark:hover:bg-white/20 
                   transition-colors cursor-pointer
                   border border-black/20 dark:border-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="w-6 h-6 text-black dark:text-white" />
      </motion.a>
    </section>
  );
};

export default Herosection;
