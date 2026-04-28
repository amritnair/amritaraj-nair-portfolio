import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, GraduationCap, TrendingUp, Users } from "lucide-react";

const vp = { once: false, amount: 0.3 };
const ease = [0.25, 0.1, 0.25, 1] as const;

const About = () => {
  const skills = [
    "Python", "Java", "C++", "TypeScript", "React", "JavaScript",
    "NumPy", "Git", "Linux", "APIs", "Machine Learning", "Circuit Design"
  ];

  const highlights = [
    { icon: GraduationCap, label: "CS Honors", detail: "Texas A&M '29" },
    { icon: Code2, label: "AI Research", detail: "NRC Models" },
    { icon: TrendingUp, label: "Quant Engineer", detail: "Scholars of Finance · Maroon Fund" },
    { icon: Users, label: "Aggies in Tech", detail: "Member & Contributor" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={vp}
          >
            <p className="mono text-primary text-xs tracking-widest uppercase mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-foreground">
              Building at the intersection of
              <br />
              <span className="text-gradient">code &amp; community</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-3 space-y-5">
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={vp}
              >
                I'm a Computer Science Honors student at Texas A&M, National Merit Scholar,
                and President's Endowed Scholar. Proficient in C++ and systems-level programming,
                I focus on AI research, cybersecurity, and building tools that create real-world impact.
              </motion.p>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                viewport={vp}
              >
                From developing Python-based AI models for livestock nutrition at Texas A&M
                to building full-stack applications, I bring engineering rigor to every project.
                I'm passionate about multidisciplinary work — especially at the intersection of
                finance and mathematics.
              </motion.p>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={vp}
              >
                <p className="text-xs text-muted-foreground mb-3 mono uppercase tracking-widest">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-all duration-200 rounded-full px-3 py-1 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  viewport={vp}
                  className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-hover transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
