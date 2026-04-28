import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const vp = { once: true, amount: 0.2 };
const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { icon: Mail, label: "amritnair23@gmail.com", href: "mailto:amritnair23@gmail.com", color: "text-violet-400", bg: "bg-violet-500/10 group-hover:bg-violet-500/15" },
  { icon: Phone, label: "214-316-6196", href: "tel:+12143166196", color: "text-cyan-400", bg: "bg-cyan-500/10 group-hover:bg-cyan-500/15" },
  { icon: MapPin, label: "Flower Mound, TX", href: "#", color: "text-pink-400", bg: "bg-pink-500/10 group-hover:bg-pink-500/15" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Hi Amritaraj,\n\nMy name is ${formData.firstName} ${formData.lastName}.\n\n${formData.message}\n\nBest regards,\n${formData.firstName} ${formData.lastName}\n${formData.email}`);
      window.location.href = `mailto:amritnair23@gmail.com?subject=${subject}&body=${body}`;
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: formData });
      if (error) throw error;
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Failed to send. Try emailing directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={vp}
            className="mb-14"
          >
            <p className="section-num mb-3">03 — Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's build something<br />
              <span className="text-gradient">together</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              viewport={vp}
              className="lg:col-span-3 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-xs mono text-muted-foreground uppercase tracking-widest">First</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} required
                    className="bg-card border-border focus:border-violet-500/50 rounded-xl transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-xs mono text-muted-foreground uppercase tracking-widest">Last</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} required
                    className="bg-card border-border focus:border-violet-500/50 rounded-xl transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs mono text-muted-foreground uppercase tracking-widest">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required
                  className="bg-card border-border focus:border-violet-500/50 rounded-xl transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs mono text-muted-foreground uppercase tracking-widest">Subject</Label>
                <Input id="subject" value={formData.subject} onChange={handleChange} required
                  className="bg-card border-border focus:border-violet-500/50 rounded-xl transition-colors" placeholder="Project Collaboration" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs mono text-muted-foreground uppercase tracking-widest">Message</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} required
                  className="bg-card border-border focus:border-violet-500/50 rounded-xl min-h-32 resize-none transition-colors" placeholder="Tell me about your project or idea..." />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient rounded-full text-white border-0 font-semibold"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            {/* Right panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              viewport={vp}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Open to work card */}
              <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-purple-500/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  <span className="text-sm font-semibold text-violet-300">Open to opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm actively looking for internships, research collaborations, and interesting projects.
                  If you're building something cool — let's talk.
                </p>
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease }}
                    viewport={vp}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-border/80 transition-all duration-300 group card-glow"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${link.bg}`}>
                      <link.icon className={`h-4 w-4 ${link.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1 truncate">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-violet-400 transition-colors shrink-0" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
