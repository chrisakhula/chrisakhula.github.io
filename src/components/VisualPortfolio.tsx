import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const visualItems = [
  {
    title: "ERP Dashboard",
    description: "Placeholder for stock, movement, and reporting views.",
    className: "lg:col-span-2",
  },
  {
    title: "POS Analytics Screen",
    description: "Placeholder for daily sales and reconciliation insights.",
    className: "",
  },
  {
    title: "Inventory System Panel",
    description: "Placeholder for warehouse and outlet visibility panels.",
    className: "",
  },
  {
    title: "Workflow Diagrams",
    description: "Placeholder for ERP and ICT process maps.",
    className: "",
  },
  {
    title: "Web App Screens",
    description: "Placeholder for responsive development work and interfaces.",
    className: "lg:col-span-2",
  },
];

const VisualPortfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visual-portfolio" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Visual <span className="gold-gradient">Portfolio</span>
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A placeholder gallery for dashboards, workflow diagrams, and web
            application screens.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visualItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`card-surface min-h-[260px] rounded-[2rem] p-6 ${item.className}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  Placeholder
                </span>
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  Gallery
                </span>
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
                </div>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  <div className="col-span-1 h-28 rounded-2xl bg-background/70" />
                  <div className="col-span-3 space-y-2">
                    <div className="h-8 rounded-2xl bg-primary/10" />
                    <div className="h-8 rounded-2xl bg-background/70" />
                    <div className="h-8 rounded-2xl bg-background/55" />
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 rounded-full bg-border" />
                  <div className="h-2 w-4/5 rounded-full bg-border" />
                  <div className="h-2 w-3/5 rounded-full bg-border" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualPortfolio;
