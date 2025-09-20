"use client"

import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I am a dedicated Computer Science student at FH Joanneum with a
              passion for web and app development. I enjoy solving complex
              problems and creating user-friendly applications that make a
              difference.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Student at FH Joanneum
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Focus on Web & App Development
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Passionate Problem Solver
                </span>
              </div>
            </div>
          </div>

          <motion.div className="hidden md:flex justify-center"
          whileHover={{scale: 1.1}}>
            <Card className="p-8 max-w-sm hover:shadow-2xl">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Always Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously exploring new technologies and best practices in
                  software development.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
