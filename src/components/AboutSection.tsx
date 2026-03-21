import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Palette, Smartphone } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Web Development", desc: "React, Next.js, TypeScript" },
  { icon: Palette, label: "UI/UX Design", desc: "Figma, conversion-focused interfaces" },
  { icon: Smartphone, label: "App Development", desc: "Ongoing Flutter builds and cross-platform delivery" },
  { icon: Globe, label: "WordPress", desc: "Custom themes, CMS builds, and support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
      >
        <div className="max-w-2xl">
          <div className="eyebrow">About Me</div>
          <h2 className="section-title">
            I turn product ideas into <span className="text-gradient">credible, modern experiences</span>.
          </h2>
          <p className="section-copy">
            I&apos;m a Bangladesh-based developer and designer focused on building websites
            and apps that feel premium from the first interaction. My work blends strong
            front-end execution, ongoing app development, solid engineering, and clear visual hierarchy.
          </p>
          <div className="pro-card mt-8 rounded-[2rem] p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Approach
                </p>
                <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                  Design systems, websites, and app experiences in one workflow.
                </h3>
              </div>
              <ArrowUpRight className="mt-1 text-primary" />
            </div>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              From landing pages to dashboards and active app projects, I focus on clarity,
              motion, and maintainable code so the final result feels professional instead of generic.
            </p>
          </div>
        </div>

        <div className="grid w-full max-w-[34rem] grid-cols-1 gap-4 self-center justify-self-center sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="pro-card group flex min-h-[190px] flex-col rounded-[1.75rem] p-5 sm:p-6 cursor-default"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/16">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
