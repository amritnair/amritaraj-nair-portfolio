import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import { useRef } from "react";

const vp = { once: true, amount: 0.15 };
const ease = [0.22, 1, 0.36, 1] as const;

const projectAccents: Record<string, { gradient: string; border: string; tag: string }> = {
  "AlphaForge": {
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "hover:border-emerald-500/30",
    tag: "🚀 Live",
  },
  "Shot Sensei": {
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    border: "hover:border-yellow-500/30",
    tag: "🏆 Award Winner",
  },
  "ClinicalHours": {
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "hover:border-cyan-500/30",
    tag: "🤖 AI-Powered",
  },
};

const TiltCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const accent = projectAccents[project.title] ?? {
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    border: "hover:border-violet-500/30",
    tag: "✨ Featured",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease }}
      viewport={vp}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 ${accent.border} card-glow`}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-b ${accent.gradient} opacity-80`} />
          {/* Tag badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/50 backdrop-blur-sm border border-white/10 text-white">
              {accent.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[10px] border-border/60 text-muted-foreground rounded-full"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-[10px] border-border/60 text-muted-foreground rounded-full">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors"
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
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Things I've <span className="text-gradient">built</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <TiltCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            viewport={vp}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-border hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
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
