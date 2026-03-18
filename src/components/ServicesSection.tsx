import { motion } from "framer-motion";
import { Globe, Smartphone, Layout, Code } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks. From SPAs to full-stack solutions.",
    price: "From $500",
    features: ["React / Next.js", "Responsive Design", "API Integration", "Performance Optimized"],
  },
  {
    icon: Layout,
    title: "WordPress Solutions",
    description: "Custom themes, plugins, and complete WordPress websites tailored to your brand.",
    price: "From $300",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "SEO Optimized"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with Flutter for iOS and Android.",
    price: "From $800",
    features: ["Flutter / Dart", "iOS & Android", "Push Notifications", "App Store Deploy"],
  },
  {
    icon: Code,
    title: "UI/UX Design",
    description: "User-centered design with wireframes, prototypes, and pixel-perfect interfaces.",
    price: "From $250",
    features: ["Figma Design", "Wireframing", "Prototyping", "Design Systems"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">What I Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
          My <span className="text-gradient">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="glass-card rounded-xl p-6 group gradient-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
              <service.icon className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-base font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

            <p className="text-lg font-bold text-primary mb-4">{service.price}</p>

            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
