import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import frcRobotImage from "@/assets/frc-robot.jpg";
import Navigation from "@/components/Navigation";

const AllProjects = () => {
  const projects = PROJECTS.map((p) =>
    p.title === "FRC Robotics Team 4192" ? { ...p, image: frcRobotImage } : p
  );
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/20 hover:shadow-hover transition-all duration-500"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <Badge variant="outline" className="text-[10px] border-primary/30 text-primary rounded-full">
              Featured
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px] border-border/50 text-muted-foreground rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors">
            <ExternalLink className="h-3.5 w-3.5" /> Live
          </a>
          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-3.5 w-3.5" /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-5xl mx-auto">
          <Button asChild variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-foreground">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back</Link>
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mono text-primary text-sm tracking-widest uppercase mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">All <span className="text-gradient">Projects</span></h1>
            <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
              Research, engineering, nonprofit work, and community impact.
            </p>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6 mono text-muted-foreground">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </div>
          </div>

          {other.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-6 mono text-muted-foreground">Other</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {other.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
