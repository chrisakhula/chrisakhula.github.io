import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  BarChart3,
  Database,
  Lock,
  Monitor,
  Shield,
} from "lucide-react";

const workflows = [
  {
    title: "ICT Support",
    steps: ["Issue", "Diagnosis", "Fix", "Feedback", "Documentation"],
  },
  {
    title: "Secure Access",
    steps: ["Request", "Approval", "Setup", "Monitoring", "Review"],
  },
  {
    title: "ERP Logic",
    steps: ["Input", "Validation", "Processing", "Reporting", "Decision"],
  },
];

const dashboards = [
  { title: "System uptime tracker", icon: Activity },
  { title: "User activity logs", icon: Monitor },
  { title: "Inventory levels", icon: Database },
  { title: "Sales performance", icon: BarChart3 },
  { title: "Incident tracking", icon: Shield },
  { title: "Access control", icon: Lock },
];

const SystemsShowcase = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="systems" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Dashboards <span className="gold-gradient">& Workflows</span>
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            I focus on how systems actually work, not just how they look.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface rounded-3xl p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                Workflow
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                {workflow.title}
              </h3>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {workflow.steps.map((step, stepIndex) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground">
                      {step}
                    </span>
                    {stepIndex < workflow.steps.length - 1 ? (
                      <span className="text-primary">{"->"}</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
            Dashboard Concepts
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {dashboards.map((dashboard) => (
              <div
                key={dashboard.title}
                className="card-surface rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <dashboard.icon size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                    UI card
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {dashboard.title}
                </h3>
                <div className="mt-5 space-y-3">
                  <div className="h-2 rounded-full bg-primary/25" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-2xl bg-background/70" />
                    <div className="h-14 rounded-2xl bg-background/60" />
                    <div className="h-14 rounded-2xl bg-background/50" />
                  </div>
                  <div className="h-2 w-4/5 rounded-full bg-border" />
                  <div className="h-2 w-3/5 rounded-full bg-border" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemsShowcase;
