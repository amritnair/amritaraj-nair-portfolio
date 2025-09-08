import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "Tailwind CSS", "Figma", "AWS", "Docker", "GraphQL"
  ];

  const experiences = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "5+ years building scalable web applications with modern frameworks and technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love to interact with."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, accessibility, and search engine visibility."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about crafting digital experiences that make a difference. 
            I combine technical expertise with creative problem-solving to build solutions that work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">
              With over 5 years in the tech industry, I've had the privilege of working with startups 
              and established companies to bring their digital visions to life. My approach combines 
              clean, efficient code with user-centered design principles.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or mentoring aspiring developers in my community.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="transition-smooth hover:shadow-card">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <exp.icon className="h-5 w-5 text-accent" />
                    </div>
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;