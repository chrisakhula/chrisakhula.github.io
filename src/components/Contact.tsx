import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "ouma.cleo@gmail.com",
    href: "mailto:ouma.cleo@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "0720671479",
    href: "tel:+254720671479",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cleophas-tech",
    href: "https://www.linkedin.com/in/cleophas-tech/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/chrisakhula",
    href: "https://github.com/chrisakhula",
    icon: Github,
  },
];

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Contact <span className="gold-gradient">Me</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">Let&apos;s work.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface rounded-3xl p-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Collaboration
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">
              Focused on systems that actually work.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I work best on ERP workflows, ICT operations, reporting
              improvement, user support, and process-driven system upgrades.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:ouma.cleo@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Email Me <ArrowRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/cleophas-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Open LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={
                  method.label === "Email" || method.label === "Phone"
                    ? undefined
                    : "_blank"
                }
                rel={
                  method.label === "Email" || method.label === "Phone"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="card-surface rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <method.icon size={20} />
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.24em] text-primary">
                  {method.label}
                </p>
                <p className="mt-3 break-all text-sm leading-relaxed text-muted-foreground">
                  {method.value}
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
