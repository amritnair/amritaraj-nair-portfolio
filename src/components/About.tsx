import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const About = () => {
  const { ref, isInView } = useInView();
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
    <section
      id="about"
      ref={ref}
      className={`py-24 bg-gradient-to-b from-background to-muted/30 transition-opacity duration-700 ${isInView ? "in-view" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll stagger-1">
            Passionate about crafting digital experiences that make a difference.
            I combine technical expertise with creative problem-solving to build solutions that work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed animate-on-scroll stagger-1">
              As a Computer Science Honors student at Texas A&M (Class of 2029) and National Merit Scholar,
              I'm passionate about leveraging technology to create meaningful impact. My experience spans
              AI research, robotics engineering, and nonprofit leadership.
            </p>
            <p className="text-lg leading-relaxed animate-on-scroll stagger-2">
              When I'm not researching AI models or building robots, you'll find me playing basketball,
              tutoring students, or organizing community service initiatives through my nonprofit work.
            </p>
            <div className="space-y-4 animate-on-scroll stagger-3">
              <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`shadow-card hover:shadow-hover transition-all duration-300 animate-on-scroll border border-border/50 hover:border-accent/20 hover:-translate-y-1 rounded-2xl overflow-hidden ${
                  index === 0 ? "stagger-2" : index === 1 ? "stagger-3" : "stagger-4"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent/10">
                      <exp.icon className="h-5 w-5 text-accent" />
                    </div>
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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