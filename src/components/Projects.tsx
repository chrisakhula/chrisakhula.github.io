import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Monitor, Store } from "lucide-react";

const projects = [
  {
    title: "Bantu Africa Resort ICT Systems",
    description:
      "Centralized ICT operations across departments improving reliability and coordination.",
    icon: Building2,
  },
  {
    title: "Bradegate Food Industries ERP Systems",
    description:
      "Designed structured workflows for inventory, production, and distribution.",
    icon: Store,
  },
  {
    title: "POS and Retail Systems",
    description:
      "Integrated sales and inventory processes for better tracking and reporting.",
    icon: ArrowRight,
  },
  {
    title: "Web Development Projects",
    description:
      "Built responsive platforms focused on speed and usability.",
    icon: Monitor,
  },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Selected <span className="gold-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A concise view of the environments and systems I have helped shape.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface group rounded-3xl p-6"
            >
              <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                <project.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
