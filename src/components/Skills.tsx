import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, BriefcaseBusiness, Database, Globe2, Megaphone, Network } from "lucide-react";

const skillSections = [
  {
    icon: Database,
    title: "ICT and Systems",
    items: [
      "ERP Implementation and Optimization",
      "POS Systems Management",
      "Inventory and Warehouse Systems",
      "Business Process Mapping",
      "ICT Infrastructure Management",
      "CCTV and Security Monitoring",
      "Access Control and User Management",
      "Backup and Disaster Recovery Planning",
      "Technical Support and Troubleshooting",
      "Documentation and SOP Development",
    ],
  },
  {
    icon: Globe2,
    title: "Web and Development",
    items: [
      "PHP, currently learning and building practical tools",
      "Django",
      "React",
      "Next.js",
      "HTML and CSS",
      "Git and GitHub",
      "cPanel deployment workflows",
      "Website planning and SEO structure",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital and Brand Growth",
    items: [
      "Digital Marketing Strategy",
      "Social Media Content Planning",
      "Hospitality Marketing",
      "Brand Positioning",
      "Poster and Campaign Concept Development",
      "Website Copywriting",
      "SEO Content Structuring",
      "Portfolio and Service Page Development",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Strengths",
    items: [
      "Leadership",
      "Systems Thinking",
      "Process Improvement",
      "Team Training",
      "Problem Solving",
      "Business Communication",
      "Operational Planning",
      "Cross-department Coordination",
    ],
  },
];

const learningGoals = [
  "Build practical business tools with PHP",
  "Improve backend development workflows",
  "Document real projects while learning",
];

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="border-b border-white/5 py-24 lg:py-32">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Skills <span className="gold-gradient italic">& Capabilities</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A practical blend of ICT operations, ERP workflows, POS systems, web
            development, digital reporting, and brand growth.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-surface rounded-xl p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <section.icon className="text-primary" size={23} />
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-secondary/70 px-4 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="card-surface rounded-xl p-7"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="text-primary" size={22} />
              <h3 className="text-xl font-bold">Current Learning Focus</h3>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I am currently strengthening my backend development skills using
              PHP, with a focus on building practical business tools, improving
              my development workflow, and documenting the learning journey
              through real projects.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              My goal is to keep growing as a systems professional who can not
              only manage technology, but also build tools that solve real
              operational problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {learningGoals.map((goal) => (
                <span
                  key={goal}
                  className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
                >
                  {goal}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="gold-glow rounded-xl bg-primary p-7 text-primary-foreground"
          >
            <Network size={30} />
            <div className="mt-16">
              <p className="font-display text-6xl font-bold">100+</p>
              <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.24em] opacity-80">
                Users supported
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
