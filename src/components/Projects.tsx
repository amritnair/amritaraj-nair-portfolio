import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";

const vp = { once: false, amount: 0.2 };
const ease = [0.25, 0.1, 0.25, 1] as const;

const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={vp}
          >
            <p className="mono text-primary text-xs tracking-widest uppercase mb-4">Work</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            {featured.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.06, ease }}
                viewport={{ once: true, amount: 0.15 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-hover transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 md:h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-[10px] border-border text-muted-foreground rounded-full bg-background/60"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            viewport={vp}
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              <Link to="/projects">
                All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
