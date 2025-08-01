import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';
import ScrollFadeIn from '../ScrollFadeIn';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rotate-45 float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rotate-12 float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border border-secondary/30 rotate-45 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary/20 rotate-12 float-animation" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollFadeIn>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Crafting Intelligent</span>
            <br />
            <span className="text-foreground">Digital Solutions</span>
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A MERN Stack Developer specializing in full-stack platforms, efficient APIs, and AI-powered applications.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="hero"
              onClick={scrollToPortfolio}
              className="group"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="neon" 
              size="hero"
              asChild
              className="group"
            >
              <a 
                href="https://drive.google.com/file/d/18FlUSCqHAIi0nXmQ9fno73U3Rd865YTz/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={600}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Based in Bangalore</p>
            <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent mx-auto animate-pulse" />
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default HeroSection;