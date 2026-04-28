import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Play, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/projects";
import { useEffect } from "react";

type Project = typeof PROJECTS[0] & { demoUrl?: string };

interface Props {
  project: Project | null;
  onClose: () => void;
}

const accentBar: Record<string, string> = {
  "AlphaForge":    "from-emerald-400 to-teal-400",
  "Shot Sensei":   "from-amber-400 to-orange-400",
  "ClinicalHours": "from-sky-400 to-blue-400",
};

const ProjectDrawer = ({ project, onClose }: Props) => {
  // close on escape
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  // lock body scroll
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const gradient = accentBar[project?.title ?? ""] ?? "from-orange-400 to-amber-400";

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — slides up from bottom */}
          <motion.div
            key="panel"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.9 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-card shadow-2xl"
          >
            {/* Drag handle */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm pt-4 pb-3 px-6 z-10 rounded-t-3xl">
              <div className="w-10 h-1 rounded-full bg-border mx-auto mb-4" />
              <div className="flex items-center justify-between">
                <h2 className="display text-2xl font-bold text-foreground">{project.title}</h2>
                <button onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              {/* Gradient accent line */}
              <div className={`h-0.5 w-full mt-3 rounded-full bg-gradient-to-r ${gradient}`} />
            </div>

            <div className="px-6 pb-10 space-y-8 max-w-2xl mx-auto">
              {/* Hero image */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-muted shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Description */}
              <div>
                <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-3">About</p>
                <p className="text-foreground leading-relaxed">{project.fullDescription ?? project.description}</p>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-3">Highlights</p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
              <div>
                <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-full text-xs text-muted-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="btn-primary rounded-full text-white border-0 font-semibold flex-1 sm:flex-none">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button asChild variant="outline" className="rounded-full hover:border-primary/40 flex-1 sm:flex-none">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4 fill-current" />
                      Watch Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button asChild variant="outline" className="rounded-full hover:border-primary/40 flex-1 sm:flex-none">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDrawer;
