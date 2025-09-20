"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";

const Herosection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                Hi, I'm <span className="text-primary">Casper Zielinski</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-pretty">
                Aspiring Developer & Problem Solver
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                Mobile Software Development student at FH Joanneum passionate
                about creating innovative web and mobile applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ translateY: -2.5, scale: 1.06 }}>
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ translateY: -2.5, scale: 1.06 }}>
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

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full shadow-2xl shadow-blue-600 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src="/casper-portrait.jpg"
                  alt="Casper Zielinski"
                  className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
