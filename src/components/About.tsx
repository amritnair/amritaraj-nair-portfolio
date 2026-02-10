import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const About = () => {
  const { ref, isInView } = useInView();

  const skills = [
    "Python", "Java", "C++", "TypeScript", "React", "JavaScript",
    "NumPy", "Git", "Linux", "APIs", "Machine Learning", "Circuit Design"
  ];

  const highlights = [
    { icon: GraduationCap, label: "CS Honors", detail: "Texas A&M '29" },
    { icon: Code2, label: "AI Research", detail: "NRC Models" },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mono text-primary text-sm tracking-widest uppercase mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Building at the intersection of
              <br />
              <span className="text-gradient">code & community</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a Computer Science Honors student at Texas A&M, National Merit Scholar, 
                and President's Endowed Scholar. I focus on AI research, cybersecurity, 
                and building tools that create real-world impact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From developing Python-based AI models for livestock nutrition at Texas A&M
                to building full-stack and AI-powered applications, I bring 
                engineering rigor to every project I touch.
              </p>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3 mono">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-300 rounded-full px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-hover transition-all duration-500 group"
                >
                  <item.icon className="h-5 w-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
