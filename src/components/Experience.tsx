import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Group ICT Manager",
    company: "Bantu Africa Resort Ltd & Bradegate Food Industries Ltd",
    period: "Jan 2025 - Present",
    emphasis: true,
    achievements: [
      "Lead ICT and ERP operations across hospitality, food processing, retail, and fast-food units.",
      "Align systems with finance, inventory, sales, production, and reporting needs.",
      "Support ERP workflows, POS systems, ICT infrastructure, and digital reporting.",
      "Improve operational efficiency through structured systems and process documentation.",
      "Coordinate ICT support, system adoption, access control, and user training.",
    ],
  },
  {
    role: "ICT Officer",
    company: "Bantu Africa Resort Ltd",
    period: "Previous Role",
    emphasis: false,
    achievements: [
      "Managed ICT infrastructure, systems, users, and support requests.",
      "Supported POS, reporting, network, and security systems.",
      "Improved access control, monitoring, and ICT service reliability.",
      "Assisted teams in using systems more effectively.",
    ],
  },
  {
    role: "ICT Intern",
    company: "State Department of Trade, KIBT",
    period: "Internship",
    emphasis: false,
    achievements: [
      "Supported system maintenance and network operations.",
      "Assisted in security testing and monitoring.",
      "Contributed to improved system stability and operational support.",
    ],
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="border-b border-white/5 py-24 lg:py-32">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Experience <span className="gold-gradient italic">& Expertise</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A track record of driving operational efficiency through ERP
            integration, strategic ICT leadership, and robust system
            architecture.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <h3 className="font-display text-3xl font-semibold">
              Work <span className="text-primary italic">Experience</span>
            </h3>
          </div>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-1 top-2 w-px bg-gradient-to-b from-primary to-transparent" />
            <div className="space-y-14">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-[34px] top-2 h-3 w-3 rounded-full border-4 border-background ${
                      exp.emphasis ? "bg-primary" : "bg-muted-foreground"
                    }`}
                  />
                  <div className="card-surface rounded-xl p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h4>
                        <p className="mt-1 font-medium text-primary">
                          {exp.company}
                        </p>
                      </div>
                      <span className="w-fit rounded-full bg-secondary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex gap-3">
                          <CheckCircle2
                            className={exp.emphasis ? "text-primary" : "text-muted-foreground"}
                            size={17}
                          />
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
