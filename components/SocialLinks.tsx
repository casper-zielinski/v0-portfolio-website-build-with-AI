import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/casper-zielinski",
    Icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/casper-zielinski-ab6650348",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:casper.zielinski.work@gmail.com",
    Icon: Mail,
    external: false,
  },
];

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      {links.map(({ label, href, Icon, external }) => (
        <Button
          key={label}
          asChild
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110 active:scale-95"
        >
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
