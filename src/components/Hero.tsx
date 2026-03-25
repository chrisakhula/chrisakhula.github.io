import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "50+", label: "Systems Managed" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
              Group ICT Manager
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cleophas{" "}
              <span className="gold-gradient">Ouma</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Tech enthusiast and digital strategist driving operational efficiency 
              through ERP systems, ICT infrastructure, and innovative digital solutions 
              across East Africa.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-muted-foreground px-6 py-3 rounded-lg font-medium hover:text-primary transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                >
                  <p className="text-3xl font-bold text-primary font-display">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-primary">CO</span>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-0 right-8 w-3 h-3 rounded-full bg-primary/60" />
              <div className="absolute bottom-8 left-0 w-2 h-2 rounded-full bg-primary/40" />
              <div className="absolute top-20 right-0 w-2 h-2 rounded-full bg-primary/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
