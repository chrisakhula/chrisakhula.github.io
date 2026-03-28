import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cleodev from "@/assets/cleodev.png";
import portraitArt from "@/assets/dev-cleophas01.jpg";

type VisualItem = {
  title: string;
  description: string;
  className: string;
  tag: string;
  kind?: "erp-dashboard" | "pos-analytics" | "inventory-panel" | "web-app";
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
    className: "lg:col-span-2",
    tag: "Live System",
    kind: "pos-analytics",
  },
  {
    title: "Inventory System Panel",
    description:
      "A stock control workspace inspired by your inventory dashboard, combining filters, movement options, and live item visibility.",
    className: "lg:col-span-2",
    tag: "Live System",
    kind: "inventory-panel",
  },
  {
    title: "Workflow Diagrams",
    description: "Placeholder for ERP and ICT process maps.",
    className: "",
    tag: "Placeholder",
  },
  {
    title: "Web App Screens",
    description:
      "A responsive hospitality landing page inspired by your Bantu Africa Resort web build, with strong branding, hero messaging, and booking calls to action.",
    className: "lg:col-span-2",
    tag: "Live Build",
    kind: "web-app",
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
            <div className="grid gap-3 p-3 lg:grid-cols-[108px_1fr]">
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
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                    <p className="mt-5 text-[11px] font-medium leading-relaxed text-slate-700">
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

    if (item.kind === "inventory-panel") {
      const sideActions = [
        "Item Stock",
        "Stock Balances",
        "Order Processing",
        "Item Summary",
      ];
      const filters = ["Refresh", "Confirm +ve Stocks", "Stock Movement", "Online"];
      const headers = [
        "Item Code",
        "Item Name",
        "Pack",
        "Opening",
        "Closing",
        "Available",
      ];
      const rows = [
        ["KAH011", "Honey 500g", "EAC", "5.62", "5.35", "5.35"],
        ["RES-32", "Cappuccino Single", "EAC", "101.0", "114.0", "114.0"],
        ["RES140", "Black Tea", "EAC", "48.0", "62.0", "62.0"],
        ["RES146", "Pepsi PET 330ML", "EAC", "131.0", "125.0", "125.0"],
      ];

      return (
        <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-3">
          <div className="overflow-hidden rounded-[1.15rem] border border-primary/15 bg-[#eff3f6] shadow-inner shadow-black/5">
            <div className="flex items-center justify-between bg-[#005f8f] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90">
              <span>Stock Levels Dashboard</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] tracking-[0.18em]">
                Inventory Control
              </span>
            </div>
            <div className="grid gap-3 p-3 xl:grid-cols-[110px_1fr]">
              <div className="space-y-2">
                {sideActions.map((action, index) => (
                  <div
                    key={action}
                    className={`rounded-xl border px-3 py-3 text-[11px] font-medium shadow-sm shadow-black/5 ${
                      index === 1
                        ? "border-[#6aa0b1] bg-[#4c93aa] text-white"
                        : "border-[#c1cad3] bg-white text-slate-700"
                    }`}
                  >
                    {action}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter, index) => (
                    <div
                      key={filter}
                      className={`rounded-xl border px-3 py-2 text-[11px] font-medium shadow-sm shadow-black/5 ${
                        index === 3
                          ? "border-[#c1cad3] bg-white text-slate-700"
                          : "border-[#c1cad3] bg-white text-slate-700"
                      }`}
                    >
                      {filter}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-[#c1cad3] bg-white p-3 shadow-sm shadow-black/5">
                  <div className="flex flex-wrap gap-2">
                    {["Sales", "Purchases", "Transfers", "Adjustments", "Production"].map(
                      (section) => (
                        <span
                          key={section}
                          className="rounded-full border border-[#c1cad3] bg-[#f5f7f9] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600"
                        >
                          {section}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#c1cad3] bg-white shadow-sm shadow-black/5">
                  <div className="grid bg-[#ece7db] text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 xl:grid-cols-[0.9fr_1.4fr_0.7fr_0.75fr_0.75fr_0.8fr]">
                    {headers.map((header) => (
                      <div key={header} className="border-r border-white/60 px-3 py-2 last:border-r-0">
                        {header}
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#b9ffb6]">
                    {rows.map((row, rowIndex) => (
                      <div
                        key={row.join("-")}
                        className={`grid text-[11px] text-slate-700 xl:grid-cols-[0.9fr_1.4fr_0.7fr_0.75fr_0.75fr_0.8fr] ${
                          rowIndex !== rows.length - 1 ? "border-b border-white/40" : ""
                        }`}
                      >
                        {row.map((cell) => (
                          <div key={cell} className="border-r border-white/40 px-3 py-2 last:border-r-0">
                            {cell}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.kind === "web-app") {
      const links = ["Home", "Rooms", "Dining", "Experiences", "Menu", "Contact"];

      return (
        <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-3">
          <div className="overflow-hidden rounded-[1.15rem] border border-primary/15 bg-[#162537] shadow-inner shadow-black/10">
            <div className="relative min-h-[320px] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,27,0.2),rgba(8,16,27,0.68)),radial-gradient(circle_at_top_left,rgba(255,194,52,0.18),transparent_22%),linear-gradient(135deg,#27435c_0%,#31435d_24%,#8a5f38_54%,#34502f_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(8,16,27,0.45)_35%,rgba(12,28,16,0.82))]" />
              <div className="absolute left-[8%] top-[12%] h-[48%] w-[18%] rounded-t-[2rem] rounded-b-lg bg-[#a97a41]/65 shadow-2xl shadow-black/25" />
              <div className="absolute left-[24%] top-[7%] h-[52%] w-[18%] rounded-t-[2.5rem] rounded-b-lg bg-[#c8a25f]/55 shadow-2xl shadow-black/25" />
              <div className="absolute left-[38%] top-[14%] h-[43%] w-[16%] rounded-t-[1.5rem] rounded-b-lg bg-[#6d2f28]/70 shadow-2xl shadow-black/25" />
              <div className="absolute right-[12%] top-[24%] h-[36%] w-[23%] rounded-t-[1.5rem] rounded-b-lg bg-[#48261f]/70 shadow-2xl shadow-black/25" />
              <div className="absolute bottom-[12%] left-[6%] h-16 w-16 rounded-full bg-[#75c3da]/55 blur-sm" />
              <div className="absolute bottom-[14%] left-[2%] right-[2%] h-[15%] rounded-[2rem] bg-[#132718]/55" />

              <div className="relative z-10 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f2b919] bg-[#203752]/85 text-xs font-semibold uppercase tracking-[0.18em] text-[#f2b919]">
                      BA
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-[#f2b919]">
                        Bantu
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#f2b919]/80">
                        Africa Resort
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-4 lg:flex">
                    {links.map((link) => (
                      <span
                        key={link}
                        className={`text-xs font-medium ${
                          link === "Home" ? "text-[#f2b919]" : "text-white/85"
                        }`}
                      >
                        {link}
                      </span>
                    ))}
                    <span className="rounded-xl bg-[#f2b919] px-3 py-2 text-xs font-semibold text-[#162537]">
                      Book Now
                    </span>
                  </div>
                </div>

                <div className="mx-auto mt-14 max-w-2xl text-center sm:mt-16">
                  <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#f2b919]">
                    Nyeri County, Kenya
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-none text-white sm:text-5xl">
                    Welcome to Bantu Africa Resort
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#f4d48f] sm:text-base">
                    A hospitality landing page that balances resort branding,
                    clear navigation, and direct booking action.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <span className="rounded-xl bg-[#f2b919] px-4 py-2 text-sm font-semibold text-[#162537]">
                      Book Your Stay
                    </span>
                    <span className="rounded-xl border border-[#f2b919] px-4 py-2 text-sm font-semibold text-[#f2b919]">
                      Explore the Resort
                    </span>
                  </div>
                </div>
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
