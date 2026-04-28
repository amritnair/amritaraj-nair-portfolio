import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Play, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import { useRef, useState } from "react";
import ProjectDrawer from "@/components/ProjectDrawer";

type Project = typeof PROJECTS[0] & { demoUrl?: string };

const vp = { once: true, amount: 0.12 };
const ease = [0.22, 1, 0.36, 1] as const;

const projectMeta: Record<string, { tag: string; tagColor: string; accentBar: string; demoUrl?: string }> = {
  "AlphaForge":    { tag: "Live Product",  tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200", accentBar: "bg-gradient-to-r from-emerald-400 to-teal-400" },
  "Shot Sensei":   { tag: "Award Winner",  tagColor: "bg-amber-100 text-amber-700 border-amber-200",       accentBar: "bg-gradient-to-r from-amber-400 to-orange-400", demoUrl: "https://www.youtube.com/watch?v=v3SNs0O3G5g" },
  "ClinicalHours": { tag: "AI-Powered",    tagColor: "bg-sky-100 text-sky-700 border-sky-200",             accentBar: "bg-gradient-to-r from-sky-400 to-blue-400"   },
};

const TiltCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 280, damping: 28 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const m = projectMeta[project.title] ?? {
    tag: "Featured",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    accentBar: "bg-gradient-to-r from-orange-400 to-amber-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      viewport={vp}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        className="group relative rounded-2xl border border-border bg-card overflow-hidden card-glow shadow-sm cursor-pointer select-none"
      >
        {/* Gradient accent bar */}
        <div className={`h-1 w-full ${m.accentBar}`} />

        {/* Image */}
        <div className="relative overflow-hidden h-48 bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm ${m.tagColor}`}>
              {m.tag}
            </span>
          </div>

          {/* Demo hover overlay */}
          {m.demoUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={m.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground shadow-lg hover:bg-white transition-colors"
              >
                <Play className="h-3.5 w-3.5 fill-current text-orange-500" />
                Watch Demo
              </a>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="display font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] rounded-full text-muted-foreground">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-[10px] rounded-full text-muted-foreground">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              <ExternalLink className="h-3.5 w-3.5" /> Live
            </a>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
              <MousePointerClick className="h-3 w-3" />
              Details
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured) as Project[];
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              viewport={vp}
              className="mb-14"
            >
              <p className="section-num mb-3">02 — Work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Things I've <span className="text-gradient italic">built</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((p, i) => (
                <TiltCard key={p.title} project={p} index={i} onClick={() => setActive(p)} />
              ))}
            </div>

            <motion.div className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }} viewport={vp}>
              <Button asChild variant="outline" size="lg"
                className="rounded-full px-8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200">
                <Link to="/projects">All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectDrawer project={active} onClose={() => setActive(null)} />
    </>
  );
};

export default Projects;
