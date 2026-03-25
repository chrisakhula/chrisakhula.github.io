import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cleophas transformed our entire IT infrastructure. His strategic approach to ERP implementation saved us countless hours and improved our bottom line significantly.",
    name: "Management Team",
    role: "Bantu Africa Resort",
  },
  {
    quote: "His ability to understand business needs and translate them into technical solutions is remarkable. The systems he put in place continue to drive efficiency across our operations.",
    name: "Operations Director",
    role: "Bradegate Food Industries",
  },
  {
    quote: "A true professional who combines technical expertise with excellent communication. Cleophas always delivers beyond expectations.",
    name: "Business Partner",
    role: "Web Development Client",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            What People <span className="gold-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Feedback from colleagues and clients I've had the privilege to work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-6"
            >
              <Quote className="text-primary/30 mb-4" size={28} />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
