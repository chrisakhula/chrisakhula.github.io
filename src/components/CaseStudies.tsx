import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ComparisonRow = {
  metric: string;
  before: string;
  after: string;
};

type CaseStudy = {
  company: string;
  title: string;
  problem: string[];
  actionLabel: string;
  actions: string[];
  comparison: ComparisonRow[];
  result: string[];
  visuals: string[];
  context?: string;
  workflow?: string;
};

const caseStudies: CaseStudy[] = [
  {
    company: "Bradegate Food Industries",
    title: "ERP Central Store Implementation",
    context:
      "Multiple production units and retail outlets were operating without a unified stock control flow, causing inconsistencies in inventory tracking and reporting.",
    problem: [
      "Stock movements were not fully traceable",
      "Reporting inconsistencies across units",
      "Lack of centralized visibility",
      "Operational delays in distribution",
    ],
    actionLabel: "What I Built",
    actions: [
      "Centralized ERP workflow for all finished goods",
      "Structured movement: Production -> Central Store -> Distribution",
      "Integrated warehouse, retail, and production inventory",
      "SOPs for standardized stock handling",
    ],
    comparison: [
      { metric: "Stock visibility", before: "Fragmented", after: "Centralized across units" },
      { metric: "Reporting accuracy", before: "Inconsistent", after: "Significantly improved" },
      { metric: "Inventory tracking", before: "Partial", after: "End-to-end traceability" },
      { metric: "Operational flow", before: "Disconnected", after: "Standardized workflow" },
    ],
    result: [
      "Full control over stock movement",
      "Cleaner, reliable reports",
      "Better coordination between departments",
      "Strong foundation for scaling operations",
    ],
    visuals: [
      "ERP inventory dashboard",
      "Stock movement tracking screen",
      "Central store workflow diagram",
    ],
    workflow: "Production -> Central Store -> Distribution -> Retail -> Reporting",
  },
  {
    company: "Bantu Africa Resort and Bradegate Pizza",
    title: "POS and Inventory Integration",
    problem: [
      "Sales data and inventory consumption were not fully aligned",
      "Reconciliation was slower and less dependable",
      "Stock accuracy suffered from reporting gaps",
    ],
    actionLabel: "What I Did",
    actions: [
      "Linked POS transactions to inventory movement",
      "Improved reporting workflows",
      "Standardized daily sales reconciliation",
      "Trained staff on system usage",
    ],
    comparison: [
      { metric: "Sales tracking", before: "Manual gaps", after: "Digitally aligned" },
      { metric: "Stock reconciliation", before: "Inconsistent", after: "Improved accuracy" },
      { metric: "Reporting speed", before: "Slower", after: "Faster daily reporting" },
      { metric: "Staff system usage", before: "Limited", after: "Improved adoption" },
    ],
    result: [
      "Clear link between sales and stock",
      "Faster decision-making",
      "Reduced reporting errors",
    ],
    visuals: [
      "POS dashboard",
      "Sales analytics screen",
      "Inventory consumption report",
    ],
  },
  {
    company: "Bantu Africa Resort",
    title: "ICT Infrastructure and System Optimization",
    problem: [
      "System inefficiencies",
      "Weak security controls",
      "Operational downtime",
    ],
    actionLabel: "What I Did",
    actions: [
      "Strengthened security monitoring",
      "Improved access control",
      "Optimized infrastructure",
      "Trained users",
    ],
    comparison: [
      { metric: "System downtime", before: "High", after: "Reduced by 15%" },
      { metric: "Security posture", before: "Basic", after: "Improved by 30%" },
      { metric: "Security incidents", before: "Frequent", after: "Reduced by 20%" },
      { metric: "User access control", before: "Loose", after: "Structured for 100+ users" },
    ],
    result: [
      "More stable systems",
      "Better security",
      "Improved user accountability",
    ],
    visuals: [
      "Network dashboard",
      "User access panel",
      "Monitoring interface",
    ],
  },
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Featured <span className="gold-gradient">Case Studies</span>
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Enterprise improvements built around traceability, reporting
            discipline, and operational coordination.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="card-surface rounded-[2rem] p-7 sm:p-8"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                    {study.company}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                    {study.title}
                  </h3>
                </div>
                {study.workflow ? (
                  <div className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Workflow:</span>{" "}
                    {study.workflow}
                  </div>
                ) : null}
              </div>

              <div className="mt-8 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  {study.context ? (
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                        Context
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {study.context}
                      </p>
                    </div>
                  ) : null}

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                      Problem
                    </p>
                    <div className="mt-4 space-y-3">
                      {study.problem.map((item) => (
                        <div key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                      {study.actionLabel}
                    </p>
                    <div className="mt-4 space-y-3">
                      {study.actions.map((item) => (
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

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-3xl border border-border bg-background/50">
                    <table className="w-full text-left">
                      <thead className="border-b border-border bg-background/60">
                        <tr>
                          <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                            Metric
                          </th>
                          <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                            Before
                          </th>
                          <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                            After
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {study.comparison.map((row) => (
                          <tr key={row.metric} className="border-b border-border last:border-b-0">
                            <td className="px-4 py-4 text-sm font-medium text-foreground">
                              {row.metric}
                            </td>
                            <td className="px-4 py-4 text-sm text-muted-foreground">
                              {row.before}
                            </td>
                            <td className="px-4 py-4 text-sm text-muted-foreground">
                              {row.after}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                      Result
                    </p>
                    <div className="mt-4 space-y-3">
                      {study.result.map((item) => (
                        <div key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                      Visual Placeholders
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {study.visuals.map((visual) => (
                        <div
                          key={visual}
                          className="rounded-2xl border border-border bg-background/60 p-4"
                        >
                          <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
                            Placeholder
                          </p>
                          <p className="mt-6 text-sm font-medium text-foreground">
                            {visual}
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="h-2 rounded-full bg-primary/20" />
                            <div className="h-2 w-4/5 rounded-full bg-border" />
                            <div className="h-2 w-3/5 rounded-full bg-border" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
