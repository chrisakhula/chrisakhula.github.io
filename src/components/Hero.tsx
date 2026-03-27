import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";
import cleodev from "@/assets/cleodev.png";
import portraitArt from "@/assets/dev-cleophas01.jpg";

const stats = [
  { value: 5, suffix: "+", label: "Years in ICT and ERP systems" },
  { value: 100, suffix: "+", label: "Users managed across enterprise systems" },
  { value: 30, suffix: "%", label: "Improvement in system security and efficiency" },
  { value: 20, suffix: "%", label: "Reduction in incidents" },
  { value: 15, suffix: "%", label: "Reduction in downtime" },
];

const focusAreas = [
  "ERP workflows for hospitality, retail, and manufacturing",
  "Operational reporting, inventory control, and system adoption",
  "Infrastructure reliability, access control, and support processes",
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
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,162,53,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(36,86,135,0.18),transparent_28%)]" />
      <div className="section-container relative w-full py-20 sm:py-24">
        <div className="grid items-center gap-14 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Group ICT Manager | ERP Functional Consultant | Tech Enthusiast
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Cleophas <span className="gold-gradient">Ouma</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I design and manage enterprise systems that improve operations,
              strengthen reporting, and support real business growth across
              hospitality, retail, and manufacturing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="/Cleophas-Ouma-CV.txt"
                download="Cleophas-Ouma-CV.txt"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Value Statement
              </p>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-foreground">
                I do not just manage systems. I align technology with
                operations, so businesses run better, faster, and with fewer
                errors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="card-surface relative w-full max-w-md overflow-hidden rounded-[2rem] p-8">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-primary/15 bg-background/55 p-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-primary">
                      Personal Identity
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-foreground">
                      Cleodev Mark
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-lg shadow-black/20">
                    <img
                      src={cleodev}
                      alt="Cleodev logo"
                      className="h-full w-full rounded-xl object-contain"
                    />
                  </div>
                </div>

                <div className="relative mx-auto h-72 w-72 rounded-[2rem] border border-primary/20 bg-background/70 p-4 shadow-2xl shadow-black/30">
                  <div className="absolute inset-3 rounded-[1.6rem] border border-primary/10" />
                  <img
                    src={headshot}
                    alt="Cleophas Ouma"
                    className="h-full w-full rounded-[1.35rem] object-cover object-top"
                  />
                </div>
              </div>

              <div className="relative mt-6 grid gap-4 sm:grid-cols-[0.82fr_1.18fr]">
                <div className="rounded-2xl border border-border bg-background/60 p-3">
                  <img
                    src={portraitArt}
                    alt="Illustrated portrait of Cleophas Ouma"
                    className="h-40 w-full rounded-[1.15rem] object-cover"
                  />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-primary">
                    Original Portrait
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A creative signature carried forward from the first version
                    of the portfolio.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background/60 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                    Focus Areas
                  </p>
                  <div className="mt-4 space-y-3">
                    {focusAreas.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    ))}
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
