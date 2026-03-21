import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Scene3D from "./Scene3D";

const HomeSection = () => {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-28 pb-16 sm:px-8 lg:px-12">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      <div className="absolute inset-0 bg-background/34" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--background)/0.08),transparent_30%),radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.10),transparent_24%),linear-gradient(180deg,hsl(var(--background)/0.18)_0%,hsl(var(--background)/0.50)_56%,hsl(var(--background)/0.82)_100%)]" />
      <div className="hero-orb left-[-12rem] top-20 h-72 w-72 bg-[var(--hero-orb-a)]" />
      <div className="hero-orb bottom-8 right-[-10rem] h-80 w-80 bg-[var(--hero-orb-b)]" />
      <div className="mesh-bg absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-shell relative min-h-[calc(100vh-7rem)] items-center py-10">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles size={14} />
            Full-Stack Developer and UI Designer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            Building premium digital products with a clean visual edge.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            I design and develop high-performing websites, apps, and product interfaces
            that help brands look credible, feel modern, and convert with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="button-primary">
              Let&apos;s Work Together
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="button-secondary">
              View Case Studies
            </a>
            <a href="#contact" className="button-secondary">
              <Download size={16} />
              Request Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {[
              { value: "4+", label: "Years building products" },
              { value: "20+", label: "Projects delivered" },
              { value: "100%", label: "Responsive and polished UI" },
            ].map((item) => (
              <div key={item.label} className="pro-card-soft rounded-3xl p-5">
                <div className="text-2xl font-bold text-foreground">{item.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HomeSection;
