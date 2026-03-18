import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration, inventory management, and responsive design.",
    tools: ["React", "Node.js", "Stripe", "MongoDB"],
    impact: "Increased client sales by 40%",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Healthcare Dashboard",
    description: "Real-time patient monitoring dashboard with data visualization and appointment scheduling.",
    tools: ["Flutter", "Firebase", "Charts"],
    impact: "Used by 500+ healthcare workers",
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Portfolio CMS",
    description: "Custom WordPress theme with headless CMS architecture for content creators and agencies.",
    tools: ["WordPress", "PHP", "REST API"],
    impact: "Deployed for 10+ clients",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    tools: ["React", "TypeScript", "Supabase"],
    impact: "3,000+ active users",
    color: "from-accent/20 to-primary/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Gradient header */}
            <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-2xl bg-background/30 backdrop-blur flex items-center justify-center">
                <Code2Icon className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-xs font-medium text-primary">{project.impact}</p>

              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={16} />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Simple code icon
const Code2Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

export default ProjectsSection;
