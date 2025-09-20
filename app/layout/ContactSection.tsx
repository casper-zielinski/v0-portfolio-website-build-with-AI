"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion, spring } from "motion/react";
import router from "next/router";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, translateX: -30 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              opacity: { duration: 1, type: "spring" },
              translateX: { duration: 1.6, type: "spring" },
            }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    casper.zielinski.work@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.06 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      router.push("https://github.com/casper-zielinski")
                    }
                    className="cursor-pointer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      router.push(
                        "https://www.linkedin.com/in/casper-zielinski-ab6650348/"
                      )
                    }
                    className="cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 30 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              opacity: { duration: 1, type: "spring" },
              translateX: { duration: 1.6, type: "spring" },
            }}
            viewport={{ once: true }}
          >
            <Card className="p-5">
              <form className="space-y-6">
                <div className="space-y-6">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Your message..." rows={5} />
                </div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button type="submit" className="w-full cursor-pointer">
                    Send
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
