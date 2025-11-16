"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { Slide, toast } from "react-toastify";

const ContactSection = () => {
  const router = useRouter();
  const t = useTranslations("contact");
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const invalidForm =
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
    !name ||
    !message;

  const clearForm = () => {
    setEmail("");
    setMessage("");
    setName("");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          toast.success("Message send", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Slide,
          });
          form.reset();
          clearForm();
        },
        (error) => {
          toast.error("Error sending message!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("title")}
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
                  <h3 className="font-semibold">{t("email")}</h3>
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
            <Card className="p-5 hover:shadow-2xl focus:shadow-2xl">
              <form
                className="space-y-6"
                id="contactForm"
                onSubmit={sendEmail}
                ref={form}
              >
                <div className="space-y-6">
                  <label className="text-sm font-medium">{t("name")}</label>
                  <Input
                    placeholder={t("namePlaceholder")}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t("email")}</label>
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t("message")}</label>
                  <Textarea
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={invalidForm}
                  >
                    {t("send")}
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
