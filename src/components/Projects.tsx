import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ERP Implementation & Optimization",
    problem: "Manual processes causing data inconsistencies and slow reporting across departments.",
    solution: "Deployed and customized Maliplus ERP with POS and TIMS integration for seamless operations.",
    tools: ["Maliplus ERP", "POS Systems", "TIMS", "SQL"],
    impact: "40% reduction in reporting time, improved inventory accuracy by 35%.",
  },
  {
    title: "Bantu Africa Resort — ICT Systems",
    problem: "Fragmented IT infrastructure with frequent downtime and security vulnerabilities.",
    solution: "Redesigned network architecture, implemented centralized monitoring, and deployed security protocols.",
    tools: ["MikroTik", "Ubiquiti", "Windows Server", "CCTV"],
    impact: "99.5% uptime achieved, 60% reduction in security incidents.",
  },
  {
    title: "Bradegate Food Industries — Systems",
    problem: "Disconnected systems across production, sales, and logistics departments.",
    solution: "Integrated ERP modules with production planning and automated stock management workflows.",
    tools: ["Maliplus ERP", "Networking", "Database Management"],
    impact: "Streamlined operations across 3 departments, saving 20+ hours/week.",
  },
  {
    title: "Website Development Projects",
    problem: "Clients lacking online presence and digital customer engagement channels.",
    solution: "Designed and developed responsive business websites with SEO optimization and analytics.",
    tools: ["PHP", "WordPress", "HTML/CSS", "JavaScript"],
    impact: "Increased client web traffic by 150%, improved lead generation.",
  },
  {
    title: "Digital Marketing Campaigns",
    problem: "Low brand visibility and poor social media engagement for hospitality clients.",
    solution: "Created data-driven marketing strategies with targeted content and paid campaigns.",
    tools: ["Google Ads", "Meta Business", "Analytics", "Canva"],
    impact: "200% increase in social engagement, 45% growth in bookings.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gold-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Real-world solutions that delivered measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-6 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-lg pr-4">{project.title}</h3>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">Impact</p>
                  <p className="text-sm text-foreground font-medium">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
