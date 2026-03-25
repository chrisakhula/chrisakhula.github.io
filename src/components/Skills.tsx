import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wifi, Server, Shield, Database, Globe, Code,
  Monitor, Settings, BookOpen, Zap,
} from "lucide-react";

const skills = [
  { icon: Wifi, name: "Networking", level: 90 },
  { icon: Server, name: "System Administration", level: 85 },
  { icon: Shield, name: "Cybersecurity", level: 80 },
  { icon: Settings, name: "ERP Systems", level: 90 },
  { icon: Globe, name: "Web Development", level: 75 },
  { icon: Database, name: "Database Management", level: 80 },
  { icon: Monitor, name: "IT Support", level: 90 },
  { icon: Code, name: "PHP & Django", level: 65 },
  { icon: Zap, name: "Digital Marketing", level: 75 },
];

const currentlyLearning = [
  { name: "Advanced PHP", progress: 60 },
  { name: "Cloud Architecture", progress: 40 },
  { name: "Python Automation", progress: 50 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gold-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Core competencies built through years of hands-on experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-surface p-5 flex items-center gap-4"
            >
              <skill.icon className="text-primary shrink-0" size={24} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-1.5">{skill.name}</p>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-primary" size={20} />
            <h3 className="font-display text-xl font-semibold">Currently Learning</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {currentlyLearning.map((item) => (
              <div key={item.name} className="card-surface p-5">
                <p className="text-sm font-medium mb-3">{item.name}</p>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/60"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{item.progress}% complete</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
