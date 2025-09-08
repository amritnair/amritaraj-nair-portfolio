import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "Java", "C++", "HTML", "CSS", "JavaScript", 
    "NumPy", "SymPy", "XCode", "Android Studio", "APIs", "Git"
  ];

  const experiences = [
    {
      icon: Code,
      title: "AI & Cybersecurity Research",
      description: "Developing Python-based AI models for livestock systems and researching LLM security vulnerabilities at Texas A&M."
    },
    {
      icon: Palette,
      title: "Robotics & Engineering",
      description: "Build and Circuit Lead for FRC Team 4192, winner of multiple district championships and awards."
    },
    {
      icon: Zap,
      title: "Community Impact",
      description: "Co-Founder of The Sunlight Initiative, raising $5000+ and establishing 15+ chapters nationwide to help underprivileged communities."
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
              As a Computer Science Honors student at Texas A&M (Class of 2029) and National Merit Scholar, 
              I'm passionate about leveraging technology to create meaningful impact. My experience spans 
              AI research, robotics engineering, and nonprofit leadership.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not researching AI models or building robots, you'll find me playing tabla, 
              tutoring students, or organizing community service initiatives through my nonprofit work.
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