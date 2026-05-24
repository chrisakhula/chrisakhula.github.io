import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowRight, Download, Mail, ShieldCheck } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";
import TypingName from "./TypingName";

const stats = [
  { value: 5, suffix: "+", label: "Years working in ICT, ERP, and business systems" },
  { value: 100, suffix: "+", label: "Users managed across enterprise systems" },
  { value: 30, suffix: "%", label: "Improvement in system security and operational efficiency" },
  { value: 20, suffix: "%", label: "Reduction in ICT-related incidents through training and controls" },
  { value: 15, suffix: "%", label: "Reduction in downtime through maintenance and support" },
];

const AnimatedMetric = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="card-surface rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
    >
      <p className="font-display text-3xl font-bold text-primary">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/5 pt-16">
      <div className="section-container relative w-full py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 xl:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Group ICT Manager | ERP Functional Consultant | Web & Digital Systems Builder
            </p>
            <h1 className="mb-7 max-w-4xl font-display text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
              <TypingName lastNameClassName="gold-gradient italic" />
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
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
                className="gold-glow inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:opacity-95"
              >
                View Services <ArrowRight size={18} />
              </a>
              <a
                href="/Cleophas-Ouma-CV.txt"
                download="Cleophas-Ouma-CV.txt"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm border border-white/10 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-white/25 hover:text-primary"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="card-surface mt-10 max-w-xl rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Value Statement
              </p>
              <p className="mt-3 max-w-2xl text-base italic leading-relaxed text-muted-foreground">
                "I do not just manage technology. I connect systems with real
                business operations, from production, stock movement, sales,
                finance, reporting, customer experience, websites, and digital
                marketing."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="portrait-frame card-surface group relative overflow-hidden rounded-2xl p-4">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={headshot}
                    alt="Cleophas Ouma"
                    className="portrait-reveal h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="card-surface absolute -bottom-8 -left-3 hidden rounded-lg border-primary/20 p-4 md:block">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => (
            <AnimatedMetric
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
