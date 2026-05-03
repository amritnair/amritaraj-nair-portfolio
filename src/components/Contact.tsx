import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const vp = { once: true, amount: 0.2 };
const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { icon: Mail,   label: "amritnair23@gmail.com", href: "mailto:amritnair23@gmail.com", accent: "border-l-blue-500",   color: "text-blue-600"   },
  { icon: Phone,  label: "214-316-6196",           href: "tel:+12143166196",             accent: "border-l-teal-500",   color: "text-teal-600"   },
  { icon: MapPin, label: "Flower Mound, TX",        href: "#",                            accent: "border-l-emerald-500", color: "text-emerald-600" },
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
    <section id="contact" className="page-section section-peach">
      <div className="section-wrap">

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }} viewport={vp} className="section-header">
            <div className="absolute -top-4 right-0 section-index select-none">03</div>
            <p className="section-num mb-3">03 · Contact</p>
            <h2 className="section-title text-balance">
              Let's build<br />
              <span className="text-gradient">something</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            <motion.form onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }} viewport={vp}
              className="lg:col-span-3 space-y-4 surface-panel-strong p-5 sm:p-7">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">First</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} required
                    className="bg-sky-50/70 border-border focus:border-primary/50 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/60" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">Last</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} required
                    className="bg-sky-50/70 border-border focus:border-primary/50 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/60" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required
                  className="bg-sky-50/70 border-border focus:border-primary/50 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/60" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">Subject</Label>
                <Input id="subject" value={formData.subject} onChange={handleChange} required
                  className="bg-sky-50/70 border-border focus:border-primary/50 rounded-lg font-mono text-foreground placeholder:text-muted-foreground/60" placeholder="Project Collaboration" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">Message</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} required
                  className="bg-sky-50/70 border-border focus:border-primary/50 rounded-lg min-h-32 resize-none font-mono text-foreground placeholder:text-muted-foreground/60" placeholder="Tell me about your project or idea..." />
              </div>
              <Button type="submit" disabled={isSubmitting}
                className="w-full btn-primary font-mono font-semibold border-0 text-white rounded-lg">
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }} viewport={vp}
              className="lg:col-span-2 flex flex-col gap-4">
              <div className="surface-panel border-l-4 border-l-amber-500 bg-amber-50/75 p-6">
                <p className="font-black text-amber-950 mb-2 display text-lg">Looking to connect</p>
                <p className="text-sm text-amber-900/80 leading-relaxed">
                  Looking for internships, research collabs, and interesting projects.
                  If you're building something cool, let's talk.
                </p>
              </div>
              <div className="space-y-2">
                {links.map((link, i) => (
                  <motion.a key={link.label} href={link.href}
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease }} viewport={vp}
                    className={`flex items-center gap-4 p-4 border-l-4 ${link.accent} surface-panel hover:border-primary/25 transition-all duration-200 group card-glow`}>
                    <link.icon className={`h-4 w-4 ${link.color} shrink-0`} />
                    <span className="text-sm mono text-muted-foreground group-hover:text-foreground transition-colors flex-1 truncate">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
