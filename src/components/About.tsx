import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, GitBranch, Globe2, Network, ShieldCheck } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";

const valueCards = [
  {
    icon: GitBranch,
    label: "Business Systems",
    title: "Operations to system logic",
    description:
      "I align inventory, production, sales, finance, and reporting systems so business activity is easier to trace, measure, and improve.",
    points: [
      "ERP workflow design for real operations",
      "Inventory, POS, and reporting alignment",
      "SOPs, documentation, and user adoption",
    ],
  },
  {
    icon: BarChart3,
    label: "Digital Execution",
    title: "Visibility beyond internal systems",
    description:
      "I also build and improve web, digital marketing, and brand visibility systems that help businesses present themselves professionally online.",
    points: [
      "Websites for hospitality and service brands",
      "SEO-focused content and service pages",
      "Digital campaigns, posters, and brand positioning",
    ],
  },
  {
    icon: Network,
    label: "ICT Infrastructure",
    title: "Reliable technical operations",
    description:
      "I strengthen the systems teams depend on every day, including networks, CCTV, backups, access control, monitoring, and user support.",
    points: [
      "Networks, CCTV, backups, and access control",
      "Cybersecurity monitoring and user awareness",
      "Troubleshooting, maintenance, and faster response",
    ],
  },
  {
    icon: Globe2,
    label: "Web & Brand Growth",
    title: "Digital presence that supports business",
    description:
      "I plan and build practical digital platforms, content structures, and marketing systems for hospitality, food brands, service businesses, and personal brands.",
    points: [
      "Modern websites and cPanel deployment workflows",
      "SEO copy, service pages, and brand positioning",
      "Digital marketing, campaigns, and poster concepts",
    ],
  },
];

const pillars = [
  {
    label: "Pillar 01",
    title: "Business first, system second",
    description:
      "Technology should adapt to the business need. I focus on the why before deploying the how.",
  },
  {
    label: "Pillar 02",
    title: "Measure impact, not activity",
    description:
      "KPIs must reflect real efficiency gains, from reduced downtime to cleaner reports and better accuracy.",
  },
  {
    label: "Pillar 03",
    title: "People-centric implementation",
    description:
      "A powerful ERP is only useful when teams understand it, trust it, and can use it consistently.",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="border-b border-white/5 py-24 lg:py-32">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Who I Am
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Where ICT, ERP, web, and business operations{" "}
            <span className="gold-gradient italic">connect.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="card-surface rounded-xl p-7 sm:p-10"
          >
            <h3 className="font-display text-3xl font-semibold">
              Professional Narrative
            </h3>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I am a Group ICT Manager and ERP Functional Consultant with
                hands-on experience across hospitality, food processing,
                retail, and fast-food environments. My work sits at the point
                where technology meets business execution.
              </p>
              <p>
                I work across ICT infrastructure, ERP workflows, POS systems,
                inventory control, web development, cybersecurity monitoring,
                digital reporting, and brand visibility. My focus is simple:
                build systems that help teams work better, reduce errors,
                improve decision-making, and support business growth.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-line border-y p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  Current Role
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Group ICT Manager
                </p>
              </div>
              <div className="border-y border-border/70 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  ERP, ICT, Web, Digital
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="group relative"
          >
            <div className="portrait-frame card-surface overflow-hidden rounded-xl p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                <img
                  src={headshot}
                  alt="Cleophas Ouma professional portrait"
                  className="portrait-reveal h-full w-full object-cover object-top"
                />
                <div className="card-surface absolute bottom-4 left-4 right-4 rounded-lg p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                    Systems in the Room
                  </p>
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    Technical leadership shaped by real teams, counters,
                    stores, reports, and decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary">
            What I Do
          </p>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 + index * 0.08 }}
              className={`card-surface rounded-xl p-7 sm:p-10 ${
                index === 0 ? "lg:row-span-2 lg:min-h-[28rem]" : ""
              }`}
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <card.icon className="text-primary" size={32} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {card.label}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                {card.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-8 space-y-3">
                {card.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <ShieldCheck className="shrink-0 text-primary" size={16} />
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
            How I Think
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + index * 0.08 }}
                className="border-l-2 border-primary/35 p-6 transition-colors hover:border-primary"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {pillar.label}
                </p>
                <h4 className="mt-4 text-lg font-bold text-primary">
                  {pillar.title}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
