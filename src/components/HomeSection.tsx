import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Scene3D from "./Scene3D";

const HomeSection = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-14 md:pt-28 lg:px-12 lg:pt-28 lg:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--background)/0.08),transparent_30%),radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.10),transparent_24%),linear-gradient(180deg,hsl(var(--background)/0.05)_0%,hsl(var(--background)/0.18)_56%,hsl(var(--background)/0.42)_100%)]" />
      <div className="absolute inset-0 opacity-90">
        <Scene3D />
      </div>
      <div className="hero-orb left-[-12rem] top-20 h-72 w-72 bg-[var(--hero-orb-a)]" />
      <div className="hero-orb bottom-8 right-[-10rem] h-80 w-80 bg-[var(--hero-orb-b)]" />
      <div className="mesh-bg absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-shell relative grid min-h-[72svh] items-center gap-10 py-6 sm:min-h-[78svh] sm:py-8 lg:min-h-[calc(100vh-7rem)] lg:py-10">
        <div className="relative z-10 max-w-3xl md:max-w-[42rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles size={14} />
            Full-Stack Web, WordPress, UI/UX & App Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-[3.35rem] lg:text-7xl"
          >
            Building modern websites and digital products with clarity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:text-xl"
          >
            I design and build websites, WordPress solutions, UI systems, and app
            interfaces focused on usability, performance, and a clean visual standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
          >
            <a href="#contact" className="button-primary">
              Let&apos;s Talk
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="button-secondary">
              View Projects
            </a>
            <a
              href="/Mahedi%20Hasan%20CV.pdf"
              download="Mahedi-Hasan-CV.pdf"
              className="button-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3"
          >
            {[
              { value: "4+", label: "Years building products" },
              { value: "20+", label: "Projects delivered" },
              { value: "Active", label: "App projects in development" },
            ].map((item) => (
              <div key={item.label} className="pro-card-soft rounded-3xl p-4 sm:p-5">
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
