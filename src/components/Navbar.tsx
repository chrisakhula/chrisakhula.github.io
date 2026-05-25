import { useState } from "react";
import { Download, Github, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import portraitArt from "@/assets/dev-cleophas01.jpg";
import TypingName from "./TypingName";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Services", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/88 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between gap-6">
        <a href="#home" className="interactive-press flex items-center gap-3">
          <span className="portrait-frame inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border bg-background p-0.5">
            <img
              src={portraitArt}
              alt="Original portrait of Cleophas Ouma"
              className="h-full w-full rounded-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-extrabold text-foreground">
              <TypingName className="min-w-[7.5rem]" cursorClassName="text-xs" />
            </p>
          </div>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="interactive-press border-b border-transparent pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground hover:border-primary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/Cleophas-Ouma-CV.txt"
            download="Cleophas-Ouma-CV.txt"
            className="gold-glow interactive-press inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground hover:bg-primary/92"
          >
            <Download size={14} /> CV
          </a>
          <a
            href="mailto:ouma.cleo@gmail.com"
            aria-label="Email Cleophas Ouma"
            className="interactive-press text-muted-foreground hover:text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/chrisakhula"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="interactive-press text-muted-foreground hover:text-primary"
          >
            <Github size={18} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen((current) => !current)}
          className="interactive-press rounded-sm p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-white/10 bg-background shadow-[0_18px_44px_-32px_rgba(0,0,0,0.95)] lg:hidden"
          >
            <div className="section-container flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="interactive-press text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Cleophas-Ouma-CV.txt"
                download="Cleophas-Ouma-CV.txt"
                className="gold-glow interactive-press inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground"
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
