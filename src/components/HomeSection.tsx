import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm font-mono text-primary tracking-widest uppercase mb-4"
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
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
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
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all hover:scale-105 glow-primary"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold text-base hover:border-primary hover:text-primary transition-all hover:scale-105"
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
