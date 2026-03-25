import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Group ICT Manager",
    company: "Bantu Africa Resort & Bradegate Food Industries",
    period: "2021 – Present",
    achievements: [
      "Oversee ICT operations across multiple business units",
      "Implemented ERP systems reducing manual processes by 40%",
      "Led cybersecurity initiatives cutting incidents by 60%",
      "Managed a team of 5 IT professionals across 2 organizations",
    ],
  },
  {
    role: "ICT Officer",
    company: "Bantu Africa Resort",
    period: "2019 – 2021",
    achievements: [
      "Designed and deployed enterprise network infrastructure",
      "Maintained 99.5% system uptime across all departments",
      "Integrated POS and TIMS systems for revenue compliance",
      "Trained staff on digital tools, improving productivity by 25%",
    ],
  },
  {
    role: "ICT Intern",
    company: "State Department of Trade",
    period: "2018 – 2019",
    achievements: [
      "Supported network administration and user support",
      "Assisted in migrating legacy systems to modern platforms",
      "Documented IT processes and standard operating procedures",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gold-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A track record of delivering impact through technology leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="card-surface p-6">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {a}
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
