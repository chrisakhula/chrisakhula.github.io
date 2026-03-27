import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Group ICT Manager",
    company: "Bantu Africa Resort Ltd & Bradegate Food Industries",
    period: "Jan 2025 - Present",
    achievements: [
      "Lead ERP and ICT operations across multiple units",
      "Align systems with finance, inventory, and reporting",
      "Drive operational efficiency through digital workflows",
    ],
  },
  {
    role: "ICT Officer",
    company: "Bantu Africa Resort Ltd",
    achievements: [
      "Managed ICT infrastructure and systems",
      "Improved security and operational workflows",
      "Supported POS and reporting systems",
    ],
  },
  {
    role: "ICT Intern",
    company: "State Department of Trade (KIBT)",
    achievements: [
      "Supported network and system maintenance",
      "Assisted in security testing and monitoring",
    ],
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Work <span className="gold-gradient">Experience</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Roles that built my approach to ERP operations, ICT support, and
            practical systems leadership.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-8" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-background bg-primary md:left-6.5" />

                <div className="card-surface rounded-3xl p-6">
                  <div className="mb-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                    {exp.period ? (
                      <span className="text-xs font-medium text-primary">
                        {exp.period}
                      </span>
                    ) : null}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
