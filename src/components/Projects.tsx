import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Globe2, Megaphone, Network } from "lucide-react";

const services = [
  {
    title: "Business Systems and ERP Support",
    description:
      "I help businesses structure their operations through better ERP workflows, stock control, reporting systems, and user adoption.",
    icon: Database,
  },
  {
    title: "ICT Infrastructure Support",
    description:
      "I support networks, systems, CCTV, user access, backups, troubleshooting, and ICT operations for growing businesses.",
    icon: Network,
  },
  {
    title: "Website Design and Development",
    description:
      "I create clean, professional websites for businesses, personal brands, hospitality brands, and service providers.",
    icon: Globe2,
  },
  {
    title: "Digital Marketing and Brand Visibility",
    description:
      "I help brands communicate better online through content planning, poster concepts, social media strategy, SEO copy, and campaign structure.",
    icon: Megaphone,
  },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="border-b border-white/5 py-24 lg:py-32">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
            Portfolio <span className="gold-gradient italic">Services</span>
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Practical support where business operations, ICT systems, web
            platforms, and digital visibility meet.
          </p>
        </motion.div>

        <div className="mt-12 grid border-y border-border/70 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-border/70 py-8 pr-0 last:border-b-0 md:px-6 lg:border-r lg:even:border-r-0 lg:last:border-b-0"
            >
              <div className="inline-flex rounded-sm border border-primary/20 bg-primary/10 p-3 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 max-w-md font-display text-2xl font-semibold leading-tight transition-colors group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
