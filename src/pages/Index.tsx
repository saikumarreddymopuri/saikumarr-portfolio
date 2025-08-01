import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
const Index = () => {
  return <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-primary/20">
        <div className="container mx-auto px-6">
          <p>© 2025 Mopuri Saikumar Reddy. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>;
};
export default Index;