import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Web Development", desc: "React, Next.js, TypeScript" },
  { icon: Palette, label: "UI/UX Design", desc: "Figma, Creative Solutions" },
  { icon: Smartphone, label: "Mobile Apps", desc: "Flutter, Cross-platform" },
  { icon: Globe, label: "WordPress", desc: "Custom themes & plugins" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Text */}
        <div>
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Turning ideas into <span className="text-gradient">digital reality</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a passionate full-stack developer and designer based in Bangladesh,
            specializing in building exceptional digital experiences. With expertise
            spanning web development, mobile apps, and WordPress solutions, I bring
            a unique blend of technical skill and creative vision to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's crafting pixel-perfect interfaces or architecting scalable
            backends, I'm committed to delivering solutions that not only look
            stunning but perform flawlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-5 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
