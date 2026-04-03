import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink, Figma, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

type ProjectsSectionProps = {
  showAll?: boolean;
};

const ProjectsSection = ({ showAll = false }: ProjectsSectionProps) => {
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-shell"
      >
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="section-header mb-0">
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">
              A few <span className="text-gradient">projects</span> I&apos;ve worked on recently.
            </h2>
            <p className="section-copy">
              These include company websites, WordPress work, and interface design projects.
            </p>
          </div>

          {!showAll && (
            <Link to="/projects" className="button-secondary w-fit">
              See All Projects
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </motion.div>

      <div className="section-shell grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="pro-card group overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-56 overflow-hidden border-b border-border/60 bg-background/40">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-background/65 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur">
                {project.type === "figma" ? <Figma size={14} /> : <Globe size={14} />}
                {project.type}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <ArrowUpRight className="shrink-0 text-foreground/60 transition-colors group-hover:text-primary" />
              </div>

              <p className="mb-5 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-mono text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-sm font-semibold text-primary">{project.impact}</p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Open Project
                </span>
                <ExternalLink size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {!showAll && (
        <div className="section-shell mt-10 flex justify-center">
          <Link to="/projects" className="button-primary">
            See All
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
