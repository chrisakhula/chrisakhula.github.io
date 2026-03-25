import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Every SME in Kenya Needs an ERP System",
    excerpt: "Exploring how enterprise resource planning can transform small and medium businesses in East Africa.",
    date: "Coming Soon",
  },
  {
    title: "My Journey into PHP Development",
    excerpt: "Lessons learned transitioning from IT management to hands-on web development.",
    date: "Coming Soon",
  },
  {
    title: "Cybersecurity Essentials for African Businesses",
    excerpt: "Practical tips to protect your organization from the most common digital threats.",
    date: "Coming Soon",
  },
];

const Blog = () => {
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
            Blog <span className="gold-gradient">& Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Thoughts on technology, leadership, and the African tech ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-6 group cursor-pointer transition-all duration-300"
            >
              <span className="text-xs text-primary font-medium">{post.date}</span>
              <h3 className="font-display font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="text-sm text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
