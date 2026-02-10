import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import frcRobotImage from "@/assets/frc-robot.jpg";
import { PROJECTS } from "@/data/projects";
import { useInView } from "@/hooks/use-in-view";

const Projects = () => {
  const { ref, isInView } = useInView();
  const projects = PROJECTS.map((p) =>
    p.title === "FRC Robotics Team 4192" ? { ...p, image: frcRobotImage } : p
  );

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 bg-muted/30 ${isInView ? "in-view" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll stagger-1">
            A showcase of my work in research, robotics, nonprofit leadership, and community impact initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 animate-on-scroll rounded-2xl border border-border/50 hover:border-accent/20 hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button asChild variant="secondary" size="sm" className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} website`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Website
                      </a>
                    </Button>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} code on GitHub`}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll stagger-4">
          <Button asChild variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 rounded-full px-8">
            <Link to="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;