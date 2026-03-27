import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Briefcase, Code2, Layers3 } from "lucide-react";

const skillGroups = [
  {
    icon: Layers3,
    title: "Core",
    items: [
      "ERP Implementation and Optimization",
      "Business Process Mapping",
      "Inventory and Warehouse Systems",
      "POS Systems",
      "ICT Infrastructure",
      "Cybersecurity Monitoring",
    ],
  },
  {
    icon: Code2,
    title: "Development",
    items: ["PHP (Learning)", "Django", "React", "HTML, CSS"],
  },
  {
    icon: Briefcase,
    title: "Professional",
    items: [
      "Leadership",
      "System Thinking",
      "Process Improvement",
      "Training and Support",
    ],
  },
];

const learningGoals = [
  "Build real tools with PHP",
  "Improve my development workflow",
  "Document the journey through practical projects",
];

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Skills <span className="gold-gradient">& Learning</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A blend of ERP thinking, ICT operations, and practical development
            skills built around business needs.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-surface rounded-3xl p-6"
            >
              <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                <group.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="card-surface rounded-3xl p-7">
            <div className="flex items-center gap-2">
              <BookOpen className="text-primary" size={20} />
              <h3 className="font-display text-xl font-semibold">
                Currently Learning
              </h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I am currently focused on backend development using PHP.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The goal is simple: build real tools, improve my development
              workflow, and document the journey through practical projects.
            </p>
          </div>

          <div className="card-surface rounded-3xl p-7">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Learning Goals
            </p>
            <div className="mt-5 space-y-4">
              {learningGoals.map((goal) => (
                <div key={goal} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
