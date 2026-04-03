import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 82 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "App Development",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 83 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 92 },
      { name: "Figma", level: 88 },
      { name: "WordPress", level: 90 },
      { name: "Firebase", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-shell"
      >
        <div className="section-header">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">
            Practical skills across <span className="text-gradient">front-end, back-end, and product tools</span>.
          </h2>
          <p className="section-copy">
            These are the tools and technologies I use most often in my day-to-day project work.
          </p>
        </div>
      </motion.div>

      <div className="section-shell grid gap-8 sm:grid-cols-2">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="pro-card rounded-[1.75rem] p-5 sm:p-6"
          >
            <h3 className="mb-5 text-sm font-mono uppercase tracking-wider text-primary">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-foreground/80">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05 }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,#49d9ff_0%,#bfd4ca_52%,#ff8c61_100%)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
