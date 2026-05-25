import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download, Mail, ShieldCheck } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";
import TypingName from "./TypingName";

const stats = [
  { value: "5+", label: "years across ICT, ERP, and business systems" },
  { value: "100+", label: "enterprise users supported and trained" },
  { value: "30%", label: "security and operations improvement" },
  { value: "20%", label: "fewer ICT incidents through controls" },
  { value: "15%", label: "less downtime through maintenance" },
];

const operatingNotes = [
  "ERP workflows",
  "POS and inventory",
  "ICT infrastructure",
  "Web and visibility",
];

const easeOut = [0.23, 1, 0.32, 1] as const;

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/5 pt-16">
      <div className="pointer-events-none absolute left-[6vw] top-24 hidden h-[72%] w-px bg-primary/20 lg:block" />
      <div className="section-container relative w-full py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 xl:grid-cols-[0.94fr_1.06fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46, ease: easeOut }}
          >
            <div className="gold-line mb-6" />
            <p className="mb-4 max-w-xl text-xs font-bold uppercase tracking-[0.24em] text-primary">
              Group ICT Manager | ERP Functional Consultant | Web & Digital Systems Builder
            </p>
            <h1 className="mb-7 max-w-4xl font-display text-5xl font-bold leading-[0.92] sm:text-6xl lg:text-7xl xl:text-8xl">
              <TypingName lastNameClassName="gold-gradient italic" />
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/86 sm:text-xl">
              I help businesses turn messy operations into clear, reliable, and
              measurable digital systems across ICT infrastructure, ERP
              workflows, POS systems, inventory control, web development,
              cybersecurity monitoring, digital reporting, and brand visibility.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Currently, I serve as Group ICT Manager at Bantu Africa Resort Ltd
              and Bradegate Food Industries Ltd, overseeing ICT operations
              across hospitality, food processing, retail, and fast-food
              environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="gold-glow interactive-press inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/92"
              >
                View Services <ArrowRight size={18} />
              </a>
              <a
                href="/Cleophas-Ouma-CV.txt"
                download="Cleophas-Ouma-CV.txt"
                className="interactive-press inline-flex items-center gap-2 rounded-sm border border-white/15 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground hover:border-primary hover:text-primary"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#contact"
                className="interactive-press inline-flex items-center gap-2 rounded-sm border border-white/10 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground hover:border-white/25 hover:text-primary"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="surface-line mt-10 max-w-2xl border-y py-5">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary">
                Operating principle
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                I connect systems with real business operations: production,
                stock movement, sales, finance, reporting, customer experience,
                websites, and digital marketing.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {operatingNotes.map((note) => (
                  <div key={note} className="flex items-center gap-2 text-sm text-foreground/85">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
            className="flex justify-center xl:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="portrait-frame group relative overflow-hidden rounded-[1.25rem] border bg-secondary/40 p-3">
                <div className="aspect-[4/5] overflow-hidden rounded-[1rem] bg-secondary">
                  <img
                    src={headshot}
                    alt="Cleophas Ouma"
                    className="portrait-reveal h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="card-surface absolute -bottom-8 -left-4 hidden rounded-lg border-primary/20 p-4 md:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <ShieldCheck size={22} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-primary">
                      Systems Builder
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      ICT | ERP | Web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-0 overflow-hidden border-y border-border/70 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-border/70 py-5 pr-6 last:border-b-0 sm:odd:border-r xl:border-b-0 xl:border-r xl:last:border-r-0 xl:px-5 xl:first:pl-0">
              <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
