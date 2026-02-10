import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If Supabase is not configured, open email client instead
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
      if (!supabase) {
        throw new Error("Supabase not configured");
      }
      
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amritnair23@gmail.com",
      action: "mailto:amritnair23@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "214-316-6196",
      action: "tel:+12143166196"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Flower Mound, Texas",
      action: "#"
    }
  ];

  const { ref, isInView } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-gradient-to-b from-background to-muted/30 ${isInView ? "in-view" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll stagger-1">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-on-scroll stagger-1 rounded-2xl border border-border/50 hover:border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or just say hello!"
                    className="min-h-32"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-on-scroll stagger-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="group cursor-pointer hover:shadow-card transition-all duration-300 rounded-2xl border border-border/50 hover:border-accent/20 hover:-translate-y-0.5">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Quick Response</h4>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to call me directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;