import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";

const AllProjects = () => {
  const projects = PROJECTS;

  const renderProjectButtons = (project: typeof projects[0]) => (
    <>
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
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of my work in research, robotics, nonprofit leadership, and community impact initiatives.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 rounded-2xl border border-border/50 hover:border-accent/20 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {renderProjectButtons(project)}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
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
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 rounded-2xl border border-border/50 hover:border-accent/20 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {renderProjectButtons(project)}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
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
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
