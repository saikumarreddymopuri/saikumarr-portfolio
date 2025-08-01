import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import ScrollFadeIn from '../ScrollFadeIn';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/saikumarreddymopuri",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/saikumar_mopuri/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: Github,
      href: "https://github.com/saikumarreddymopuri",
      label: "GitHub",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ScrollFadeIn delay={200}>
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Let's Build Something Amazing Together</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to collaborate on innovative projects and discuss new opportunities. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:saikumarmopuri8639@gmail.com"
                    className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 glass-card group-hover:neon-glow transition-all">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>saikumarmopuri8639@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+919966460176"
                    className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 glass-card group-hover:neon-glow transition-all">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+91 9966460176</span>
                  </a>
                </div>
              </div>

              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-card neon-glow-hover transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={400}>
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-card border-primary/20 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-card border-primary/20 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass-card border-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;