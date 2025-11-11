import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import frcRobotImage from "@/assets/frc-robot.jpg";

const AllProjects = () => {
  const projects = [
    {
      title: "The Sunlight Initiative",
      description: "Co-founded 501(c)(3) nonprofit with 15+ chapters nationwide, raising over $5000 for various charities and collecting 15,000+ books for underprivileged schools in the DFW area.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Non-Profit Management", "Social Media", "Community Outreach", "Event Planning"],
      liveUrl: "https://www.instagram.com/sunlightinitiative/",
      githubUrl: "#",
      featured: true,
      buttonConfig: { type: "website" }
    },
    {
      title: "AI Livestock Modeling Research", 
      description: "Developed Python-based nutrition model simulating beef cattle growth, reproduction, and nutrient balances using NRC standards at Texas A&M University.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Python", "NumPy", "Data Analysis", "Machine Learning"],
      liveUrl: "https://aggiecollaborate.tamu.edu",
      githubUrl: "https://github.com/CNM-University-of-Guelph/NASEM-Model-Python/blob/main/README.qmd",
      featured: true,
      buttonConfig: { type: "both" }
    },
    {
      title: "FRC Robotics Team 4192",
      description: "Build and Circuit Lead for award-winning robotics team. Winner of Amarillo District 2024, NTX Plano 2024, and multiple engineering awards.",
      image: frcRobotImage,
      technologies: ["Robotics", "Circuit Design", "Java", "Engineering"],
      liveUrl: "https://www.fmhsrobotics.com",
      githubUrl: "#",
      featured: false,
      buttonConfig: { type: "website" }
    },
    {
      title: "Cybersecurity Research",
      description: "Research on RoboDuck tool for automated fuzzing and vulnerability detection in open source repositories, analyzing LLM security vulnerabilities.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80", 
      technologies: ["Python", "Cybersecurity", "LLM Research", "Vulnerability Analysis"],
      liveUrl: "https://theori.io/blog/aixcc-and-roboduck-63447",
      githubUrl: "https://github.com/theori-io/aixcc-afc-archive/",
      featured: false,
      buttonConfig: { type: "both" }
    }
  ];

  const renderProjectButtons = (project: typeof projects[0]) => {
    if (project.buttonConfig.type === "website") {
      return (
        <Button asChild variant="secondary" size="sm" className="flex-1">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} website`}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Website
          </a>
        </Button>
      );
    }
    
    if (project.buttonConfig.type === "both") {
      return (
        <>
          <Button asChild variant="secondary" size="sm" className="flex-1">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} website`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Website
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} code on GitHub`}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </>
      );
    }
    
    return null;
  };

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
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={project.title} 
                    className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={project.title} 
                    className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
