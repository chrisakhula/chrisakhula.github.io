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
    title: "ERP Central Store Workflow",
    context:
      "Bradegate Food Industries needed a cleaner way to control finished goods from production to storage, distribution, and retail outlets.",
    problem: [
      "Finished goods needed a controlled movement path",
      "Production, stores, distribution, and accounts needed better coordination",
      "Stock receiving, issuing, returns, and reporting required clearer SOPs",
    ],
    actionLabel: "Key Contributions",
    actions: [
      "Helped define ERP inventory movement workflows",
      "Supported central store control for finished goods",
      "Improved coordination between production, stores, distribution, and accounts",
      "Worked on SOP structures for stock receiving, issuing, returns, and reporting",
      "Supported cleaner stock visibility and stronger accountability",
    ],
    comparison: [
      { metric: "Stock movement", before: "Loosely controlled", after: "Structured path" },
      { metric: "Store visibility", before: "Fragmented", after: "Cleaner accountability" },
      { metric: "Reporting structure", before: "Inconsistent", after: "Improved" },
      { metric: "Operational scale", before: "Harder to coordinate", after: "Stronger foundation" },
    ],
    result: [
      "Better control over stock movement",
      "Improved reporting structure",
      "Stronger foundation for scaling food production and distribution operations",
    ],
    visuals: [
      "ERP inventory dashboard",
      "Stock movement tracking screen",
      "Central store workflow map",
    ],
    workflow: "Production / Central Store / Distribution / Retail / Reporting",
  },
  {
    company: "Bantu Africa Resort and Bradegate Pizza",
    title: "POS and Inventory Integration",
    context:
      "Sales and stock need to speak the same language. I worked on POS and inventory workflows that help connect daily sales activity with stock movement and reporting.",
    problem: [
      "Daily sales activity needed clearer connection to stock movement",
      "Sales, stock, and accounts required stronger reconciliation discipline",
      "Staff needed practical system support and reporting routines",
    ],
    actionLabel: "Key Contributions",
    actions: [
      "Supported POS operations across hospitality and fast-food environments",
      "Improved daily sales reconciliation workflows",
      "Linked sales activity with inventory tracking",
      "Trained staff on system use and reporting discipline",
      "Helped reduce inconsistencies between sales, stock, and accounts",
    ],
    comparison: [
      { metric: "Sales-to-stock alignment", before: "Disconnected", after: "Clearer connection" },
      { metric: "Daily reconciliation", before: "Slower", after: "Improved workflow" },
      { metric: "Reporting discipline", before: "Uneven", after: "Stronger routines" },
      { metric: "Operational accountability", before: "Limited", after: "Improved" },
    ],
    result: [
      "Clearer sales-to-stock alignment",
      "Faster decision-making",
      "Improved operational accountability",
    ],
    visuals: [
      "POS dashboard",
      "Sales analytics screen",
      "Inventory consumption report",
    ],
  },
  {
    company: "Bantu Africa Resort",
    title: "ICT Infrastructure Optimization",
    context:
      "Bantu Africa Resort depends on stable systems for accommodation, restaurants, conferencing, security, guest services, and administration.",
    problem: [
      "Daily resort operations needed stable ICT support",
      "System access control and monitoring needed strengthening",
      "Network, CCTV, and user support needed faster response",
    ],
    actionLabel: "Key Contributions",
    actions: [
      "Managed ICT infrastructure and user support",
      "Strengthened system access control and monitoring",
      "Supported CCTV, network reliability, and troubleshooting",
      "Improved user awareness on ICT security and system use",
      "Helped reduce downtime through maintenance and faster response",
    ],
    comparison: [
      { metric: "ICT stability", before: "Reactive", after: "More dependable" },
      { metric: "Access control", before: "Less structured", after: "Improved monitoring" },
      { metric: "User awareness", before: "Limited", after: "Improved" },
      { metric: "Support response", before: "Slower", after: "Faster maintenance cycle" },
    ],
    result: [
      "More stable ICT operations",
      "Improved user accountability",
      "Better support for daily resort operations",
    ],
    visuals: [
      "Network dashboard",
      "User access panel",
      "Monitoring interface",
    ],
  },
  {
    company: "Digital Presence and Service Brands",
    title: "Website and Digital Presence Development",
    context:
      "Beyond internal systems, I build and support digital platforms that help brands present themselves professionally online.",
    problem: [
      "Service brands needed clearer website structure and presentation",
      "Hospitality and service pages needed stronger SEO-focused content",
      "Digital visibility needed practical systems for content and campaigns",
    ],
    actionLabel: "Key Contributions",
    actions: [
      "Planned website content structures for hospitality and service brands",
      "Built portfolio workflows using GitHub, React/Next.js, and cPanel deployment",
      "Structured SEO-focused service page content",
      "Wrote website copy for Bantu Africa Resort, ARS, and other service organizations",
      "Developed the chrisakhula brand around websites, branding, poster design, SEO, and digital marketing",
    ],
    comparison: [
      { metric: "Brand presentation", before: "Less structured", after: "More professional" },
      { metric: "Online visibility", before: "Limited", after: "Improved foundation" },
      { metric: "Content structure", before: "Unclear", after: "SEO-focused sections" },
      { metric: "Digital workflow", before: "Manual", after: "Practical publishing process" },
    ],
    result: [
      "Better online visibility",
      "Stronger brand presentation",
      "Practical digital platforms that support marketing and customer engagement",
    ],
    visuals: [
      "Hospitality website screen",
      "Service page structure",
      "Brand campaign concepts",
    ],
  },
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="border-b border-white/5 py-24 lg:py-32">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Strategic Implementations
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Featured <span className="gold-gradient italic">Case Studies</span>
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
              className="card-surface overflow-hidden rounded-xl p-7 sm:p-8"
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
                  <div className="rounded-sm border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
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
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-background/50">
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
                            <td className="px-4 py-4 text-sm font-bold text-primary">
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
                      Visual Assets
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {study.visuals.map((visual) => (
                        <div
                          key={visual}
                          className="surface-line rounded-sm border p-4"
                        >
                          <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
                            Planned view
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
