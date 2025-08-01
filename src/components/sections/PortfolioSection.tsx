import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ScrollFadeIn from '../ScrollFadeIn';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Vitalis-Smart Health Management System",
      description: "Architected a secure, full-stack MERN hospital platform with role-based access, JWT authentication, and an AI disease prediction model achieving 85% accuracy",
      technologies: ["React", "Node.js", "MongoDB", "Python", "Scikit-learn", "JWT", "Socket.io", "Razorpay", "Tailwind CSS"],
      link: "https://github.com/saikumarreddymopuri/Vitalis-Smart-Health-Management-Disease-Prediction-System.",
      gradient: "from-primary to-accent"
    },
    {
      title: "Real-Time Project Management System",
      description: "Increased on-time project completion by 85% with a secure, role-based tracking interface (JWT) and instant notifications (Socket.io)",
      technologies: ["Node.js", "Express.js", "React", "MongoDB", "JWT", "Socket.io"],
      link: "https://github.com/saikumarreddymopuri/Project-Management",
      gradient: "from-secondary to-primary"
    },
    {
      title: "NestTube - YouTube Backend Clone",
      description: "Architected a scalable video backend that reduced API latency by 45% and boosted user engagement by 65% using complex MongoDB Aggregation pipelines",
      technologies: ["MERN Stack", "JWT", "Refresh Tokens", "MongoDB Aggregation"],
      link: "https://github.com/saikumarreddymopuri/NestTube-youtube-inspired-backend-",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.title} delay={200 + index * 200}>
              <div className="glass-card p-6 h-full flex flex-col group hover:scale-105 transition-all duration-500 neon-glow-hover">
                <div className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />
                
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="neon" 
                    size="sm" 
                    asChild 
                    className="w-full group"
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;