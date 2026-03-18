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
    title: "Mobile",
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
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
          Technical <span className="text-gradient">Skills</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-sm font-mono text-primary mb-5 tracking-wider uppercase">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
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
