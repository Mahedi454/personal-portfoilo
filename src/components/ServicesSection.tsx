import { motion } from "framer-motion";
import { Code, Globe, Layout, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Business websites, landing pages, and web interfaces built with a clean responsive front end.",
    price: "From $500",
    features: ["React / Next.js", "Responsive Design", "API Integration", "Performance Optimized"],
  },
  {
    icon: Layout,
    title: "WordPress Solutions",
    description: "WordPress websites that are easier to manage, easier to update, and matched to your brand.",
    price: "From $300",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "SEO Optimized"],
  },
  {
    icon: Smartphone,
    title: "App Design Support",
    description: "Mobile-focused UI work and product flow planning for app-based projects.",
    price: "From $800",
    features: ["Flutter / Dart", "UI Structure", "iOS & Android", "Clear User Flow"],
  },
  {
    icon: Code,
    title: "UI/UX Design",
    description: "UI design for dashboards, admin panels, and landing pages with a more practical visual system.",
    price: "From $250",
    features: ["Figma Design", "Wireframing", "Prototyping", "Design Systems"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-shell"
      >
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">
            Services built for a <span className="text-gradient">clear and professional digital presence</span>.
          </h2>
          <p className="section-copy">
            Most of my work is around websites, WordPress, UI design, and front-end development for small businesses and personal brands.
          </p>
        </div>
      </motion.div>

      <div className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="pro-card group rounded-[1.75rem] p-5 sm:p-6"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/18">
              <service.icon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mb-2 text-base font-bold">{service.title}</h3>
            <p className="mb-5 text-sm leading-6 text-muted-foreground">{service.description}</p>

            <p className="mb-4 text-lg font-bold text-primary">{service.price}</p>

            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
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
