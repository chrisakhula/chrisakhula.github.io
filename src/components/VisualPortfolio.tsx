import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cleodev from "@/assets/cleodev.png";
import portraitArt from "@/assets/dev-cleophas01.jpg";

type VisualItem = {
  title: string;
  description: string;
  className: string;
  tag: string;
  kind?: "erp-dashboard" | "pos-analytics";
  image?: string;
};

const visualItems: VisualItem[] = [
  {
    title: "Original Portrait Treatment",
    description:
      "The illustrated portrait from the first portfolio now lives on as a creative signature asset.",
    className: "",
    tag: "Preserved",
    image: portraitArt,
  },
  {
    title: "Cleodev Brand Mark",
    description:
      "The first custom logo is retained as a personal mark inside the current site identity.",
    className: "",
    tag: "Preserved",
    image: cleodev,
  },
  {
    title: "ERP Dashboard",
    description:
      "A live ERP sales workspace translated into a portfolio-friendly dashboard preview.",
    className: "lg:col-span-2",
    tag: "Live System",
    kind: "erp-dashboard",
  },
  {
    title: "POS Analytics Screen",
    description:
      "A reporting workspace based on your POS analytics module, showing the sales and cashup views behind daily reconciliation.",
    className: "",
    tag: "Live System",
    kind: "pos-analytics",
  },
  {
    title: "Inventory System Panel",
    description: "Placeholder for warehouse and outlet visibility panels.",
    className: "",
    tag: "Placeholder",
  },
  {
    title: "Workflow Diagrams",
    description: "Placeholder for ERP and ICT process maps.",
    className: "",
    tag: "Placeholder",
  },
  {
    title: "Web App Screens",
    description: "Placeholder for responsive development work and interfaces.",
    className: "lg:col-span-2",
    tag: "Placeholder",
  },
];

const VisualPortfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderPreview = (item: VisualItem) => {
    if (item.kind === "erp-dashboard") {
      const quickActions = [
        "SmartPOS",
        "Cash Sales",
        "Credit Sales",
        "Sales Returns",
        "Deliveries",
        "Sales Orders",
      ];
      const railItems = ["Sales", "Stock", "Production", "Finance", "Reports"];

      return (
        <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-3">
          <div className="overflow-hidden rounded-[1.15rem] border border-primary/15 bg-[#eef2f5] shadow-inner shadow-black/5">
            <div className="flex items-center justify-between bg-[#005f8f] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90">
              <span>ERP Dashboard</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] tracking-[0.18em]">
                Sales Module
              </span>
            </div>
            <div className="grid gap-3 p-3 md:grid-cols-[140px_1fr]">
              <div className="space-y-2">
                {railItems.map((railItem) => (
                  <div
                    key={railItem}
                    className="rounded-xl border border-[#c1cad3] bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm shadow-black/5"
                  >
                    {railItem}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {quickActions.map((action) => (
                  <div
                    key={action}
                    className="min-h-[112px] rounded-2xl border border-[#c1cad3] bg-white p-4 shadow-sm shadow-black/5"
                  >
                    <div className="h-10 w-10 rounded-2xl bg-[#d8ebf3]" />
                    <p className="mt-8 text-sm font-medium text-slate-700">
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.kind === "pos-analytics") {
      const analyticsCards = [
        "Stock Analytics",
        "Sales Analytics",
        "Purchases Analytics",
        "Accounts Analytics",
        "Annual Analytics",
        "Transactions Dashboard",
        "Cashup Dashboard",
        "Lost Sales Analytics",
      ];

      return (
        <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-3">
          <div className="overflow-hidden rounded-[1.15rem] border border-primary/15 bg-[#eef2f5] shadow-inner shadow-black/5">
            <div className="flex items-center justify-between bg-[#005f8f] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90">
              <span>POS Analytics</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] tracking-[0.18em]">
                BI Analytics
              </span>
            </div>
            <div className="grid gap-3 p-3 xl:grid-cols-[108px_1fr]">
              <div className="space-y-2">
                {["Sales", "Stock", "Finance", "Reports"].map((railItem) => (
                  <div
                    key={railItem}
                    className="rounded-xl border border-[#c1cad3] bg-white px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm shadow-black/5"
                  >
                    {railItem}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {analyticsCards.map((card) => (
                  <div
                    key={card}
                    className={`rounded-2xl border p-4 shadow-sm shadow-black/5 ${
                      card === "Cashup Dashboard"
                        ? "border-[#00a5ec] bg-white ring-1 ring-[#00a5ec]/25"
                        : "border-[#c1cad3] bg-white"
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-2xl ${
                        card === "Sales Analytics"
                          ? "bg-[#efe3ff]"
                          : card === "Transactions Dashboard"
                            ? "bg-[#dcecff]"
                            : card === "Cashup Dashboard"
                              ? "bg-[#eeeeee]"
                              : "bg-[#e8edf1]"
                      }`}
                    />
                    <p className="mt-6 text-xs font-medium leading-relaxed text-slate-700">
                      {card}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.image) {
      return (
        <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-3">
          <div className="overflow-hidden rounded-[1.15rem] bg-white/95">
            <img
              src={item.image}
              alt={item.title}
              className={`w-full ${
                item.title === "Cleodev Brand Mark"
                  ? "h-52 object-contain p-8"
                  : "h-52 object-cover"
              }`}
            />
          </div>
        </div>
      );
    }

    return (
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
    );
  };

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
            A gallery that now mixes your original visual identity with the
            dashboards, workflows, and web interfaces behind the work.
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
                  {item.tag}
                </span>
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  Gallery
                </span>
              </div>
              {renderPreview(item)}
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
