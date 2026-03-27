import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Database, Shield, Users } from "lucide-react";

const responsibilities = [
  "Design ERP workflows for real business processes",
  "Improve inventory tracking and reporting accuracy",
  "Align ICT systems with finance and operations",
  "Support teams through training and system adoption",
  "Strengthen infrastructure and system reliability",
];

const principles = [
  "Business first, system second",
  "Fix workflows, not just tools",
  "Measure impact, not activity",
  "Keep systems simple and reliable",
];

const highlights = [
  {
    icon: Database,
    title: "Structured digital workflows",
    description:
      "I translate business operations into systems that support inventory control, reporting accuracy, and visibility.",
  },
  {
    icon: BarChart3,
    title: "Operational clarity",
    description:
      "My focus is not only on software configuration, but also on cleaner reporting and stronger decision support.",
  },
  {
    icon: Shield,
    title: "Reliable systems",
    description:
      "I improve infrastructure, access control, and process discipline so teams can work with confidence.",
  },
  {
    icon: Users,
    title: "People and adoption",
    description:
      "Training, rollout support, and practical guidance matter as much as technical design.",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            About <span className="gold-gradient">Me</span>
          </h2>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
            Who I Am
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="card-surface rounded-3xl p-7"
          >
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am a Group ICT Manager and ERP Functional Consultant with
              hands-on experience across hospitality, retail, and food
              processing environments.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I specialize in translating business operations into structured
              digital workflows, improving inventory control, reporting
              accuracy, and operational visibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="card-surface rounded-3xl p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Where I Add Value
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="font-display text-xl font-semibold text-foreground">
                  Business process to system logic
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I focus on getting workflows right so operations, reporting,
                  and accountability stay aligned.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                <p className="text-sm leading-relaxed text-foreground">
                  The goal is always the same: make systems practical,
                  measurable, and dependable for the people using them every
                  day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="card-surface rounded-3xl p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              What I Actually Do
            </p>
            <div className="mt-5 space-y-4">
              {responsibilities.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="card-surface rounded-3xl p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              How I Think
            </p>
            <div className="mt-5 space-y-4">
              {principles.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface rounded-3xl p-6"
            >
              <highlight.icon className="mb-4 text-primary" size={24} />
              <h3 className="font-display text-lg font-semibold">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
