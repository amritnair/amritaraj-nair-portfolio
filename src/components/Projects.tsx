import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Sunlight Initiative",
      description: "Co-founded 501(c)(3) nonprofit with 15+ chapters nationwide, raising over $5000 for various charities and collecting 15,000+ books for underprivileged schools in the DFW area.",
      image: "/api/placeholder/400/250",
      technologies: ["Non-Profit Management", "Social Media", "Community Outreach", "Event Planning"],
      liveUrl: "https://thesunlightinitiative.com",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Livestock Modeling Research", 
      description: "Developed Python-based nutrition model simulating beef cattle growth, reproduction, and nutrient balances using NRC standards at Texas A&M University.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "NumPy", "Data Analysis", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "FRC Robotics Team 4192",
      description: "Build and Circuit Lead for award-winning robotics team. Winner of Amarillo District 2024, NTX Plano 2024, and multiple engineering awards.",
      image: "/api/placeholder/400/250",
      technologies: ["Robotics", "Circuit Design", "Java", "Engineering"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Cybersecurity Research",
      description: "Research on RoboDuck tool for automated fuzzing and vulnerability detection in open source repositories, analyzing LLM security vulnerabilities.",
      image: "/api/placeholder/400/250", 
      technologies: ["Python", "Cybersecurity", "LLM Research", "Vulnerability Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in research, robotics, nonprofit leadership, and community impact initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} 
                  className={`group overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in ${
                    project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
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

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;