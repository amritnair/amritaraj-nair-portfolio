import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isInView } = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Hi Amritaraj,\n\nMy name is ${formData.firstName} ${formData.lastName}.\n\n${formData.message}\n\nBest regards,\n${formData.firstName} ${formData.lastName}\n${formData.email}`
      );
      window.location.href = `mailto:amritnair23@gmail.com?subject=${subject}&body=${body}`;
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: formData });
      if (error) throw error;
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error:", error);
      toast({ title: "Error", description: "Failed to send. Try emailing directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const links = [
    { icon: Mail, label: "amritnair23@gmail.com", href: "mailto:amritnair23@gmail.com" },
    { icon: Phone, label: "214-316-6196", href: "tel:+12143166196" },
    { icon: MapPin, label: "Flower Mound, TX", href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mono text-primary text-sm tracking-widest uppercase mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
              Let's <span className="text-gradient">connect</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm text-muted-foreground">First Name</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} required
                    className="bg-card border-border/50 focus:border-primary/50 rounded-xl" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm text-muted-foreground">Last Name</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} required
                    className="bg-card border-border/50 focus:border-primary/50 rounded-xl" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required
                  className="bg-card border-border/50 focus:border-primary/50 rounded-xl" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm text-muted-foreground">Subject</Label>
                <Input id="subject" value={formData.subject} onChange={handleChange} required
                  className="bg-card border-border/50 focus:border-primary/50 rounded-xl" placeholder="Project Collaboration" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} required
                  className="bg-card border-border/50 focus:border-primary/50 rounded-xl min-h-32" placeholder="Tell me about your project..." />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glow hover:shadow-[0_0_80px_hsl(0_85%_55%/0.25)] transition-all duration-500"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to discussing new projects, research opportunities, 
                or ways to create impact through technology.
              </p>

              <div className="space-y-3 pt-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-card transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <link.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
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
