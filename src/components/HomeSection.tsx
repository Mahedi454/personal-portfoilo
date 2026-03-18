import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Scene3D from "./Scene3D";

const HomeSection = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {isLight ? <div className="hero-light-bg" /> : <Scene3D />}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm font-mono font-semibold text-primary tracking-[0.25em] uppercase mb-4"
        >
          Developer & Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Md. Mahedi Hasan Shihab</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
            isLight ? "text-foreground/90" : "text-muted-foreground"
          }`}
        >
          Crafting immersive digital experiences through clean code,
          creative design, and cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-all hover:scale-105 glow-accent"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className={`px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:scale-105 border ${
              isLight
                ? "border-primary/40 text-foreground hover:border-primary hover:text-primary"
                : "border-border text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
