"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-pretty">
              I am a dedicated Mobile Software Development student at FH
              Joanneum with a passion for web and app development. I enjoy
              creating responsive applications with robust functionality—from
              building full-stack features and database integration to
              implementing APIs and routing systems.
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <Button
                variant="outline"
                size="default"
                asChild
                className="text-lg px-8 py-6 bg-transparent"
              >
                <a
                  href="/Lebenslauf_Zielinski_Casper_02.pdf"
                  download="Casper_Zielinski_CV.pdf"
                >
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
            transition={{ scale: { duration: 0.3 }, opacity: { duration: 1 } }}
          >
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
