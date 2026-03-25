import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Globe, Users, Lightbulb, BookOpen } from "lucide-react";

const skillGroups = [
  { icon: Server, title: "ICT Infrastructure", desc: "Network design, server admin, and system optimization" },
  { icon: Shield, title: "Cybersecurity", desc: "Security audits, threat mitigation, data protection" },
  { icon: Globe, title: "Web Development", desc: "PHP, Django, modern frontend frameworks" },
  { icon: Lightbulb, title: "ERP Systems", desc: "Maliplus, POS integration, TIMS compliance" },
  { icon: Users, title: "Leadership", desc: "Team management, stakeholder engagement, training" },
  { icon: BookOpen, title: "Problem Solving", desc: "Process optimization, strategic planning" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gold-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            From a curious tech enthusiast in Kenya to leading ICT operations across multiple 
            organizations — my journey has been driven by a passion for using technology to 
            solve real business problems. I specialize in designing and managing ICT systems 
            that improve efficiency, reduce costs, and drive growth. Whether it's implementing 
            ERP solutions, securing networks, or building digital strategies, I bring a 
            results-focused approach to every challenge.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-6 transition-all duration-300"
            >
              <skill.icon className="text-primary mb-3" size={28} />
              <h3 className="font-display font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
